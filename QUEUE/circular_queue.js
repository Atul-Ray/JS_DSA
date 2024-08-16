class queue {
  constructor(size) {
    this.item = new Array(size);
    this.currentsize = 0;
    this.max = size;
    this.front = -1;
    this.rear = -1;
  }

  enqueue(val) {
   if(this.currentsize!=this.max){
    if(this.rear == this.max){
        this.rear=0
    }else{
        this.rear++
    }
    this.item[this.rear]=val
    this.currentsize++
    if ((this.front == -1)) {
        this.front = this.rear;
      }
    
   }
   
  }
}




let que=new queue(5)

console.log(que.enqueue(10));


