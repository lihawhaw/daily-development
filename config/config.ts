import { defineConfig } from 'umi'
import routes from './routes'
import theme from './theme'

export default defineConfig({
  npmClient: 'pnpm',
  publicPath: '/',
  plugins: ['@umijs/plugins/dist/antd', '@umijs/plugins/dist/request'],
  headScripts: [
    {
      src: 'https://cdn-go.cn/aegis/aegis-sdk/latest/aegis.min.js',
    },
    {
      content: `var aegis = new Aegis({ id: '8lV9oSowwL6na03Dg7', reportApiSpeed: true, reportAssetSpeed: true, spa: true });`,
      charset: 'utf-8',
    },
  ],
  antd: {
    import: true,
    style: 'less',
  },
  request: {
    dataField: 'data',
  },
  routes,
  theme,
  title: '极致源于梦想',
  cssLoaderModules: {
    exportLocalsConvention: 'camelCase',
  },
  lessLoader: {},
  fastRefresh: true,
  clientLoader: {},
})
