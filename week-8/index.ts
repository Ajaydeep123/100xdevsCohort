/*  type NumberArr = number[];

 function getFirstElem(arr:NumberArr):number{
    return arr[0];
 }

 let ans = getFirstElem([1,2,3]);
 console.log(ans);
   */

/*  
type User = {
        name: string,
        age: number
 }

 function getFirstItem <T>(arr:T[]){
    return arr[0];
 }

 let a = getFirstItem<number>([1,2,3]);
 let b = getFirstItem<string>(["AJAY", "deep", "Singh"]);

 let c=  getFirstItem<User>([{
    name:"ajaydeep",
    age:24
 },{name:"ajaydeepsingh",
    age:25
}])

console.log(b.toLocaleLowerCase());
 */


// Assignment 2
/* 
create a swap function that can takes two arguments of the same type 
arguments can be either two strings, number or booleans (both of the same type)

the function should swap them and return an array with first element as the second one and vice versa */

// function swap<T, U>(a:T,b:U):[U,T]{
//     return [b,a]
// }

// const ans = swap(1,2);


// Partials : A type could either exist or be set to undefined

interface Todo {
    title: string,
    description: string,
    id: number,
    done: boolean;
}

type UpdateTodoInput = Partial<Todo>;

function updateTodo(id:number, newProp: UpdateTodoInput){

}

updateTodo(1,{
    description:"New identities"
})