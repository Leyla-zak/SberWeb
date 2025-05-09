// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
//
// module.exports = {
//     entry: './src/index.tsx',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'bundle.js'
//     },
//     resolve: {
//         extensions: ['.tsx', '.ts', '.js']
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(ts|tsx)$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: [
//                             '@babel/preset-env',
//                             ['@babel/preset-react', { runtime: 'automatic' }],
//                             '@babel/preset-typescript'
//                         ]
//                     }
//                 }
//             },
//
//             {
//                 test: /\.(png|jpe?g|gif|svg)$/i,
//                 type: 'asset/resource',
//                 generator: {
//                     filename: 'images/[name][ext]'
//                 }
//             },
//
//             {
//                 test: /\.css$/,
//                 use: ['style-loader', 'css-loader']
//             }
//         ]
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: './public/index.html'
//         })
//     ],
//     devServer: {
//         static: {
//             directory: path.join(__dirname, 'public'),
//         },
//     }
// };