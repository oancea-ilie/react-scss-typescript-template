// eslint-disable-next-line @typescript-eslint/no-var-requires
const { removeClasses } = require('postcss-remove-classes');

module.exports = {
  plugins: [removeClasses((className) => className.includes('key'), '.')],
};
