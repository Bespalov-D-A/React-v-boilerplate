import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { type environments, type buildOptions, type IdotEnv } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import Dotenv from 'dotenv-webpack'
import path from 'path'

// файл для декомпозиции плагинов
// вернёт нам плагины
export function buildPlugins({
  paths,
  isDev,
  analyze,
  env
}: buildOptions): webpack.WebpackPluginInstance[] {
  const envs: string[] = Object.keys(process.env).map(e => e.startsWith('REACT_APP') ? e : '').filter(x => !!x)
  const newEnvs: Record<string, string> = {}
  for (let i = 0; i < envs.length; i++) {
    const key = envs[i]
    if (process.env[key] !== undefined) newEnvs[`${key}`] = JSON.stringify(process.env[key])
  }

  const plugins = [
    // Добавляем плагины
    // https://webpack.js.org/plugins/
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin({ percentBy: 'modules' }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({ WEBPACK_IS_DEV: JSON.stringify(isDev) }),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({ analyzerMode: analyze ? 'server' : 'disabled' }),
    new Dotenv({ path: path.resolve(paths.baseSrc, '.env') }),
    new webpack.DefinePlugin({ process: { env: newEnvs } }),
    ...(isDev ? [new ReactRefreshWebpackPlugin()] : [])
  ]

  return plugins
}
