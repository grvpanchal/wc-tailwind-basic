import tailwind from 'tailwindcss';
import postcss from 'rollup-plugin-postcss'
import postcssImport from 'postcss-import';
import copy from 'rollup-plugin-copy';
import path from 'path'

const outputDir = './dist/';

export default {
    input: './src/index.js',
    output: {
        dir: outputDir,
        sourcemap: true,
        format: 'esm',
    },
    plugins: [
        postcss({
            config: false,
            plugins: [
                tailwind('./tailwind.config.js'),
                postcssImport()
            ],
            include: "**/style.css",
            extract: path.resolve(`${outputDir}style.css`),
        }),
        postcss({
            config: false,
            plugins: [
                tailwind('./tailwind.config.js'),
                postcssImport()
            ],
            include: "**/app-shell.css",
            extract: path.resolve(`${outputDir}app-shell.css`),
        }),
        copy({
            targets: [
                { src: './src/index.html', dest: outputDir },
                { src: './src/img/', dest: outputDir },
                { src: './src/lib/', dest: outputDir },
            ]
        })
    ]
}
