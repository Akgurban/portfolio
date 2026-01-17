import { defineConfig } from 'vite';

export default defineConfig({
  base: '/portfolio/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  plugins: [
    {
      name: 'transform-absolute-paths',
      transform(code, id) {
        // Only transform JavaScript/TypeScript files in src folder
        if (id.includes('/src/') && (id.endsWith('.js') || id.endsWith('.ts'))) {
          // Transform absolute image paths to include base path
          return code.replace(/src="\/(salam|belli|onki|setir)\.(png|jpeg)"/g, (match, name, ext) => {
            return `src="/portfolio/${name}.${ext}"`;
          });
        }
      },
    },
  ],
});
