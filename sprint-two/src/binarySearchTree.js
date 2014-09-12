var makeBinarySearchTree = function(value){

  var binarySearchTree = Object.create(binarySearchMethods);
  binarySearchTree.value = value;
  binarySearchTree.left = null;
  binarySearchTree.right = null;

  return binarySearchTree;
};


binarySearchMethods = {};

binarySearchMethods.insert = function(value){

  if (value < this.value) {
    if (this.left === null) {
      this.left = makeBinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = makeBinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

binarySearchMethods.contains = function(target){
  if (this.value === target) {
    return true;
  }

  if (target < this.value) {
    return (this.left === null) ? false: this.left.contains(target);
  } else {
    return (this.right === null) ? false: this.right.contains(target);
  }
};

binarySearchMethods.depthFirstLog = function(func){

  func(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(func);
  }

  if (this.right !== null) {
    this.right.depthFirstLog(func);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * binarySearchTree [{insert: O(log(n))}, {contains: O(log(n))}, {depthFirstLog: O(n)}];
 * }
 */

