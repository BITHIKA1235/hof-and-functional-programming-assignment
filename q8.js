let originalnumber=[2,5,8,10,3];
let evennumbers=[];
originalnumber.forEach(number=>{
    if(number %2==0){
        evennumbers.push(number)
    }
});
console.log("Even number:",evennumbers)