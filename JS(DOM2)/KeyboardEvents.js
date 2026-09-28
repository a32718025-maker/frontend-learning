let btn=document.querySelector("button");
btn.addEventListener("click",function(event){ //pointerEvent
   console.log(event);
    console.log("button clicked");

});
btn.addEventListener("dblclick",function(event){//mouseEvent
   console.log(event);
   console.log("button clicked");

});


let inp=document.querySelector("input"); //keyboard event

//inp.addEventListener("keydown",function(){ 
  //  console.log("key=",event.key);
  //  console.log("code=",event.code);
  //  console.log("key was pressed");
//});

//inp.addEventListener("keyup",function(){ 
 //   console.log("key was released");
//})


console.log("video game");
inp.addEventListener("keydown",function(event){
    console.log("key=",event.key);
    console.log("code=",event.code);//ArrowUp(U),ArrowDown(d),ArrowLeft(L),ArrowDown(D)
    if(event.code=="keyU"){
        console.log("character moves forward");
    }else if(event.code=="keyD"){
            console.log("character move downward");
        }else if(event.code=="keyL"){
            console.log("character move left");
        }else if(event.code=="keyR"){
            console.log("character move right");
        }
    
});