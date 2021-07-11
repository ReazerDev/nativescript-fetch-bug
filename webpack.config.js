const webpack = require("@nativescript/webpack");
const path = require('path');

module.exports = (env) => {
  webpack.init(env);

  // Learn how to customize:
  // https://docs.nativescript.org/webpack

  webpack.chainWebpack((config, env) => {
    config.module
      .rule('scss')
      .include
      .add(path.join(webpack.Utils.platform.getEntryDirPath(), 'app.scss'))
      .add(path.join(webpack.Utils.platform.getEntryDirPath(), 'app.android.scss'))
      .add(path.join(webpack.Utils.platform.getEntryDirPath(), 'app.ios.scss'));
    config.module
      .rule('scss|component')
      .test(/\.scss$/)
      .exclude
      .add(path.join(webpack.Utils.platform.getEntryDirPath(), 'app.scss'))
      .add(path.join(webpack.Utils.platform.getEntryDirPath(), 'app.android.scss'))
      .add(path.join(webpack.Utils.platform.getEntryDirPath(), 'app.ios.scss'));
  });

  return webpack.resolveConfig();
};


