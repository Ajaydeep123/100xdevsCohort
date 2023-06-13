let count =0;

function setIntervalCounter() {
  function increment() {
    count++;
    console.clear();
    console.log(count);
    if (count >= 70) {
      console.clear();
      clearInterval(countId);
    }
  }

  let countId = setInterval(increment, 1000);
}
setIntervalCounter();

function setTimeoutwalaCounter() {
  function increment() {
    count++;
    console.clear();
    console.log(count);
  }
  let timer = setTimeout(function mytimer() {
    increment();
    timer = setTimeout(mytimer, 1000);
  }, 1000);

  setTimeout(() => {
    console.log('Timer is Dead');
    clearTimeout(timer);
  }, 8000);
}

setTimeoutwalaCounter();