
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
src/
 ┣ pages/
 ┃ ┣ Home.jsx
 ┃ ┣ About.jsx
 ┃ ┗ Contact.jsx
 ┣ App.jsx
 ┗ index.jsx
====
REDUX

src/
├── app/
│   ├── store.ts               # Tempat konfigurasi global store
│
├── features/
│   ├── counter/
│   │   ├── counterSlice.ts    # Slice khusus fitur "counter"
│   │   ├── Counter.tsx        # Komponen UI untuk fitur counter
│   │   └── index.ts           # (opsional) export semua dari folder ini
│
├── pages/
│   ├── Home.tsx               # Halaman Home
│   ├── About.tsx              # Halaman About
│
├── components/
│   ├── Button.tsx             # Komponen kecil reusable
│   ├── Input.tsx
│
├── App.tsx
└── main.tsx (atau index.tsx)


===

npm install @reduxjs/toolkit react-redux
store.ts
store utama applikasi
{
  "counter": { "value": 0}, // reducer 1
  
  // dan reducer lainnya
}

2. menghubungkan redux ke react
index.tsx


const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
3. Menggunakan komponen