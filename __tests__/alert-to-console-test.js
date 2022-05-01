const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');
const plugin = require('../plugins/alertToConsole');

const example = fs.readFileSync(
  path.resolve(__dirname, '../examples/alert-to-console.js'),
  'utf-8',
);

it('transforms alert to console', () => {
  const {code} = babel.transform(example, {plugins: [plugin]});
  expect(code).toMatchSnapshot();
});
