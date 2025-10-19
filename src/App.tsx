import React from "react";

function App() {
  return <div>Hello World</div>;
}

export default App;


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
  App.css
  App.test.js
  App.tsx
  index.css
  index.js
  logo.svg
  reportWebVitals.js
  setupTests.js
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