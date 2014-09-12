var Graph = function(){
  this.nodes = {};

  this.makeNode = function(value){
    return {
      value: value,
      edges: {}
    };
  };


};


Graph.prototype.addNode = function(newNode, toNode){
  var realNewNode =this.makeNode(newNode);
  var keys=Object.keys(this.nodes);
  var isSecondNode = keys.length===1;
  this.nodes[newNode]=realNewNode;

  //if this is the second node
  if(isSecondNode){
    // add edge from first node to the newNode.
    this.addEdge(keys[0],newNode);
  }


  if(toNode!== undefined){
    var realToNode = this.nodes[toNode];
    if(realToNode !== undefined){
      realNewNode.edges[toNode] = realToNode;
      realToNode.edges[newNode] = realNewNode;
    }
  }
};

Graph.prototype.contains = function(node){

  return undefined !== this.nodes[node];

};

Graph.prototype.removeNode = function(node){
  _.each(this.nodes,function(item){
    delete item.edges[node];
  });
  delete this.nodes[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  var realFromNode = this.nodes[fromNode];
  var realToNode = this.nodes[toNode];
  if(realFromNode===undefined||realToNode===undefined){
    return false;
  }
  return realFromNode.edges[toNode]!==undefined&&realToNode.edges[fromNode]!==undefined;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var realFromNode = this.nodes[fromNode];
  var realToNode = this.nodes[toNode];
  if(realFromNode===undefined || realToNode===undefined){
    return;
  }
  realFromNode.edges[toNode]=true;
  realToNode.edges[fromNode]=true;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var realFromNode = this.nodes[fromNode];
  var realToNode = this.nodes[toNode];
  if(realFromNode===undefined || realToNode===undefined){
    return;
  }
  delete realFromNode.edges[toNode];
  delete realToNode.edges[fromNode];
  var that = this;
  _.each([fromNode,toNode],function(theNode){
    var theNodeHasEdges = _.some(that.nodes,function(item){
      return item.edges[theNode] !== undefined;
    });

    if(!theNodeHasEdges){
      delete that.nodes[theNode];
    }

  });


};

/*
 * Complexity: What is the time complexity of the above functions?
 */
