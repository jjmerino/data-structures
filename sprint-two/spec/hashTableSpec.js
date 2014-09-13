describe('hashTable', function() {
  var hashTable;
  var people = [['Steven', 'Tyler'], ['George', 'Harrison'], ['Mr.', 'Doob'], ['Dr.', 'Sunshine'], ['John', 'Resig'], ['Brendan', 'Eich'], ['Alan', 'Turing']];


  beforeEach(function() {
    hashTable = new HashTable();
  });

  it('should have methods named "insert", "remove", "retrieve", and "size"', function() {
    expect(hashTable.insert).to.be.a("function");
    expect(hashTable.remove).to.be.a("function");
    expect(hashTable.retrieve).to.be.a("function");
    expect(hashTable.size).to.be.a("function");
  });

  it('should store values that were inserted', function() {
    hashTable.insert('Steven', 'Seagal');
    expect(hashTable.retrieve('Steven')).to.equal('Seagal');
  });

  it('should not contain values that were not inserted', function() {
    hashTable.insert('Steven', 'Spielberg');
    expect(hashTable.retrieve('Steven')).not.to.equal('Seagal');
  });

  it('should not contain values that were removed', function() {
    hashTable.insert('Steven', 'Tyler');
    hashTable.remove('Steven');
    expect(hashTable.retrieve('Steven')).to.equal(null);
  });

  it('should handle hash function collisions', function(){
    var v1 = "val1";
    var v2 = "val2";
    var oldHashFunction = window.getIndexBelowMaxForKey;
    window.getIndexBelowMaxForKey = function() { return 0; };
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    expect(hashTable.retrieve(v1)).to.equal(v1);
    expect(hashTable.retrieve(v2)).to.equal(v2);
    window.getIndexBelowMaxForKey = oldHashFunction;
  });

  it('should keep track of the size of the hashtable',function(){
    hashTable.insert('Ryo','Osawa');
    expect(hashTable.size()).to.equal(1);
    hashTable.insert('Jose','Merino');
    expect(hashTable.size()).to.equal(2);
    hashTable.insert('Andrew','?????');
    expect(hashTable.size()).to.equal(3);
    hashTable.remove('Andrew');
    expect(hashTable.size()).to.equal(2);

  });

  it('should return null when retrieving unknown keys',function(){
    expect(hashTable.retrieve('Andrew')).to.equal(null);
  });

  // (Extra credit! Remove the extra "x" when you want the following tests to run)
  it('should double in size when needed', function() {
    _.each(people, function(person) {
      var firstName = person[0], lastName = person[1];
      hashTable.insert(firstName,lastName);
    });
    expect(hashTable._limit).to.equal(16);
    var isAllCopied = _.every(people, function(person) {
        var firstName = person[0], lastName = person[1];
        return hashTable.retrieve(firstName)===lastName;
    });
    expect(isAllCopied).to.equal(true);
  });

  it('should handle removing from empty hashtable',function(){
    hashTable.remove('something');
    expect(hashTable.size()).to.equal(0);
    hashTable.insert('foo','bar');
    expect(hashTable.size()).to.equal(1);
    hashTable.remove('someone'); // removed something that we didnt add
    expect(hashTable.size()).to.equal(1);
    hashTable.remove('foo');
    expect(hashTable.size()).to.equal(0);
    hashTable.remove('foo'); // removing foo that we already removed
    expect(hashTable.size()).to.equal(0);
  });

  it('should halve in size when needed', function() {
    _.each(people, function(person) {
      var firstName = person[0], lastName = person[1];
      hashTable.insert(firstName,lastName);
    });
    expect(hashTable._limit).to.equal(16);
    var namesToRemove = ['George', 'Dr.', 'Steven', 'John', 'Mr.'];
    hashTable.remove('George');
    hashTable.remove('Dr.');
    hashTable.remove('Steven');
    hashTable.remove('John');
    hashTable.remove('Mr.');
    expect(hashTable._limit).to.equal(8);

    var isAllCopied = _.chain(people)
    .filter(function(person) {
      return _.contains(namesToRemove, person);
    })
    .every(function(person) {
        var firstName = person[0], lastName = person[1];
        return hashTable.retrieve(firstName)===lastName;
    }).value();
    expect(isAllCopied).to.equal(true);
  });
});
