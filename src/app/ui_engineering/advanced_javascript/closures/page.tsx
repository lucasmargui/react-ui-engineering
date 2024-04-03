"use client"

import React, { useState, useEffect, ChangeEvent } from 'react';

const CombinedExamples = () => {
  // Example 1: Event Handlers
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1); // Closure over 'count'
  };

  // Example 2: Conditional Rendering
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Closure over 'isVisible'
  };

  // Example 3: Managing Multiple State Variables
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue2(event.target.value); // Closure over 'value2'
  };

  // Example 4: Passing Data to Child Components
  const [message, setMessage] = useState('');
  const handleMessageChange = (newMessage: string) => {
    setMessage(newMessage); // Closure over 'message'
  };

  // Example 5: Using Effect Hook
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1); // Closure over 'seconds'
    }, 1000);
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run only once

  return (
    <div>
      {/* Example 1: Event Handlers */}
      <div>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Increment</button>
      </div>

      {/* Example 2: Conditional Rendering */}
      <div>
        <button onClick={toggleVisibility}>Toggle</button>
        {isVisible && <p>This is visible!</p>}
      </div>

      {/* Example 3: Managing Multiple State Variables */}
      <div>
        <p>Value 1: {value1}</p>
        <input type="text" value={value2} onChange={handleChange} />
      </div>

      {/* Example 4: Passing Data to Child Components */}
      <div>
        <ChildComponent onMessageChange={handleMessageChange} />
        <p>Parent Message: {message}</p>
      </div>

      {/* Example 5: Using Effect Hook */}
      <p>Elapsed Time: {seconds} seconds</p>
    </div>
  );
};

const ChildComponent: React.FC<{ onMessageChange: (message: string) => void }> = ({ onMessageChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onMessageChange(event.target.value);
  };

  return <input type="text" onChange={handleChange} />;
};

export default CombinedExamples;
