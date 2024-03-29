describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.removeFromParent).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
    expect(tree.hasOwnProperty("parent")).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function(){
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function(){
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should not set a parent for the root node', function() {
    tree.addChild(5);
    expect(tree.parent).to.equal(null);
  });

  it('should set the parent correctly when adding a child node', function() {
    tree.addChild(5);
    tree.children[0].addChild(10);
    expect(tree.children[0].children[0].parent.value).to.equal(5);
  });

  it('should disassociate the tree with its parent', function() {
    tree.addChild(5);
    tree.children[0].addChild(2);
    tree.children[0].children[0].addChild(3);
    var removedChild = tree.children[0].children[0];
    removedChild.removeFromParent();
    expect(removedChild.parent).to.equal(null);
    debugger;
    expect(tree.children[0].children[0]).to.equal(undefined);
  });

});
