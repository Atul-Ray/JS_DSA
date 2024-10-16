// const obj={
//     message:"hello earth",
//     getmessage(){
//         const message = "hellow world"
//         return this.message
//     }
// }

// console.log(obj.getmessage());   output will be "hello earth" because this refers to the object(obj) that the methode getmessage() is called on


// function show(){
// console.log("atul",this);
    
// }

// const x = "ray"

// show.apply(x)



// const obj = {

//     name:"kuch bhi",
//     f1:function (){
//      console.log(this);

//   function f2(){
//      console.log(this);
     
//          }
//          f2()
//     },
  
// }


// obj.f1();
//--------------->

// let sum = new Function("a","b","return a+b");

// console.log(sum(5,5));
  //    <----------------------



//  function hasDuplicate(nums) {
//     let flag=false;
// for(let i=0;i<nums.length;i++){
// for(let j=i+1;j<nums.length;j++){
//     if(nums[i]===nums[j]){
//         flag=true;
//     }
// }
// }
// return flag;

// }

// console.log(hasDuplicate([1,2,3,4,4]));



// const strs = ["act","pots","tops","cat","stop","hat"]
// const ans={}

// for(s of strs){
//  const count=Array(26).fill(0);
 
//   for(c of s){
//    count[c.charCodeAt(0)-'a'.charCodeAt(0)]++;
//     }
  
//  const key=count.join('#');
//  if (!ans[key]) {
//   ans[key]=[];

//  }

//  ans[key].push(s)


 
  
// }
// const ana= Object.values(ans);
// console.log(ana);



// function KelementInList(nums,k) {
//  const result={}
//  nums.forEach(n => {
//   result[n]=(result[n]||0)+1;
//  });

 
 
//  const arr=Object.entries(result).sort((a,b)=>b[1]-a[1]).map((n)=>{return parseInt(n[0])});


 
// return arr.slice(0,k);
 
 
 
// }


// console.log(KelementInList([1,1,1,2,2,3],2));




function counter(){

  let count=0;
  let message =`your count is ${count}`;
  
  function increase(){
  count++
  }
  
  return [message,increase]
  
  }
  
  
  const [messag,increase]=counter();
  
  increase();
  increase();
  increase();
  
  const [msg,inc]=counter();
  console.log(messag);
  console.log(msg);
  
  
