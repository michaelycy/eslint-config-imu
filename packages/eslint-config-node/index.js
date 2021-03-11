module.exports = {
  extends: ['@imu/eslint-config-base', './rules/'].map(require.resolve),
  rules: {},
};
