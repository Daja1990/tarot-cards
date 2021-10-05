// Lottie running on page load

window.onload = start;

function start(){
var anim;
var animdata ={
    container: document.getElementById("bm"),
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "tarot_shuffle.json"
};
anim = bodymovin.loadAnimation(animdata);
anim.addEventListener('complete',showcard);
}

lottie.loadAnimation({
    container: document.getElementById("bm2"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'lottie2/ball.json' // the path to the animation json
  });

// Function running on page load

var backgroundImage = document.getElementById("bg");
var zNumb = 300;

function showcard(){
document.getElementById("bm").style.display = "none";
backgroundImage.style.display = "block";
}

// https://stackoverflow.com/questions/50200815/how-to-declare-a-lot-a-document-getelementbyid-variables-at-the-same-time Shorting of doc.getelem - DO THIS SOON

// Functions for displaying the random content when card is clicked

function first_function(){
zNumb++;
document.getElementById("imgOne").style.zIndex = zNumb;
console.log("test1");
document.getElementById("a").classList.remove("hide");
document.getElementById("a2").classList.remove("hide");
console.log(zNumb);
}

function second_function(){
zNumb++;
document.getElementById("imgTwo").style.zIndex = zNumb;
console.log("test2");
document.getElementById("b").classList.remove("hide");
document.getElementById("b2").classList.remove("hide");
}

function third_function(){
zNumb++;
document.getElementById("imgThree").style.zIndex = zNumb;
console.log("test3");
document.getElementById("c").classList.remove("hide");
document.getElementById("c2").classList.remove("hide");
}

function fourth_function(){
zNumb++;
document.getElementById("imgFour").style.zIndex = zNumb;
console.log("test3");
document.getElementById("d").classList.remove("hide");
document.getElementById("d2").classList.remove("hide");
}

function fifth_function(){
zNumb++;
document.getElementById("imgFive").style.zIndex = zNumb;
console.log("test3");
document.getElementById("e").classList.remove("hide");
document.getElementById("e2").classList.remove("hide");
}

function sixth_function(){
zNumb++;
document.getElementById("imgSix").style.zIndex = zNumb;
console.log("test3");
document.getElementById("f").classList.remove("hide");
document.getElementById("f2").classList.remove("hide");
}

function last_tarot(){
zNumb++;
document.getElementById("imgLast").style.zIndex = zNumb;
console.log("last one");
document.getElementById("last").classList.remove("hide");
document.getElementById("last2").classList.remove("hide");
}

// Splice array 1 item at a time

Array.prototype.randsplice = function () {
var randomnbr = Math.floor(Math.random() * this.length);
// Removed extra variable
return this.splice(randomnbr, 1);
};

// Use an eventlistener to wait for the DOM to load so that we can depend on DOM elements being available

window.addEventListener("load",function(){

// Setup the array we will use for this example
var my_array = [
    first_function,
    second_function,
    third_function,
    fourth_function,
    fifth_function,
    sixth_function,
];

// Attach a click event handler to our button

backgroundImage.onclick = function(){

// Hide content after each click

var cardhider = document.getElementsByClassName("hide-all");
for(var i=0;i<cardhider.length;i++){
cardhider[i].classList.add("hide");
}

// Modify my_array and display result

if(my_array.length > 0){   
var new_numb = my_array.randsplice();
new_numb[0].apply(null);

// Animation making card unclickable until animation is complete 

backgroundImage.classList.add("animstart");
backgroundImage.addEventListener( "animationend",  function() {
backgroundImage.classList.remove("animstart"); 
} );

}else{
last_tarot();
document.getElementById("bottomcard").classList.add("hide");
// backgroundImage.classList.add("no-click");
}
}
});