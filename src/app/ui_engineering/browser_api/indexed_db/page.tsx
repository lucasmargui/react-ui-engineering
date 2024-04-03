"use client"

// components/IndexedDBExample.tsx
import { useState, useEffect } from 'react';
import { openDB, DBSchema } from 'idb';

// Define the interface for item
interface Item {
  id: number;
  name: string;
}

// Define the database schema
interface MyDB extends DBSchema {
  'items': {
    key: number;
    value: Item;
    indexes: { 'name': string };
  };
}

const IndexedDBExample = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [itemName, setItemName] = useState<string>('');

  // Function to fetch and set items from IndexedDB
  const fetchItems = async () => {
    try {
      const db = await openDB<MyDB>('my-database', 1, {
        upgrade(db) {
          const store = db.createObjectStore('items', {
            keyPath: 'id',
            autoIncrement: true,
          });
          store.createIndex('name', 'name');
        },
      });

      const tx = db.transaction('items', 'readonly');
      const store = tx.objectStore('items');

      const items = await store.getAll();
      setItems(items);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  useEffect(() => {
    fetchItems(); // Call fetchItems when the component mounts
  }, []);

  const addItem = async () => {
    if (itemName.trim() === '') return;

    

    try {
      const db = await openDB<MyDB>('my-database', 1);
      const tx = db.transaction('items', 'readwrite');
      const store = tx.objectStore('items');


      const newItem: Item = { id: 0, name: itemName }; // 'id' is set to 0, it will be auto-generated by IndexedDB

      console.log(newItem);
      await store.add(newItem);

      setItemName('');
      fetchItems(); // Call fetchItems to update the item list
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div>
      <h2>IndexedDB Example</h2>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Enter item name"
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndexedDBExample;