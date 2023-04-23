"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor(value, leftNode, rightNode, id) {
        this.value = value;
        this.id = id;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }
    appendChild(node) {
        if (node.getValue() < this.value) {
            if (!this.leftNode) {
                this.appendLeftChild(node);
            }
            else {
                this.leftNode.appendChild(node);
            }
        }
        else {
            if (!this.rightNode) {
                this.appendRightChild(node);
            }
            else {
                this.rightNode.appendChild(node);
            }
        }
    }
    appendLeftChild(node) {
        this.leftNode = node;
    }
    appendRightChild(node) {
        this.rightNode = node;
    }
    setValue(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    getId() {
        return this.id;
    }
    getLeftChild() {
        return this.leftNode;
    }
    getRigtChild() {
        return this.rightNode;
    }
}
exports.default = Node;
//# sourceMappingURL=Node.js.map