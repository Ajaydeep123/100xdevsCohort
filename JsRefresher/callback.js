function orderPizza(callback){
    setTimeout(()=>{
        const pizza = '🍕';
        callback(pizza);
    },2000)
}

function pizzaReady(pizza){
    console.log(`Eat the ${pizza}`);
}

orderPizza(pizzaReady)
console.log(`call amisha`);



function loadscript(src, callback){
    let script = document.createElement('script');
    script.src =src;
    script.onload = () => callback(null,script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
    document.head.append(script);
}

// loadscript(
//   'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js',
//   script => {
//     alert(`cool the ${script.src} is loaded`);
//     alert(_);
//   }
// );

/* Callback in callback;
loadscript('/my/script.js', function(script){
    loadscript('/my/script1.js', function(script){
        loadscript('/my/script2.js', function(script){

        });
    });
});
 */

/* 
Handling error
loadScript('/my/script.js', function (error, script) {
  if (error) {
    // handle error
  } else {
    // script loaded successfully
  }
});
 */




/* callback hell

loadScript('1.js', function(error, script) {

  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', function(error, script) {
      if (error) {
        handleError(error);
      } else {
        // ...
        loadScript('3.js', function(error, script) {
          if (error) {
            handleError(error);
          } else {
            // ...continue after all scripts are loaded (*)
          }
        });

      }
    });
  }
}); */

/* 
possible ways to avoid callback hell

loadScript('1.js', step1);

function step1(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', step2);
  }
}

function step2(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('3.js', step3);
  }
}

function step3(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...continue after all scripts are loaded (*)
  }
}
*/