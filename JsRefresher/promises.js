// let promise = new Promise(function(resolve, reject){
//     console.log("promise ho gaya");
//     setTimeout(()=>{
//         resolve('done')
//         console.log("promise resolved");
//     },1000);
// })

let promise= new Promise(function(resolve, reject){
    setTimeout(()=>resolve(1),1000);
}).then(function(result){
      console.log(result); // 1
      return result * 2;

}).then(function(result){
      console.log(result); // 1
      return result * 2;

}).then(function(result){

      console.log(result); // 1
      return result * 2;
});


let withdelay = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result); // 1

    return new Promise((resolve, reject) => {
      // (*)
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function (result) {
    // (**)

    console.log(result); // 2

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function (result) {
    console.log(result); // 4
  });


//   If we throw inside .catch, then the control goes to the next closest error handler. 
//   And if we handle the error and finish normally, then it continues to the next closest successful .then handler.

// the execution: catch -> catch
new Promise((resolve, reject) => {

  throw new Error("Whoops!");

}).catch(function(error) { // (*)

  if (error instanceof URIError) {
    // handle it
  } else {
    alert("Can't handle such error");

    throw error; // throwing this or another error jumps to the next catch
  }

}).then(function() {
  /* doesn't run here */
}).catch(error => { // (**)

  alert(`The unknown error has occurred: ${error}`);
  // don't return anything => execution goes the normal way

});

