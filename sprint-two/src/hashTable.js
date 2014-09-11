var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._conflicts = {};
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var counter = 0;
  while (counter <= this._limit) {

    if (this._storage.get(i) === undefined || this._storage.get(i) === null) {
      break;
    }

    i = (i + 1) % this._limit;
    counter++;
  }

  if (counter > this._limit) {
    throw new Error('Error happened!');
  }
  this._conflicts[k] = i;
  this._storage.set(i, v);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._conflicts[k] !== undefined) {
    i = this._conflicts[k];
  }
  return this._storage.get(i);
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Time complexity is of insert, retrieve and remove is O(1)
 * Time complexity of the underlying functions getIndexBelowMaxForKey is O(n)
 */
