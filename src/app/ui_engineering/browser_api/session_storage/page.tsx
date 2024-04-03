// components/StorageExample.tsx
import React, { useState, ChangeEvent } from 'react';

const StorageExample = () => {
  const [localStorageValue, setLocalStorageValue] = useState('');
  const [sessionStorageValue, setSessionStorageValue] = useState('');

  const handleLocalStorageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setLocalStorageValue(value);
    localStorage.setItem('localStorageItem', value);
  };

  const handleSessionStorageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSessionStorageValue(value);
    sessionStorage.setItem('sessionStorageItem', value);
  };

  return (
    <div>
      <h2>Local Storage:</h2>
      <input
        type="text"
        value={localStorageValue}
        onChange={handleLocalStorageChange}
      />

      <h2>Session Storage:</h2>
      <input
        type="text"
        value={sessionStorageValue}
        onChange={handleSessionStorageChange}
      />
    </div>
  );
};

export default StorageExample;
