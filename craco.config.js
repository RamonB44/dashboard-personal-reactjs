const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#5D3C81',
                            // '@menu-dark-bg': '',
                            '@layout-sider-background': '#5D3C81',
                            '@layout-header-background': '#5D3C81',
                            // '@menu-dark-submenu-bg': ''
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};