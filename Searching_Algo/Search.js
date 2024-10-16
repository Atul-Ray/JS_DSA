

// function linear(arr,target) {
    
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===target){
//             return i;
//         }
//     }

//     return -1
// }

// console.log(linear([1,6,78,96,8,74,52],8));

//    ------>Globle Linear Search <------


// function globlelinear(array,target) {

//     let result=[]

//     for (let i = 0; i < array.length; i++) {
//         if(array[i]===target){
//             result.push(i)
//         }
        
//     }

//     if(result.length === 0) return -1;

//     return result;

// }

// console.log(globlelinear([48,85,74,96,8,528,63,74],74));



// ----->Binary Search <-----

// function binarysearch(arr,target) {
//     let start=0;
//     let end=arr.length-1;

// while (start<=end) {
//     let mid= Math.floor((start+end)/2);
// console.log(mid);

//     if(arr[mid] === target){
//         return mid;
//     }else if(arr[mid]<target){
//         start=mid+1;
//     }else{
//         end=mid-1;
//     }

// }

// return -1;
// }


// console.log(binarysearch([1,2,3,4,5,6],6));

//  ------> Recursive Aproach for Binary Search <-----


// function RecursiveBinarySearch(arr,target,start ,end) {
//     let mid = Math.floor((start+end)/2);
// console.log(mid);

//     if(arr[mid]===target) return mid;

//     if(arr[mid]<target) return RecursiveBinarySearch(arr,target,mid+1,end);
  
  
//     return RecursiveBinarySearch(arr,target,start,mid-1)
    
    
// }

// let arr=[1,2,3,4,5,6];
// let target=2;
// let start=0;
// let end = arr.length-1;
// console.log(RecursiveBinarySearch(arr,target,start,end));

// ----->K-th missing number <------






