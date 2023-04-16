const path = require('path');
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
    entry: [
        './node_modules/applause-button/dist/applause-button.js',
        './assets/app.js'
    ],
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'assets/build/'),
    },
    plugins: [
        new WorkboxPlugin.GenerateSW({
            // these options encourage the ServiceWorkers to get in there fast
            // and not allow any straggling "old" SWs to hang around
            clientsClaim: true,
            skipWaiting: true,
            swDest: '../../static/service-worker.js',
        })
    ]
};
