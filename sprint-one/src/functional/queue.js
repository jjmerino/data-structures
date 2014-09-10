var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    if (value === undefined) {
      return;
    }

    for (var i = length - 1; i >= 0; i--) {
      storage[i+1] = storage[i];
    }
    storage[0] = value;
    length++;
  };

  someInstance.dequeue = function(){
    var value;
    if (length > 0) {
      value = storage[length - 1];
      length--;
    }
    return value;
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
