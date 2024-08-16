let queue=[]

let  currentsize=queue.length

let maxsize=5

function isempty(){
    if(currentsize<=0){
       return true;
    }else{
      return false;
    }
}

function enqueue(newval){
    if(currentsize>=maxsize){
        console.log("queue is already full");
    }else{
      queue[currentsize]=newval
         currentsize++
    }
}


function dequeue(){
    if(isempty()){
        console.log("queue is already empty");
    }else{
        for(i=0;i<queue.length;i++){
           queue[i]=queue[i+1]

        }
        currentsize--
        queue.length=currentsize
      
    }
}

enqueue(50)
enqueue(30)

console.log(queue);
dequeue()
console.log(queue);