console.log("oi");

var boxes = document.querySelectorAll(".box");
const fonts = ["Edu SA Hand", 
    "Savate", 
    "Monsieur La Doulaise", 
    "Noto Sans", 
    "WDXL Lubrifont TC", 
    "Pacifico", 
    "Henny Penny", 
    "Twinkle Star", 
    "Cherry Bomb One",
    "Mr Bedfort", 
    "Permanent Marker", 
    "Chango", 
    "Mr Dafoe", 
    "Mrs Sheppards"];

console.log(boxes);

const randomFont = (e) => {

    
    var randomNum = Math.floor(Math.random() * 14);
    console.log(randomNum);

    e.style.fontFamily = fonts[randomNum];

}

boxes.forEach(element => {

    setInterval(() => randomFont(element), 1300);
    
});





