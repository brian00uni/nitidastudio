import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // react-useanimations ships CommonJS — pre-bundle it (and the icon
  // subpaths used) so the default import resolves to the component.
  optimizeDeps: {
    include: [
      'react-useanimations',
      'react-useanimations/lib/visibility',
      'react-useanimations/lib/maximizeMinimize',
      'react-useanimations/lib/codepen',
      'react-useanimations/lib/settings',
      'react-useanimations/lib/share',
      'react-useanimations/lib/edit',
    ],
  },
})
