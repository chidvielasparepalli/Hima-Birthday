let hateCount = 0;

const image = document.getElementById("reactionImage");
const message = document.getElementById("message");

const loveBtn = document.getElementById("loveBtn");
const hateBtn = document.getElementById("hateBtn");

const celebration = document.getElementById("celebration");

hateBtn.addEventListener("click", () => {

hateCount++;

if(hateCount===1){

image.src="snoopy.png";

message.innerHTML=
"Think again... you can't get someone like me 😏";

}

else if(hateCount===2){

image.src="angry-cat.png";

message.innerHTML=
"This is your last chance 🫡";

}

else if(hateCount===3){

image.src="crying-bear.png";

message.innerHTML=
"I don't believe you would do this to me 😭";

}

else if(hateCount===4){

message.innerHTML=
"💥 Launcher Activated 💥";

hateBtn.style.display="none";

setTimeout(()=>{

message.innerHTML=
"Nice try 😎 You only have one choice now.";

},1000);

}

});

loveBtn.addEventListener("click", ()=>{

document.getElementById("celebration").style.display="flex";

window.scrollTo({

top:document.body.scrollHeight,

behavior:"smooth"

});

confettiEffect();

});

function confettiEffect(){

for(let i=0;i<150;i++){

let conf=document.createElement("div");

conf.innerHTML="🎉";

conf.style.position="fixed";
conf.style.left=Math.random()*100+"vw";
conf.style.top="-20px";
conf.style.fontSize="25px";

document.body.appendChild(conf);

let speed=Math.random()*5+2;

let interval=setInterval(()=>{

conf.style.top=
(parseFloat(conf.style.top)+speed)+"px";

if(parseFloat(conf.style.top)>
window.innerHeight){

conf.remove();
clearInterval(interval);

}

},20);

}

}

document.getElementById("claimBtn")
.addEventListener("click",()=>{

document.getElementById("popup")
.style.display="block";

setTimeout(()=>{

document.getElementById("popup")
.style.display="none";

},3000);

});
