// https://umijs.org/config/
import { defineConfig } from '@umijs/max'
// import proxy from './proxy';
import routes from './routes'
import theme from './theme'

// const { BAIDU_HM_CODE } = process.env

export default defineConfig({
  // hash: true,
  antd: {
    // configProvider
    configProvider: {},
    // themes
    dark: false,
    compact: true,
    // babel-plugin-import
    import: true,
    // less or css, default less
    style: 'less',
  },
  // dynamicImport: {
  //   loading: '@/components/loading',
  // },
  routes,
  theme,
  // esbuild: {},
  title: '极致源于梦想',
  ignoreMomentLocale: true,
  // proxy: proxy[REACT_APP_ENV || 'dev'],
  // manifest: {
  //   basePath: '/',
  // },
  // fastRefresh: {},
  // nodeModulesTransform: { type: 'none' },
  mfsu: {},
  // webpack5: {},
  // exportStatic: {},
  // crossorigin: true,
  // analytics: {
  //   baidu: BAIDU_HM_CODE,
  // },
  // targets: {
  //   chrome: 79,
  //   firefox: false,
  //   safari: false,
  //   edge: false,
  //   ios: false,
  // },
  cssLoader: {
    // localsConvention: 'camelCase', // umi3配置 umi4未生效
    // exportLocalsConvention: 'camelCase', // webpack loader 配置 未生效
  },
  cssLoaderModules: {},
  lessLoader: {},
  fastRefresh: true,
})
