export default class Node {
    private value: number;
    private id: number;
    private leftNode: Node | null;
    private rightNode: Node | null;

    constructor(value: number, leftNode: Node | null, rightNode: Node | null, id: number) {
        this.value = value;
        this.id = id;
        this.leftNode = leftNode;
        this.rightNode = rightNode
    }

    public appendChild(node: Node) {
        if (node.getValue() < this.value) {
            if (!this.leftNode) {
                this.appendLeftChild(node);
            } else {
                this.leftNode.appendChild(node);
            }
        } else {
            if (!this.rightNode) {
                this.appendRightChild(node);
            } else {
                this.rightNode.appendChild(node);
            }
        }

    }

    private appendLeftChild(node: Node) {
        this.leftNode = node;
    }

    private appendRightChild(node: Node) {
        this.rightNode = node;
    }

    public setValue(value: number) {
        this.value = value;
    }

    public getValue(): number {
        return this.value;
    }

    public getId(): number {
        return this.id;
    }

    public getLeftChild(): Node | null {
        return this.leftNode;
    }

    public getRigtChild(): Node | null {
        return this.rightNode;
    }
}