const config = require('./build/index');

module.exports = {
  default: config.default,
  paths: config.paths,
  globs: config.globs,

  ...config.default,
};
