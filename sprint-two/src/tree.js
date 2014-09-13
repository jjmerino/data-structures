 var makeTree = function(value){
  var newTree = _.extend({},treeMethods);
  newTree.value = value;
  newTree.children = undefined;
  newTree.parent = null;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var node = makeTree(value);
  if(this.children === undefined){
    this.children = [];
  }

  node.parent = this;
  this.children.push(node);
};

treeMethods.contains = function(target){
  if(this.value === target){
    return true;
  }

  return !!_.reduce(this.children,function(prev,item){
    if(prev === true){
      return true;
    }
    return item.contains(target);
  },false);
};

treeMethods.removeFromParent = function() {
  var parent = this.parent;

  this.parent = null;
  var that = this;
  parent.children = _.reject(parent.children, function(child) {
    return child === that;
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 * var complexity = {
 *   addChild : "O(1)";
 *   contains : "O(N)";
 * }
 */
