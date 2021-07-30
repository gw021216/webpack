
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './js/main.js',
    output: {

        clean: true   
    },


    module: {
        rules: [
            {
                test: /\.s?css$/, 
             
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                    // 순서가 중요함
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },

    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'static'}
            ]// static 폴더 안에있는 내용이
            // dist 라는 폴더에 복사됨
            // 배열이라는 것은 여러개의 경로를 명시가능
        })
    ],

    devServer: {
        host: 'localhost'
    }

}


