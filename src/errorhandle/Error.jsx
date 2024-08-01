import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const ws = new WebSocket('ws://127.0.0.1:3187');

    ws.onopen = () => {
      console.log('WebSocket connected');
    };

    ws.onmessage = (event) => {
      setMessage(event.data);
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    ws.onclose = () => {
      console.log('WebSocket closed');
    };

    return () => ws.close();
  }, []);

  return (
    <div>
      {message}
    </div>
  );
}

export default MyComponent;