import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  // Объявляем новую переменную состояния "count"  
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <h3>Счетчик</h3>
      <p>Вы нажали {count} раз</p>
      <button className="button1" onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button>
    </div>
  );
}

export default Counter;