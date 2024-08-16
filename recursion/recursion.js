  //  let money = 100;
  // let totalApple = 0;

  // function buyApple(x) {
  //   if (x > 0) {
  //     console.warn("I have", x, "RS", totalApple);
  //        buyMore(x - 10);
  //      } else {
  //        console.warn("I don't have more money", totalApple);
  //      }
  //    }
  //    function buyMore(x) {
  //      totalApple++;
  //      buyApple(x - 5);
  //    }

  //    buyApple(money);


// ------>Calculate factorial

  // function fact(x){
  // if(x===0){
  //   return 1
  // }else{
  //   return x*fact(x-1)
  // }
  // }

  // console.log(fact(5));


  //  ------>Array with range of number


  // function RangeofNums(starnum,endnum){
  //   if(endnum<starnum){
  //     return []
  //   }else{
  //     const numbers=RangeofNums(starnum,endnum-1)
  //     numbers.push(endnum)
  //     return numbers
  //   }
  // }
  

  // console.log(RangeofNums(1,5));



  // -------->Palindrom Number
     //   ------->Solution 1. 
// function CheckPalindrom(data){

// start=0;
// end=data.length-1
// while(start<end){
//  if(data[start]!=data[end]){
//   return false
//  }else{
//   return true
//  }
//  start++
//  end--
// }
// }
 
// console.log(CheckPalindrom(""))

// ------>Solution 2.  (Recursssive Aproach)

function Palindrom(str,start,end){

}



//    -------->fibonacci number


//   // Addition of previous two numbers in fibonacci series
// function fibonacci(n) {
//   if (n <= 1) {
//       return n;
//   }
//    return fibonacci(n - 1) + fibonacci(n - 2);
  
// }

//    // print full series upto num
// let  num=10
// let series = new Array(num).fill(0);

// for (let i = 1; i <= num; i++) {
//     series[i - 1] = fibonacci(i);
// }



// console.log(fibonacci(num));
// console.log(series);