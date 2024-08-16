const data=[45,12,8,74,52,69,32];
let position=3;

for(i=position;i<data.length;i++){
data[i]=data[i+1];

}
data.length=data.length-1;
console.log(data);