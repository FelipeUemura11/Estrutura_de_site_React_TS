https://www.youtube.com/watch?v=sHnG8tIYMB4

1 - instalar react-ts com vite
    + npm create vite@latest project_name -- --template react-ts

2 - instalar tailwindcss, tem q aparecer o framework nas dependencias "package.json"
    + cd front
    + npm install tailwindcss @tailwindcss/vite
    
3 - Importar o tailwind no vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
})

4 - @import "tailwindcss"; -> no index.css

5 - instalar outros pacotes
  + npm install axios -> para rotas vindas do node
  + npm install react-router-dom -> links

npm run dev -> para rodar
