const path = require('path');

module.exports = {
    entry: [
        './node_modules/applause-button/dist/applause-button.js',
        './assets/app.js'
    ],
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'assets/build/'),
    },
};
