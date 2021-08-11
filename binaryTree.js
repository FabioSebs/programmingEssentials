class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    
    constructor(){
        this.root = null;
    }

    insert(data) {
        let newNode = new Node(data);

        //Checking if tree is empty to add a root
        if (this.root = null) {
            this.root = newNode
        }

        //Else we find the correct position in the tree
        else {
            this.insertNode(this.root, newNode);
        }

    }
    
    //Method that traverses through tree recursively until correct position is found
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            //insert left first so check left empty
            if (node.left === null) {
                node.left = newNode;
            }
            else{
                this.insertNode(node.left, newNode)
            }
        }

        else {
            //inserting right if data is more than the node
            if (newNode.data < node.data) {
                if(node.right === null){
                    node.right = newNode;
                }
                else {
                    this.insertNode(node.right, newNode)
                }
            }
        }
    }

}

//Binary Search Tree