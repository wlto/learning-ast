const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');
const plugin = require('../plugins/removeDebugger');

const example = fs.readFileSync(
  path.resolve(__dirname, '../src/remove-debugger.js'),
  'utf-8',
);

it('remove debugger statements', () => {
  const {code} = babel.transform(example, {plugins: [plugin]});
  expect(code).toMatchSnapshot();
});
