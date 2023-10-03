const toggle = (...args) =>{
    let index =0;
    return function(){
        if(args.length){
            console.log(args[index++]);

            //edge case

            if(index>=args.length){
                index =0;
            }
        }
    }
}

const hello = toggle("1", "2", "3");
hello();
hello();