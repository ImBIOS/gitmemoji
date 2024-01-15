const path = require('path')

const buildEslintCommand = (filenames) =>
  `bunx eslint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '*.{json,md,yml}': ['prettier --write'],
}