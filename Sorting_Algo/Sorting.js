
 //  ------> Bubble Sort <-----

 function bublesort(nums){
    
 }





 //     -------->Selection Sort  <--------


//  function selectionsort(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         let minIndex=i;

//         for (let j = i+1; j < nums.length; j++) {
            
//             if (nums[j]<nums[minIndex]) {
//                 minIndex=j
//             }
//         }
//         if (minIndex!=i) {
//             [nums[i],nums[minIndex]] = [nums[minIndex] , nums[i]]
//         }
        
//     }

//     return nums
//  }

//  console.log(selectionsort([5,8,9,72,8,4,8]));
 

//     -------> Insertion Sort <---------

// function Insertionsort(nums) {
    
// }




//     ---------> Merge Sort  <--------


// function merge(left,right)
// {

//     console.log(left);
//     console.log(right);
      
// }

function mergesort(nums) {
    if(nums.length==1){
        return nums
    }

let mid = Math.floor(nums.length/2);
let left = nums.slice(0,mid);
let right = nums.slice(mid);

console.log(left);
console.log(right);



return console.log(
mergesort(left),mergesort(right)
)

}

console.log( mergesort([9,8,7,6,5,4,3,2,1]));



// ----->Quick sort<------

