var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);

    if(list.head === null){
      list.head = newNode;
    }

    if(list.tail!==null){
      list.tail.next =  newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function(){

    if(list.head===null){
      return;
    }
    var value = list.head.value;
    list.head= list.head.next;
    return value;

  };

  list.contains = function(target){
    var node = list.head;

    if(node===null){
      return false;
    }

    do{
      if(node.value===target){
        return true;
      }
      node = node.next;
    }while(node!==null);

    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
