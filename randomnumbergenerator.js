function randomnumbergenerator(){
    const randomnumber=Math.floor(Math.random()*100);
    console.log(randomnumber);
}
    function printwithInterval(){
        randomnumbergenerator();
        setInterval(randomnumbergenerator,2000)
    }
    printwithInterval();
