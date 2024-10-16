class Node {
    constructor(value) {
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BSTree{

 constructor(){
    this.root=null;
 }

Insert(val){
let newNode=new Node(val);

if (this.root===null) {
   this.root=newNode;   
}else{

this.InsertNode(this.root,newNode);
    
}
}
InsertNode(node,newNode){
    if (node.value>newNode.value) {
        if (node.left===null) {
            node.left=newNode;
        }else{
            InsertNode(node.left,newNode)
        }
    }else{
        if (node.right===null) {
            node.right=newNode;
        }else{
            InsertNode(node.right,newNode);
        }
    }
}

searchNode(root,val){
if (root===null) {
    console.log("Tree is empty ");
    
}else if(root.value===val){
    return root;
}else if(root.value>val){
    return this.searchNode(root.left,val);
}else{return this.searchNode(root.right,val)}


}


//      ----------->Depth First Search<------------

            //  ---> Inorder  <------

            Inorder(root){
                if (root) {
                    this.Inorder(root.left);
                    console.log(root.value);
                    this.Inorder(root.right)
                    
                }
            }


            //  ---->  Pre-order  <---
            preorder(root){
                if (root) {
                    console.log(root.value);
                    this.preorder(root.left);
                    
                    this.preorder(root.right)
                    
                }
            }


            //  ----> Post-order <----
            postorder(root){
                if (root) {
                    
                    this.postorder(root.left);
                    
                    this.postorder(root.right);
                    console.log(root.value);
                    
                }
            }

 //  --------> Breadth First Search <-----

 Bfs() {
    const result = [];
    const queue = [this.root];
    while (queue.length) {
         const node = queue.shift();
        // result.push(node.value);
        // if (node.left) queue.push(node.left);
        // if (node.right) queue.push(node.right);

        console.log("vvv");
        
    }
    return result;
}


minVal(root){
  if (root.left===null) {
    console.log(` minimum value:${root.value} `);
    
  }
  else{
    return this.minVal(root.left)

  }


}
maxVal(root){
  if (root.right===null) {
    console.log(` minimum value:${root.value} `);
    
  }
  else{
    return this.minVal(root.right)

  }


}


removeNode(root,value){
if(root.value===null){
    console.log("no node to delete");
    
}else{
    return this.deleteNode(root,value)
}

}

deleteNode(root,value){
if (value<root.value) {
    if (root.left===null && root.right===null) {
        
    }
}

}

}

let bst=new BSTree();
bst.Insert(10);
bst.Insert(7);
bst.Insert(12);

bst.minVal(bst.root);
bst.maxVal(bst.root);

// bst.Bfs()




