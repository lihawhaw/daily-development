// https://umijs.org/config/
import { defineConfig } from 'umi'
// import proxy from './proxy';
import routes from './routes'
import theme from './theme'

const { BAIDU_HM_CODE } = process.env

export default defineConfig({
  hash: true,
  antd: {},
  dynamicImport: {
    loading: '@/components/loading',
  },
  routes,
  theme,
  esbuild: {},
  title: '前端技术记录',
  ignoreMomentLocale: true,
  // proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  // fastRefresh: {},
  nodeModulesTransform: { type: 'none' },
  mfsu: {},
  webpack5: {},
  exportStatic: {},
  crossorigin: true,
  analytics: {
    baidu: BAIDU_HM_CODE,
  },
  targets: {
    chrome: 79,
    firefox: false,
    safari: false,
    edge: false,
    ios: false,
  },
  cssLoader: {
    localsConvention: 'camelCase',
  },
})
