module.exports = function (babel) {
  return {
    name: 'remove-data-test-id',
    visitor: {
      JSXAttribute: function (path) {
        if (path.node.name.name === 'data-test-id') {
          path.remove();
        }
      },
    },
  };
};
