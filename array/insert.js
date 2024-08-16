const arr=[45,12,84,89,56,23,74];

let newEl=70;
let position=2;

for(let i=arr.length-1;i>=0;i--){
    if(i>=position){
        arr[i+1]=arr[i]
    if(i==position){
        arr[i]=newEl
    }
    }
    
}
console.log(arr);