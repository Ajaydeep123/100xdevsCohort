function timer(currentTime){
    const interval = setInterval(increment, 1000);
    function increment(){
        currentTime.setSeconds(currentTime.getSeconds()+1);
        console.clear();
        console.log(currentTime);
    }
    return interval;
}

const currentTime = new Date();

timer(currentTime);

// clearInterval(timer(currentTime));