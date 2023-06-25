import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            '@': '/resources/js',
            vue: 'vue/dist/vue.esm-bundler.js',
        },
    },
});

// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';

// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       '@': '/resources/js',
//     },
//   },

//   build: {
//     outDir: 'public/build',
//     assetsDir: '',
//     manifest: true,
//     rollupOptions: {
//       input: '/resources/js/app.js',
//     },
//   },
// });

