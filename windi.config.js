import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'media',
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
})
