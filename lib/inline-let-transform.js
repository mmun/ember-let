function InlineLetTransform() {
  this.syntax = null;
}

InlineLetTransform.prototype.transform = function(ast) {
  this.syntax.traverse(ast, {
    MustacheStatement: function(node) {
      if (node.path.original === 'let') {
        console.log(this);
        return null;
      }
    }
  });

  return ast;
};

module.exports = InlineLetTransform;
