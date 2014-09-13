 var makeTree = function(value){
  var newTree = _.extend({},treeMethods);
  newTree.value = value;
  newTree.children = undefined;
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  var node = makeTree(value);
  if(this.children===undefined){
    this.children=[];
  }

  this.children.push(node);
};

treeMethods.contains = function(target){
  if(this.value===target){
    return true;
  }

  return !!_.reduce(this.children,function(prev,item){
    if(prev===true){
      return true;
    }
    return item.contains(target);
  },false);
};


/*
 * Complexity: What is the time complexity of the above functions?
 * var complexity = {
 *   addChild : "O(1)";
 *   contains : "O(N)";
 * }
 */
