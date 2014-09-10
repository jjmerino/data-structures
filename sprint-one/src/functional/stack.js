var makeStack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var length = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[length] = value;
    length++;
  };

  someInstance.pop = function(){
    var obj;

    if(length>0){
      obj = storage[length-1];

      length--;
    }
    return obj;
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
