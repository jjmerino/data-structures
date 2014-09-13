var makeLinkedList = function(){
  var list = {};
  var makeNode = function(value){
    var node = {};

    node.value = value;
    node.next = null;
    node.previous = null;

    return node;
  };

  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);

    if(list.head === null){
      list.head = newNode;
    }

    if(list.tail !== null){
      list.tail.next = newNode;
      newNode.previous = list.tail;
    }

    list.tail = newNode;
  };

  list.addToHead = function(value){
    var newNode = makeNode(value);

    if(list.tail === null){
      list.tail = newNode;
    }

    if(list.head !== null){
      list.head.previous = newNode;
      newNode.next = list.head;
    }
    list.head = newNode;
  };

  list.removeHead = function(){
    if(list.head === null){
      return;
    }
    var value = list.head.value;
    list.head = list.head.next;
    if (list.head !== null) {
      list.head.previous = null;
    }
    return value;
  };

  list.removeTail = function(value){
    if(list.tail === null){
      return;
    }
    var value = list.tail.value;
    list.tail = list.tail.previous;
    list.tail.next = null;

    return value;
  };

  list.contains = function(target){
    var node = list.head;

    while(node !== null){
      if(node.value === target){
        return true;
      }
      node = node.next;
    }

    return false;
  };

  return list;
};



/*
 * Complexity: What is the time complexity of the above functions?
 * O(1) for addToTail and removeHead
 * O(n) for contains
 */
