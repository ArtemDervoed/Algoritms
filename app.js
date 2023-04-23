"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tree_1 = __importDefault(require("./Tree/Tree"));
const BinaryTree = new Tree_1.default(0);
BinaryTree.add(-2);
BinaryTree.add(2);
BinaryTree.add(1);
BinaryTree.add(-1);
BinaryTree.add(3);
BinaryTree.add(-3);
console.log(BinaryTree.calcSumm());
while (true) { }
//# sourceMappingURL=app.js.map