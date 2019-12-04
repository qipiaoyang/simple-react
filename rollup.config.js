import typescript from 'rollup-plugin-typescript'

export default {
    input: './src/index.ts',
    output: {
        file: './dist/panreact.js',
        format: 'umd',
        name: 'preact'
    },
    plugins: [
        typescript()
    ]
}