let gameSeq=[];
let userSeq=[];

let Started=false;
let level=0;

let h2=document.querySelector("h2");
let btns=["one","two","three","four"];



document.addEventListener("keypress",function(){
    if(Started==false){
       // console.log("game is started");
        Started=true;

        levelUp();

    }
});

function userFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },1000);
}

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function() {
        btn.classList.remove("gameflash");
    },1000);
}


function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=dodcument.queryselector(`.${randColor}`);
    //console.log(randIdx);
    //console.log(randColor);
    //console.log(randBtn);

    gameSeq.push(randColor);
    //console.log(game)
    gameFlash(randBtn);

}


function checkAns(idx){
    //consolelog("curr level:",level);

   // let idx=level-1; fixed index

    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length) {
            setTimeout(levelUp,1000);

            levelUp();
        }
    }else{
        h2.innerText=`ggame over! press any key to start.`;
        reset();
    }
}
       
function btnPress(){
   // console.log(this);//konsa btn press KIYA
    let btn=this;
    userFlash(btn);//btn flash

     userColor=btn.getAttribute("id");
    userSeq.push(userColor);

     checkAns(userSeq.length-1);

}

let allbtns=document.querySelectorAll(".btn");
for( let btn of allbtns){_
    btn.addEventListener("click",btnPress);
}


function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
