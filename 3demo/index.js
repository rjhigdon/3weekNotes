//----------------- counter----------------------------
let count = 0

let minusBtn = document.querySelector('#minus-btn')
let resetBtn = document.querySelector('#reset-btn') //the # notates that it's an ID
let plusBtn = document.querySelector('#plus-btn')

let counter = document.getElementById('counter')

function decrease(){
    count -= 1
    counter.textContent = count
}
function reset(){
    count = 0
    counter.textContent = count
}
function increase(){
    count += 1
    counter.textContent = count
}

minusBtn.addEventListener('click', decrease)
resetBtn.addEventListener('click', reset)
plusBtn.addEventListener('click', increase)

//------------------Themes------------------------------

let themeBtns = document.querySelectorAll('.theme-buttons') //the . means a class

function selectTheme(event){
    // document.body.className = event.target.textContent ->this one is ONLY available for <body> not div or anything else
    //OR
    document.querySelector('body').className = event.target.textContent 
    
    document.querySelector('main').className 
    
    let buttons = document.querySelectorAll('button') //this is where we make the buttons dynamic
    for(let i = 0; i < buttons.length; i++){
        buttons[i].className = event.target.textContent
    }
}

for(let i = 0; i < themeBtns.length; i++){
    themeBtns[i].addEventListener('click', selectTheme)
}

//------------------input btn------------------------------
 
let input = document.querySelector('input')
let inputBtn = document.querySelector('#input-btn')

function getValue(){
    let h2 = document.createElement('h2')
    h2.textContent = input.value
    document.body.appendChild(h2)
    input.value = ''
}
inputBtn.addEventListener('click', getValue)