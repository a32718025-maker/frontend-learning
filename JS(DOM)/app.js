let smallImages=document.getElementsByClassName("oldImg");
for(let i=0;i<smallImages.length;i++){

    console.log(smallImages[i]);
    smallImages[i].src="assets/spiderman_img.png";
    console.log(`value of image no.${i} is changed`);
}
console.dir(document.querySelector("p"));
console.dir(document.querySelectorAll("div a"));

let links=document.querySelectorAll(".box a");
for(link of links){
    link.style.color="purple";//inline style
}