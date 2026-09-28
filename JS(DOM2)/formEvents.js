let form=document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();//so,that after submit dont perform action
    console.dir(form);

let user=this.elements[0];
let pass=document.querySelector("#pass");

console.log(user.value);//click on register
console.log(pass.value);
alert(`hi ${user.value},your password is set to ${pass.value}`);
});

user.addEventListener("change",function(){  //click wherever you want
    console.log("change event");
    console.log("final value=",this.value);//tell initial and final change only
});

user.addEventListener("input",function(){  //click wherever you want
    console.log("input event");
    console.log("final value=",this.value);//tell every change you made
});
