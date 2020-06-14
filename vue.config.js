/**
 * 配置参考:
 * https://cli.vuejs.org/zh/config/
 */
//const url = 'http://192.168.0.102:9999' //本地
   const url = 'http://49.4.29.134:9999' //线上
module.exports = {
    lintOnSave: true,
    productionSourceMap: false,
    chainWebpack: config => {
        // 忽略的打包文件
        config.externals({
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex': 'Vuex',
            'axios': 'axios',
            'element-ui': 'ELEMENT'
        })
        const entry = config.entry('app')
        entry
            .add('babel-polyfill')
            .end()
        entry
            .add('classlist-polyfill')
            .end()
    },
    // 配置转发代理
    devServer: {
        disableHostCheck: true,
        port: 8080,
        proxy: {
            '/auth': {
                target: url,
                ws: true,
                pathRewrite: {
                    '^/auth': '/auth'
                }
            },
            '/admin': {
                target: url,
                ws: true,
                pathRewrite: {
                    '^/admin': '/admin'
                }
            },
            '/code': {
                target: url,
                ws: true,
                pathRewrite: {
                    '^/code': '/code'
                }
            },
            '/gen': {
                target: url,
                ws: true,
                pathRewrite: {
                    '^/gen': '/gen'
                }
            },
            '/actuator': {
                target: url,
                ws: true,
                pathRewrite: {
                    '^/actuator': '/actuator'
                }
            },
            '/monitor': {
                target: url,
                ws: true,
                pathRewrite: {
                    '^/monitor': '/monitor'
                }
            },
            '/mp': {
                target: url,
                ws: true,
                pathRewrite: {
                    '^/mp': '/mp'
                }
            },
            '/daemon': {
                target: url,
                ws: true,
                pathRewrite: {
                    '^/daemon': '/daemon'
                }
            },
            '/job': {
                target: url,
                ws: true,
                pathRewrite: {
                    '^/job': '/job'
                }
            },
            '/tx': {
                target: url,
                ws: true,
                pathRewrite: {
                    '^/tx': '/tx'
                }
            },
            '/act': {
                target: url,
                ws: true,
                pathRewrite: {
                    '^/act': '/act'
                }
            },
            '/basic': {
                target: url,
                ws: true,
                pathRewrite: {
                    '^/basic': '/basic'
                }
            },
            '/diamonds': {
                target: url,
                ws: true,
                pathRewrite: {
                    '^/diamonds': '/diamonds'
                }
            },
            '/database': {
                target: url,
                ws: true,
                pathRewrite: {
                    '^/database': '/database'
                }
            },
            '/form': {
                target: url,
                ws: true,
                pathRewrite: {
                    '^/form': '/form'
                }
            }
        }
    }
}
