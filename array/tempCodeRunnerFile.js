function largestsubarray(arr){
 
        let sum=0
        let maxsum=arr[0]

        for(i=0;i<arr.length;i++){
                sum+=arr[i]
                if(sum>maxsum){
                        maxsum=sum;
                }
                if(sum<maxsum){
                        sum=0;
                }
        }
        return maxsum;
}

console.log(largestsubarray([1,2,3,4,5]));



