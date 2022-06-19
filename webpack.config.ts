import path from 'path'
import NodemonPlugin from 'nodemon-webpack-plugin'
import 'dotenv/config'
import dotenv from 'dotenv'
import { DefinePlugin } from 'webpack'

module.exports = {
    context: __dirname,
    mode: process.env.NODE_ENV,
    entry: {
        main: path.resolve(
            __dirname,
            process.env.CLUSTER === 'ON' ? './src/cluster.ts' : './src/index.ts'
        ),
    },
    resolve: {
        extensions: ['.json', '.ts'],
        symlinks: false,
        cacheWithContext: false,
        plugins: [],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    optimization: {
        concatenateModules: false,
    },
    target: 'node',
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.(tsx?)$/,
                loader: 'ts-loader',
                exclude: [
                    [
                        path.resolve(__dirname, 'node_modules'),
                        path.resolve(__dirname, 'dist'),
                    ],
                ],
                options: {
                    transpileOnly: true,
                    experimentalWatchApi: true,
                },
            },
        ],
    },
    plugins: [
        new NodemonPlugin({ script: 'dist/main.bundle.js' }),
        new DefinePlugin({
            'process.env': JSON.stringify(dotenv.config().parsed),
        }),
    ],
}
