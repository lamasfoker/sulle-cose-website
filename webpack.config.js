const path = require('path');
const WebpackPwaManifest = require('webpack-pwa-manifest');

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
        new WebpackPwaManifest({
            inject: false,
            fingerprints: false,
            filename: 'manifest.json',
            name: 'Sulle Cose',
            short_name: 'Sulle Cose',
            background_color: '#ffffff',
            theme_color: '#f3f4f6',
            dir: 'ltr',
            orientation: 'any',
            prefer_related_applications: false,
            icons: [
                {
                    src: './assets/favicon.png',
                    sizes: [192, 180, 167, 152, 144, 120, 114, 96, 76, 72, 60, 57, 32, 16],
                },
            ],
        })
    ]
};
