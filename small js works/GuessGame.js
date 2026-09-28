const max=prompt("enter the max number");

const random=Math.floor(Math.random()*max)+1;

let guess=prompt("guess the no.");

while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
    if(guess==random){
        console.log("you are right :congrats!! random no. was ",random);
        break;
    }else if(guess<random){
        guess=prompt("hint:your guess was too small please try again");
    }else{
        console.log("your no. is too large");
    }
    }
