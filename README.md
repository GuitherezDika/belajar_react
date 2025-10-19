
/*
node_modules
public
  favicon.ico
  index.html
  manifest.json
  robots.txt
  logo192.png
  logo152.png
src
  assets/
  components/
  hooks/
  pages/
  styles/
  App.css
  App.test.js
  App.tsx
  index.css
  index.tsx
  logo.svg
  reportWebVitals.ts
  setupTests.ts
.gitignore
package-lock.json
package.json

=====
buat konfigurasi typescript
npm install typescript @types/node @types/react @types/react-dom @types/jest --save-dev

npx tsc --init
create file baru = tsconfig.json
{
  "compilerOptions": {
    "target": "es6",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "src"
  ]
}
*/

===============================
Roadmap singkat (overview)

Lesson 1 — Komponen, Props, State & Event (ini yang kita lakukan sekarang)

Lesson 2 — List & Key, Conditional Rendering

Lesson 3 — useEffect & Fetch Data (API)

Lesson 4 — Router (multi page) + Link

Lesson 5 — Context / Global State sederhana

Lesson 6 — Custom Hooks & struktur proyek

Lesson 7 — Deployment (Vercel) dan optimasi kecil

====

1
src/components/Counter.tsx

import React, { useState } from 'react';

interface CounterProps {
  initial?: number; // optional prop, default value possible
  label?: string;
}

const Counter: React.FC<CounterProps> = ({ initial = 0, label = 'Counter' }) => {
  const [count, setCount] = useState<number>(initial);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(initial);

  return (
    <div style={{ border: '1px solid #ddd', padding: 12, 
    borderRadius: 8, display: 'inline-block' }}>
      <h3>{label}</h3>
      <p>Count: {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment} style={{ marginLeft: 8 }}>+</button>
      <button onClick={reset} style={{ marginLeft: 8 }}>Reset</button>
    </div>
  );
};

export default Counter;

Penjelasan singkat:

interface CounterProps → mendefinisikan tipe untuk props.

React.FC<CounterProps> → tipe fungsi komponen (boleh juga tulis (): JSX.Element).

useState<number>(initial) → memberi tahu TypeScript bahwa count adalah number.

Event handler seperti onClick tidak perlu diberi tipe secara eksplisit (inferred), tapi nanti kita akan lihat cara mengetik event lebih ketat.
=====

src/App.tsx

import React from 'react';
import Counter from './components/Counter';

function App(): JSX.Element {
  return (
    <div style={{ padding: 24 }}>
      <h1>Belajar React + TypeScript</h1>
      <Counter initial={5} label="Counter Utama" />
      <div style={{ height: 12 }} />
      <Counter initial={0} label="Counter Kedua" />
    </div>
  );
}

export default App;

npm start

=====
src/components/Greeting.tsx

import React from 'react';

interface GreetingProps {
  name: string;
  onGreet?: (message: string) => void;
}

const Greeting: React.FC<GreetingProps> = ({ name, onGreet }) => {
  const handleClick = () => {
    const msg = `Hello, ${name}!`;
    if (onGreet) onGreet(msg);
    alert(msg);
  };

  return (
    <div>
      <p>Hi <strong>{name}</strong></p>
      <button onClick={handleClick}>Greet</button>
    </div>
  );
};

export default Greeting;
===
App.tsx
import Greeting from './components/Greeting';

// di dalam return
<Greeting name="Guitherez" onGreet={(m) => console.log('Greeted:', m)} />

====
Mengetik event handler
Misal kamu punya input dan mau mengetik onChange:

import React, { useState } from 'react';

const NameInput: React.FC = () => {
  const [text, setText] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input value={text} onChange={handleChange} placeholder="Type name" />
      <p>Value: {text}</p>
    </div>
  );
};

export default NameInput;
======

latihan kecil

5) Latihan kecil untuk kamu (5–15 menit)

Buat komponen TodoInput.tsx:

Satu input teks + tombol "Add".

Ketika Add ditekan, tampilkan nilai input di bawah (sebagai daftar sederhana) — tanpa harus persist.

Gunakan useState<string> dan React.FormEvent atau React.ChangeEvent.

Tambahkan TodoInput ke App.tsx.

Kalau butuh, tulis kodenya di sini dan aku koreksi.

============