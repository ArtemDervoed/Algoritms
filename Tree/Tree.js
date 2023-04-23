"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = __importDefault(require("./Node"));
class Tree {
    constructor(rootValue) {
        this.nodeId = 0;
        this.allNodesSheet = {};
        this.root = new Node_1.default(rootValue, null, null, this.nodeId);
        this.allNodesSheet[this.nodeId] = this.root;
    }
    add(value) {
        this.nodeId++;
        const toAppend = new Node_1.default(value, null, null, this.nodeId);
        this.allNodesSheet[this.nodeId] = toAppend;
        this.root.appendChild(toAppend);
    }
    getNodeById(id) {
        return this.allNodesSheet[id];
    }
    calcSumm() {
        let summ = 0;
        summ = this.root.getValue();
        const processNodeValue = (node) => {
            if (!node)
                return;
            summ += node.getValue();
            if (node.getLeftChild()) {
                processNodeValue(node.getLeftChild());
            }
            if (node.getRigtChild()) {
                processNodeValue(node.getRigtChild());
            }
        };
        return summ;
    }
}
exports.default = Tree;
//# sourceMappingURL=Tree.js.map