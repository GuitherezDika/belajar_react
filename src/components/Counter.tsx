import { useState } from "react";


interface CounterProps {
  initial?: number;
  label?: string;
}

const Counter: React.FC<CounterProps> = ({ initial = 0, label = 'Counter' }) => {
  const [count, setCount] = useState<number>(initial);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(initial);

  return (
    <div style={{
      border: '1px solid #ddd',
      padding: 12,
      borderRadius: 8, display: 'inline-block'
    }}>
      <h3>{label}</h3>
      <p>Count: {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment} style={{ marginLeft: 8 }}>+</button>
      <button onClick={reset} style={{ marginLeft: 8 }}>Reset</button>
    </div>
  )
}

export default Counter;