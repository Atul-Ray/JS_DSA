// // Simple Linked List

// class node{
//     constructor(value){
//       this.value=value;
//       this.next=null;
//     }
//   }
  
//   class list{
//       constructor(head=null){
//          this.head=head;
//       }
//   }
  
//   const node1= new node(4);
//   const node2=new node(5);
  
//   node1.next=node2;
  
//   const list1  = new list(node1)
//   console.log(list1);
  
  


      //    ------>Linked List<----


class linkedList{

    constructor(data){
   this.head= {
    value:data,
    next:null
   };
   this.tail=this.head;
   this.size=1;
   
    }

    // Append Node

append(newdata){
  let newnode = {
    value:newdata,
    next:null
  }
  this.tail.next=newnode;
 
  
  this.tail=newnode;
  this.size+=1;
}

 // Traversal

 traverse(){

  let counter = 0;
  let currentNode=this.head;

while (counter<this.size) {
  console.log(currentNode);
  currentNode=currentNode.next;
  counter++;
  
}

 }


// Deleting node

deleteNode(index){
let counter = 1;
let lead = this.head;

if(index===1){
  this.head=this.head.next;
}else{
  while (counter<index-1) {
    lead=lead.next;
    counter++
    
  }
let nextNode=lead.next.next;
lead.next=nextNode;
console.log(lead);

//  Inserting Node





}

}




}

const l1=new linkedList(7);
l1.append(8);
l1.append(9);
l1.append(10);





l1.deleteNode(3);

console.log(l1);

l1.traverse();





