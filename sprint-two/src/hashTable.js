var HashTable = function(){
  this._minLimit = 8;
  this._limit = this._minLimit;
  this._storage = makeLimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype._rehash = function(newLimit){
  var oldStorage = this._storage;
  this._limit = newLimit;
  this._size = 0;
  this._storage = makeLimitedArray(this._limit);

  //rehash all the existing elements
  oldStorage.each(function(bucket){
    if(!bucket) { return; }
    for(var j = 0; j < bucket.length; j++){
      //insert the new value.
      this.insert(bucket[j][0], bucket[j][1]);
    }
  }.bind(this));
};

HashTable.prototype.insert = function(k, v){

  // get a hashed index for the value
  var i = getIndexBelowMaxForKey(k, this._limit);

  // get the bucket for the given index
  var bucket = this._storage.get(i);

  // check that the bucket exists
  if (!bucket) {
    bucket = [];
    this._storage.set(i, bucket);
  }

  bucket.push([k,v]);

  this._size++;

  // if size is more than 75% rehash
  if(this._size > this._limit * 0.75){
    // if so double the size (limit)
    this._rehash(this._limit * 2);
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if(!bucket) { return null; }

  for(var j = 0 ; j < bucket.length ; j++){
    if(bucket[j][0]===k){
      return bucket[j][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if(!bucket) { return; }

  for(var j = 0 ; j < bucket.length ; j++){
    if(bucket[j][0]===k){
      this._size--;
      bucket.splice(j,1);

      // if size-1 is less than 25%
      if(this._size < this._limit * 0.25){
        // if so half the size (limit)
        var newLimit = Math.floor(this._limit / 2);
        newLimit = newLimit < this._minLimit ? this._minLimit : newLimit;
        this._rehash(newLimit);
      }
      return;
    }
  }
};

HashTable.prototype.size = function(){
  return this._size;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Time complexity is of insert, retrieve and remove is O(1)
 * Time complexity of the underlying functions getIndexBelowMaxForKey is O(n)
 */
