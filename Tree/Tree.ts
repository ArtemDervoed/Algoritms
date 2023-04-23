import Node from './Node';

export default class Tree {
    private root: Node;
    private nodeId = 0;
    private allNodesSheet: any = {};
    constructor(rootValue: number) {
        this.root = new Node(rootValue, null, null, this.nodeId);
        this.allNodesSheet[this.nodeId] = this.root;
    }

    public add(value: number) {
        this.nodeId++;
        const toAppend = new Node(value, null, null, this.nodeId);
        this.allNodesSheet[this.nodeId] = toAppend;
        this.root.appendChild(toAppend);
    }

    public getNodeById(id: number): Node {
        return this.allNodesSheet[id];
    }

    public calcSumm(): number {
        let summ = 0;
        summ = this.root.getValue();
        const processNodeValue = (node: Node | null) => {
            if (!node) return;
            summ += node.getValue();
            if (node.getLeftChild()) {
                processNodeValue(node.getLeftChild());
            }
            if (node.getRigtChild()) {
                processNodeValue(node.getRigtChild());
            }
        }
        return summ;
    }
}