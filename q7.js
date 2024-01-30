let originalnumber=[2,5,8,10,3];
originalnumber.forEach((number,index,array)=>{
   array[index]=number*2;
})
console.log("DOUBLED NUMBERS",originalnumber)
