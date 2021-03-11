module.exports = {
  extends: [
    '@imu/eslint-config-base',
    '@imu/eslint-config-typescript',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {},
};
