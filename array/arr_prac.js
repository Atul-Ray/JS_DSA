// //array declaration
// let person={
//     name:Blob,
//     age:23
// }
// let arr=["banana","orange",person]
// console.log(arr[2].name);

// //add element at last
// arr.push("apple")
// console.log(arr);

// //remove from last

// arr.pop()

// //add at top

// arr.unshift("lichi")
// console.log(arr);

// //remove from top

// arr.shift();
// console.log(arr);


// //inbuilt loop

// const numbers=[12,56,1,85,96,25]
// const item=numbers.map((i)=>{
// return i;
// })

// console.log(item);






// spread and rest operator








// ----> Question 1.second largest numbers<-----

// --->solution 1
// function secondlargest(arr){

//     const uniqueArr=Array.from(new Set(arr))
//     console.log(uniqueArr);

//     uniqueArr.sort((a,b)=>{b-a})
//     console.log(`second largest number is ${uniqueArr[1]}`);
// }
// secondlargest([5,8,9,6,7,8])


//  ---->solution 2


// function optimalsecondlargest(arr){
// let largest=Number.NEGATIVE_INFINITY
// let secondlargest=Number.NEGATIVE_INFINITY

// for(i=0;i<arr.length;i++){
//   if(arr[i]>largest){
//     secondlargest=largest
//     largest=arr[i]
//   }else if(arr[i] !=largest && arr[i] > secondlargest){
//     secondlargest=arr[i]
//   }
// }

// return secondlargest
// }

// console.log(optimalsecondlargest([45,89,7,25,6,3,88,88,89]));







//   -----> Question 2. Rotate array by k  <------


//   -----> solution 1.


// function rotateArray(arr,k){
// let size=arr.length;

// const rotated=arr.splice(size-k,size)
// arr.unshift(...rotated)

// return arr
// }

// console.log(rotateArray([1,2,3,4,5,6,7],3));


//  ------> solution 2.

// function rotatedArrayOptimal(arr,k){

// reverse(arr,0,arr.length-1)
// reverse(arr,0,k-1)
// reverse(arr,k,arr.length-1)

// return arr
// }

// function reverse(arr,left,right){
// while(left<right){
// const temp=arr[left]
// arr[left]=arr[right]
// arr[right]=temp
// left++
// right--
// }

// }
 
// console.log(rotatedArrayOptimal([1,2,3,4,5,6,7],3));



//          ---------> question 3.  Remove duplicate from sorted Array  <--------



        //  ------> solution 1.




//        function  removeduplicate(arr){

//         for(i=0;i<arr.length;i++){
//              if(arr[i]===arr[i+1]){
//                 arr.splice(arr[i+1],1)
//                 i--
//                 }

//         }
//         return arr
//        }

//        console.log(removeduplicate([1,1,1,2,2,2,2,3,3,4,4,5,5]));


//       -------> solution 2.



//   function removeduplicateNew(arr){

//    let i=0

//     for(let j=1;j<arr.length;j++){
//         if(arr[i]!==arr[j]){
//            i++
//            arr[i]=arr[j]     
//         }

//         }
        
//    return i+1
//   }

//   console.log(removeduplicateNew([1,1,1,2,2,2,3,3,4,4,5]));





//  ------>Question 4. largest sum of subArray <-----

//  ------>solution 1.

// function largestSumsubArray(arr){
//  let maxSum=arr[0];
//  startinx=0
//  endinx=0
//         for (let i=0;i<arr.length;i++) { 
//                 let currentSum=0 ; 
//             for(j=i;j<arr.length;j++){
//                 currentSum+=arr[j];

//                if(currentSum>maxSum){
//                  maxSum=currentSum;
//                  startinx=i;
//                  endinx=j
//                }
//             }              
//         }
//         return {
//                 sum:maxSum,
//                 subArray:arr.splice(startinx,endinx+1)
//         };
// }

// console.log(largestSumsubArray([1,1,1,2,2,2,3,3,4,4,5]));

 
//  -------->solution 2.   (Kadane Algorithm)


// function largestsubarray(arr){
 
//         let sum=0
//         let maxsum=arr[0]

//         for(i=0;i<arr.length;i++){
//                 sum+=arr[i]
//                 if(sum>maxsum){
//                         maxsum=sum;
//                 }
//                 if(sum<maxsum){
//                         sum=0;
//                 }
//         }
//         return maxsum;
// }

// console.log(largestsubarray([1,2,3,4,5]));





function largestSubarray(arr) {
        let sum = 0;
        let maxSum = arr[0];
    
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
            if (sum > maxSum) {
                maxSum = sum;
            }
            if (sum < 0) {
                sum = 0;
            }
        }
        return maxSum;
    }
    
    console.log(largestSubarray([1, 2, 3, 4, 5])); // Output: 15