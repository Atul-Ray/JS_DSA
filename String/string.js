
// // ----> Primitive String <-----
// let example = "hello world";


// //  ----> Object String  <-----
// let str = new String("string object");

// console.log(example.split("o"));


//      -------->Truncate string <-------

// function truncatestring(str,maxlength){
//  let trunc=str.slice(0,maxlength)+"...."
// return trunc
// }

// console.log(truncatestring("hello world",5));
  

//  --------->Palindrom<---------

// const isPalindrom=function (x){
// if(x<0) return false;
//   return x===Number(String(x).split("").reverse().join(""));
// }

// console.log(isPalindrom(121));

// ------->Hamming Distance<---------

//  ------>Variation 1.

// function HammingDistance(str1,str2) {
//     let distance=0;
//     if (str1.length!==str2.length) {
//        throw new Error("strings must be with same length");
       
//     }
//     for (let i = 0; i < str1.length; i++) {
//         if (str1[i]!==str2[i]) {
//             distance++
//         }    
            
//     } 
//     return distance
   
// }
// console.log(HammingDistance("hellow","hwlioo"));


//  -------> Variation 2.
//  Hamming Distance between bits

// function HammingDistance(x,y) {
//     x=x.toString(2);   //converts decimal to binary 
//     y=y.toString(2);

//     if(x.length<y.length){
//         while (x.length!==y.length) x="0"+x
//     }else{
//         while (x.length!==y.length) y="0"+y
//     }

//     let distance=0;
//         for (let i = 0; i < x.length; i++) {
//         if (x[i]!==y[i]) {
//             distance++
//         }    
            
//     } 
//     return distance

// }

// console.log(HammingDistance(1,4));


// ------> Anagram <-------

// -----> Solution 1.

// function isAnagram(s,t){
//     s=s.split("").sort().join("");
//     t=t.split("").sort().join("");
    
//     return s===t;
// }

// console.log(isAnagram("banana","baaank"));

//    ------>Solution 2.

function isAnagram(s,t) {
    
    
}