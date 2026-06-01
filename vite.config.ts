import { defineConfig } from 'vite'
import path from 'path'
import fs from 'fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// 1×1 transparent PNG – used when a figma:asset file is not present locally
const TRANSPARENT_PNG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='

// Virtual module id for figma assets that are missing on disk. The leading \0
// marks it as a virtual module so Vite's built-in `vite:asset` plugin ignores it
// and never tries to read a non-existent .png from disk.
const MISSING_ASSET_PREFIX = '\0figma-missing-asset:'

// Image extensions that should fall back to a placeholder when the file is
// missing from the repo (Figma exports often reference images never committed).
const IMAGE_RE = /\.(png|jpe?g|svg|webp|gif|avif)$/i

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string, importer?: string) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        const filePath = path.resolve(__dirname, 'src/assets', filename)
        // When the physical asset file is absent, redirect to a virtual module
        // that resolves to a transparent placeholder so the build succeeds.
        // Commit the real files to src/assets/ to replace them.
        if (!fs.existsSync(filePath)) {
          return MISSING_ASSET_PREFIX + filename
        }
        return filePath
      }
      // Relative image imports (e.g. ../../imports/image-21.png) whose target
      // file is not present in the repo — fall back to the same placeholder so
      // the build doesn't break. Existing files resolve normally (return undefined).
      if (importer && (id.startsWith('./') || id.startsWith('../')) && IMAGE_RE.test(id)) {
        const filePath = path.resolve(path.dirname(importer), id)
        if (!fs.existsSync(filePath)) {
          return MISSING_ASSET_PREFIX + id
        }
      }
    },
    load(id: string) {
      if (id.startsWith(MISSING_ASSET_PREFIX)) {
        return `export default "${TRANSPARENT_PNG}"`
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/app'),
    },
  },
})
