import React, { useState } from 'react'

const NameInput: React.FC = () => {
  const [text, setText] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} placeholder='Type Name' />
      <p>Value={text}</p>
    </div>
  )
}

export default NameInput;