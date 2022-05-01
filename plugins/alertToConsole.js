module.exports = function (babel) {
  const types = babel.types;
  return {
    name: 'alert-to-console',
    visitor: {
      CallExpression: function (path) {
        if (path.node.callee.name === 'alert') {
          const args = path.node.arguments;
          path.replaceWith(
            types.callExpression(
              types.memberExpression(
                types.identifier('console'),
                types.identifier('warn'),
              ),
              args,
            ),
          );
        }
      },
    },
  };
};
