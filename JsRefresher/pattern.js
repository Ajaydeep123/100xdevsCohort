/* Q.1:
*****
*****
*****
*****
***** 
*/

function firstPat(n){
    let string = '';
    for(let i=0;i<n;i++){ 
        for(let j=0;j<n;j++){
            string= string+"*";
        }
        string += '\n';
    }
    return string;
}

console.log(firstPat(5));

/* 
*****
*   *
*   *
*   *
***** 
*/

function secPat(n){
    let string = '';
    for(let i=0;i<n;i++){
        
        for(let j=0;j<n;j++){
            if(i===0 || i===n-1||j===0 || j===n-1){
                string+='*';
            }else{
                string+=' ';
            }
        }
        string+='\n';
    }
    return string;
}
console.log(secPat(5));

/*
    *
   **
  ***
 ****
*****

*/

function thirdPat(n) {
  let string = '';
  for (let i = 1; i <=n; i++) {
    for (let j = 1; j <= n; j++) {
      if(j<=n-i){
        string+=" "
      }else{
        string+="*";
      }
    }
    string += '\n';
  }
  return string;
}
console.log(thirdPat(10));
//Dry run
/* - i = 1
  - j = 1
    - j <= n - i (1 <= 10 - 1)
      - Append space to string
  - j = 2
    - j <= n - i (2 <= 10 - 1)
      - Append space to string
  ...
  - j = 9
    - j <= n - i (9 <= 10 - 1)
      - Append space to string
  - j = 10
    - j <= n - i (10 <= 10 - 1)
      - Append asterisk to string
  - Append newline character to string */

  /*

*
**
***
****
***** 

*/

function starPat(n) {
  for (let i = 1; i <= n; i++) {
    let pat = '';
    for (let j = 1; j <= i; j++) {
      pat += '*';
    }
    console.log(pat);
  }
}

starPat(5);

/*
*****
****
***
**
*
*/

function revTriangle(n){
    let string ='';
    for(let i =1;i<=n;i++){
        for(let j=1;j<=n-i+1;j++){
            string+="*"
        }
        string+="\n"
    }
    return string;
}
console.log(revTriangle(10));

/* 
*
**
* *
*  *
*   *
******
 */

function hollowTri(n){
let string = '';
for(let i=1;i<=n;i++){
    for(let j=1;j<=n;j++){
        if(i===n||j===1||j===i){
            string+="*";
        }else{
            string+=" ";
        }
    }
    string+="\n";
}
return string;
}
console.log(hollowTri(6));

/*
    *
   ***
  *****
 *******
*********

*/

function pyramid(n){
let string = '';
for(let i=1;i<=n;i++){
    for(let j=1;j<=n-i;j++){    
        //when we are in first row we have 4 spaces, in 2nd row-> 3 spaces, in 3rd -> 2 spaces, in 4th -> 1 space, in 5th -> 0 space
        // so it basically has col = n-row relation
        string+=" ";
    }
    //No.star in 1st row -> 1, 2nd-> 3, 3rd -> 5 -----> 2*i-1
    for(let k=1;k<=2*i-1;k++){
        string+="*";
    }
    string+="\n";
}
return string;
}

console.log(pyramid(6));

/* 
*********
 *******
  *****
   ***
    *  */

function revPyramid(n) {
  let string = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i-1; j++) {
      string += ' ';
    }
    for (let k = 1; k <= 2 *(n-i)+1; k++) {
      string += '*';
    }
    string += '\n';
  }
  return string;
}

console.log(revPyramid(6));

/*  
    *
   * *
  *   *
 *     *
********* 
*/

function hlwPyramid(n){
    
}