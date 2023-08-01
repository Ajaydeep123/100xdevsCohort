function Stack(){
    var items = [];

    // push
    this.push = function(element){
        items.push(element);
    }

   //Pop an item from the Stack
   this.pop = function(){
     return items.pop();
   }
     
   //Peek top item from the Stack
   this.peek = function(){
     return items[items.length - 1];
   }

   //Is Stack empty
   this.isEmpty = function(){
     return items.length === 0;
   }     

   //Clear the Stack
   this.clear = function(){
      items.length = 0;
   }
     
   //Size of the Stack
   this.size = function(){
     return items.length;
   }
}

// stack
 function Stack(){
   var items = [];
   var top = 0;
   //other methods go here

   //Push an item in the Stack
   this.push = function(element){
     items[top++] = element
   }
   //top++, first performs the operation then increment's the value     

   //Pop an item from the Stack
   this.pop = function(){
     return items[--top];
   }
   //--top, first decrements the value then performs the operation
     
   //Peek top item from the Stack
   this.peek = function(){
     return items[top - 1];
   }

   //Is Stack empty
   this.isEmpty = function(){
     return top === 0;
   }     

   //Clear the Stack
   this.clear = function(){
      top = 0;
   }
     
   //Size of the Stack
   this.size = function(){
     return top;
   }
 }



class Stack{
  constructor(){
    this.items = [];
  }
  
   //other methods go here
   //Push an item in the Stack
   push = function(element){
     this.items.push(element);
   }    

   //Pop an item from the Stack
   pop = function(){
     return this.items.pop();
   }
     
   //Peek top item from the Stack
   peek = function(){
     return this.items[this.items.length - 1];
   }

   //Is Stack empty
   isEmpty = function(){
     return this.items.length === 0;
   }     

   //Clear the Stack
   clear = function(){
      this.items.length = 0;
   }
     
   //Size of the Stack
   size = function(){
     return this.items.length;
   }
}