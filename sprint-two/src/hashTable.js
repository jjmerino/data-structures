var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);
  if (bucket === undefined || bucket === null) {

    // TODO: may want to implement it as an array.1
    bucket = {};
    this._storage.set(i, bucket);
  }

  bucket[k] = v;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  return bucket[k];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (bucket === undefined || bucket === null) {
    return;
  }
  bucket[k] = null;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Time complexity is of insert, retrieve and remove is O(1)
 * Time complexity of the underlying functions getIndexBelowMaxForKey is O(n)
 */
