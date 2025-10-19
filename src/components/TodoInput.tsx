import React, { useEffect, useState } from 'react';

const TodoInput: React.FC = () => {
  const [text, setText] = useState('');
  const [data, setData] = useState<String[]>([]);

  const handleSave = () => {
    if (text.trim() !== '') {
      setData([...data, text]);
      setText('');
    } else {
      return;
    }
  }

  return (
    <div>
      <div style={{ flexDirection: 'row' }}>
        <input type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Type TODO' />
        <button onClick={handleSave} style={{ marginLeft: 8 }}>SAVE</button>
      </div>
      <ul>
        {data.length > 0 && data.map((todoData, index) => (
          <li key={index}>{todoData}</li>
        ))}
      </ul>
      <button onClick={() => console.log(text)}>cek</button>
    </div>
  )

}

export default TodoInput;