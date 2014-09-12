var Graph = function(){
  this.nodes = [];

};
var makeNode = function(value){
  return {
    value: value,
    edges: []
  };
};

Graph.prototype.addNode = function(newNode, toNode){
  var realNewNode =makeNode(newNode);
  this.nodes.push(realNewNode);
  if(toNode!== undefined){
    var realToNode = _.find(this.nodes,function(item){
      return item.value === toNode;
    });
    if(realToNode !== undefined){
      realNewNode.edges.push(realToNode);
      realToNode.edges.push(realNewNode);
    }
  }
};

Graph.prototype.contains = function(node){
  return undefined !== _.find(this.nodes,function(item){

    return item.value === node;
  });
};

Graph.prototype.removeNode = function(node){
  this.node = _.reject(this.nodes,function(val){
    return val.value === node;
  });
};

Graph.prototype.getEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
