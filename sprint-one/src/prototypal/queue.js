var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.length = 0;
  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  if (value === undefined) {
    return;
  }

  for (var i = this.length - 1; i >= 0; i--) {
    this.storage[i+1] = this.storage[i];
  }
  this.storage[0] = value;
  this.length++;
};

queueMethods.dequeue = function(){
  var value;
  if (this.length > 0) {
    value = this.storage[this.length - 1];
    this.length--;
  }
  return value;
};

queueMethods.size = function(){
  return this.length;
};
