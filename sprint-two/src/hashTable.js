var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._conflicts = {};
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) !== undefined && this._storage.get(i) !== null) {
    i = getIndexBelowMaxForKey(k + '' + Math.random() * this._limit, this._limit);
    this._conflicts[k] = i;
  }
  this._storage.set(i, v);
};

HashTable.prototype.retrieve = function(k){
  debugger;
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._conflicts[k] !== undefined) {
    i = conflicts[k];
  }
  return this._storage.get(i);
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
