var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.length=0;
  obj.storage = {};
  return obj;
};

var stackMethods = {
  push : function(value){
    this.storage[this.length] = value;
    this.length ++;
  },
  pop : function(){
    var obj;
    if(this.length>0){
      obj = this.storage[this.length-1];
      this.length--;
    }
    return obj;
  },
  size: function(){
    return this.length;
  }
};


