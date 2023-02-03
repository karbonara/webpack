import { BuildOptions } from './types/config';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export const buildDevServer = (options: BuildOptions): DevServerConfiguration => {
  return {
    port: options.port,
    open: true,
    // Нужно для SPA приложений, при перезагрузке страницы будет корректно отображаться страница
    historyApiFallback: true,
  };
};