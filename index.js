function getRandomNumber(max){
    return Math.floor( Math.random() * max)

}
function generateRandomColors (){
    let hexCharacters = ['0','1','3','4','5','6','7','8','9','a','b','c','d','e','f'] ;
    let color = '#';
    for(let i = 0 ; i < 6 ; i ++){
        let randomNumber = getRandomNumber(16);
        color = color + hexCharacters[randomNumber];

    }
    return color
}
let parentBox = document.querySelector(".boxes")


// 1. create 500 boxes
for(let i = 0 ; i < 500 ; i ++){
    let div = document.createElement('div')
    div.classList.add('box')
    
    let h3 = document.createElement('h3')
    let randomNum = getRandomNumber(500)
    h3.innerText = randomNum
    
    div.append(h3);
    parentBox.append(div)
} 
let allBoxes = document.querySelectorAll('.box') 


function handleMouseMove(){
    
    allBoxes.forEach((box) => {
        box.style.backgroundColor = generateRandomColors(); 

box.querySelector("h3").innerText = getRandomNumber(500)

    });

}

    parentBox.addEventListener("mousemove" , handleMouseMove)

