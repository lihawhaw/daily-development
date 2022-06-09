// https://umijs.org/config/
import { defineConfig } from 'umi'
// import proxy from './proxy';
import routes from './routes'
import theme from './theme'

// const { BAIDU_HM_CODE } = process.env

export default defineConfig({
  npmClient: 'pnpm',
  publicPath: '/',
  plugins: [
    '@umijs/plugins/dist/antd',
    '@umijs/plugins/dist/request',
    // '@umijs/plugins/dist/initial-state',
    // '@umijs/plugins/dist/model',
  ],
  antd: {
    import: true,
    style: 'less',
  },
  request: {
    dataField: 'data',
  },
  mfsu: {
    esbuild: true,
  },
  // initialState: {
  //   loading: '@/components/Loading',
  // },
  // dynamicImport: {
  //   loading: '@/components/loading',
  // },
  routes,
  theme,
  // esbuild: {},
  title: '极致源于梦想',
  // ignoreMomentLocale: true,
  // proxy: proxy[REACT_APP_ENV || 'dev'],
  // manifest: {
  //   basePath: '/',
  // },
  // fastRefresh: {},
  // nodeModulesTransform: { type: 'none' },
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
