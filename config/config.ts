import {defineConfig} from '@umijs/max';
import routes from "./routes"
import proxy from "./proxy"

export default defineConfig({
    antd: {},
    access: {},
    model: {},
    dva:{
        immer:{}
    },
    initialState: {},
    request: {},
    layout: {
        title: '@umijs/max',
    },
    proxy: proxy["dev"],
    routes: routes,
    npmClient: 'pnpm',
    define: {
        ENV: 'test',
    },
    targets: {
        ie: 11,
    },
    alias: {
        '@a': '@/assets/',
        '@c': '@/components/',
        '@v': '@/pages/',
        '@l': '@/less/',
        '@u': '@/utils/',
        '@s': '@/services/',
    },
    // 忽略moment的locale文件 用于减少尺寸
    ignoreMomentLocale: true,
    // 配置是否生成额外用于描述产物的manifest文件，默认会生成asset-manifest.json
    manifest: {
        basePath: '/',
    },
    fastRefresh:true,
    title: '管理平台',
    // favicon: '/favicon-20200303061548659.ico',
    // 配置主题
    theme: {
        '@primary-color': '#3180F5',
        '@font-size-base': '14px',
        '@line-height-base': '1.2',
    },
    // links 配置额外的link标签
    links: [
        { href: '/Luckysheet/plugins/css/pluginsCss.css', rel: 'stylesheet' },
        { href: '/Luckysheet/plugins/plugins.css', rel: 'stylesheet' },
        { href: '/Luckysheet/css/luckysheet.css', rel: 'stylesheet' },
        { href: '/Luckysheet/assets/iconfont/iconfont.css', rel: 'stylesheet' },
    ],
    // <head>里额外的脚本
    headScripts: [
        { src: '/Luckysheet/plugins/js/plugin.js' },
        { src: '/Luckysheet/luckysheet.umd.js' },
        { src: '/sip.min.js', type: 'text/javascript' },
        {
            src:
                'https://wpk-gate.zjzwfw.gov.cn/static/wpk-jssdk.1.0.2/wpkReporter.js',
            crossOrigin: 'true',
        },
        {
            src: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@2.14.305/build/pdf.min.js',
            crossOrigin: 'true',
        },
        { src: '/d3.min.js' }
    ],
});

