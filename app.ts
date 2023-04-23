import Tree from './Tree/Tree';

const BinaryTree = new Tree(0);

BinaryTree.add(-2);
BinaryTree.add(2);
BinaryTree.add(1);
BinaryTree.add(-1);
BinaryTree.add(3);
BinaryTree.add(-3);

console.log(BinaryTree.calcSumm());

while (true) { }