module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/variables.sass"`,
            },
        },
    },
    pwa: {
        name: 'Shop Titans Calculator',
        themeColor: '#fff581',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: '#2183e8',
        iconPaths: {
            androidChrome192: 'img/icons/android-chrome-192x192.png',
            androidChrome512: 'img/icons/android-chrome-512x512.png',
            favicon32: 'img/icons/favicon-32x32.png',
            favicon16: 'img/icons/favicon-16x16.png',
            appleTouchIcon: 'img/icons/apple-touch-icon.png',
            msTileImage: 'img/icons/mstile-150x150.png'
        }
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/ShopTitansProfitCalculator' : '/ShopTitansProfitCalculator',
};


