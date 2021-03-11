module.exports = {
  extends: ['@imu/eslint-config-base', './rules/react', './rules/react-a11y'].map(require.resolve),
  rules: {},
};
