const arr=[30,5,1,88,89,54,14,76];

for(i=0;i<arr.length;i++){

    for(j=0;j<arr.length;j++){

        if(arr[j]>arr[j+1]){
         let temp=arr[j];
         arr[j]=arr[j+1];
         arr[j+1]=temp;
        }
       
    }
  

}
console.log(arr);

