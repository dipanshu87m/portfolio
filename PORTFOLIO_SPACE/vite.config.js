import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// Relative base so the build works on GitHub Pages project sites
// (e.g. https://YOUR_USERNAME.github.io/REPO_NAME/) without editing paths per repo.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
