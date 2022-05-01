const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');
const plugin = require('../plugins/removeDataTestId');

const example = fs.readFileSync(
  path.resolve(__dirname, '../examples/remove-data-test-id.js'),
  'utf-8',
);

it('remove data-test-id attribute from JSX', () => {
  const {code} = babel.transform(example, {
    plugins: [plugin],
    presets: ['@babel/preset-react'],
  });
  expect(code).toMatchSnapshot();
});
