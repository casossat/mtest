var path = require('path');

module.exports = {
    runtimeCompiler: true,
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Masivian ERP'
                return args
            });
    },
    transpileDependencies: ['vuex-persist'],
    chainWebpack: config => {
        config.resolve.alias
            .set('@', path.resolve(__dirname, 'src/'));
    },
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "./src//assets/scss/main.scss";`
            }
        }
    }
}