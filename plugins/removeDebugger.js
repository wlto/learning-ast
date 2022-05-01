module.exports = function (babel) {
  return {
    name: 'remove-debugger-plugin',
    visitor: {
      DebuggerStatement: function (path) {
        path.remove();
      },
    },
  };
};
