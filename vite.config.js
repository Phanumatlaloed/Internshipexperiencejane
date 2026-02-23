import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        experience: 'experience.html',
        Growth: 'projects.html',
        skills: 'skills.html',
        contact: 'contact.html',
        month1: 'month1.html',
        month2: 'month2.html',
        month3: 'month3.html',
        month4: 'month4.html'
      }
    }
  }
})