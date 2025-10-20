import { useState } from "react"

const NameList: React.FC = () => {
  const [userName, setName] = useState<string>('');
  const [names, setNames] = useState<string[]>([]);

  const handleAdd = () => {
    if (userName.trim() !== '') {
      setNames([...names, userName]);
      setName('');
    } else {
      return;
    }
  }

  const handleDelete = (index: number) => {
    var updated = [...names];
    updated.splice(index, 1);
    setNames(updated);
  }

  return (
    <div>
      <h5>Nama Anggota</h5>
      <div style={{ flexDirection: 'row' }}>
        <input type="text" value={userName}
          onChange={(e) => setName(e.target.value)} placeholder="type name"
          onKeyDown={(e) => {
            if (e.key == 'Enter') handleAdd();
          }}
        />
        <button onClick={handleAdd} style={{ marginLeft: 8 }}>add</button>
      </div>
      {names.length == 0 ? (
        <p>No names inputted!</p>
      ) : (
        <ul>
          {names.map((name, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ flex: 1 }}>{name}</span>
              <button onClick={() => handleDelete(index)}>❌</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default NameList;