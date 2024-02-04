// Counter: Build a simple counter that increments whenever a button is clicked.
// https://www.greatfrontend.com/questions/user-interface/counter
import React, { useState } from 'react';

import './styles.css';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Clicks: {count}
      </button>
    </div>
  );
}
