import crypto from 'node:crypto';

// Polyfill crypto.hash for compatibility with older Node.js versions (< 21.7.0)
if (!crypto.hash) {
  crypto.hash = function (algorithm, data, outputEncoding) {
    const hasher = crypto.createHash(algorithm).update(data);
    return outputEncoding ? hasher.digest(outputEncoding) : hasher.digest();
  };
}

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});

