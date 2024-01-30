const orderslist=[
    { name:"Laptop",price:120000},
    {name:"Mobile",price:70000},
    {name:"Mobile Charger",price:1500},
    {name:"Laptop",price:10500},
];
let sum=0;
orderslist.forEach((data)=>(sum+=data.price));
console.log('The total price is  RS', sum);


    
