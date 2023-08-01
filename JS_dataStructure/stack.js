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