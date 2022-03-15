// https://umijs.org/config/
import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin'
import { defineConfig } from 'umi'

export default defineConfig({
  plugins: [
    // https://github.com/zthxxx/react-dev-inspector
    'react-dev-inspector/plugins/umi/react-inspector',
  ],
  // https://github.com/zthxxx/react-dev-inspector#inspector-loader-props
  inspectorConfig: {
    exclude: [],
    babelPlugins: [],
    babelOptions: {},
  },
  chainWebpack(config) {
    config.plugin('antd-dayjs-webpack-plugin').use(AntdDayjsWebpackPlugin)
  },
})
