let boxTings = document.querySelectorAll('.item')
console.log(boxTings)
let player1 = "red"
let player2 = "blue"
let counter1 = 0
const box1 = document.querySelector("#item1")
const box2 = document.querySelector("#item2")
const box3 = document.querySelector("#item3")
const box4 = document.querySelector("#item4")
const box5 = document.querySelector("#item5")
const box6 = document.querySelector("#item6")
const box7 = document.querySelector("#item7")
const box8 = document.querySelector("#item8")
const box9 = document.querySelector("#item9")

for (let i = 0; i < boxTings.length; i++) {
    boxTings[i].style.backgroundColor = 'white'
    boxTings[i].addEventListener('click', function (e){
        e.preventDefault();
        if (e.target.style.backgroundColor === "white") {
        if (counter1 % 2 === 1) {
             boxTings[i].style.backgroundColor = "red"
             counter1 += 1
        } else {
            boxTings[i].style.backgroundColor = "blue"
            counter1 += 1
        }
    }
    })
}




function winGame() {
    if ((box1.style.backgroundColor==="blue" && box2.style.backgroundColor==="blue" && box3.style.backgroundColor==="blue")||
       (box4.style.backgroundColor==="blue" && box5.style.backgroundColor==="blue" && box6.style.backgroundColor==="blue")||
       (box7.style.backgroundColor==="blue" && box8.style.backgroundColor==="blue" && box9.style.backgroundColor==="blue")||
       (box1.style.backgroundColor==="blue" && box5.style.backgroundColor==="blue" && box9.style.backgroundColor==="blue")||
       (box3.style.backgroundColor==="blue" && box5.style.backgroundColor==="blue" && box7.style.backgroundColor==="blue")||
       (box1.style.backgroundColor==="blue" && box4.style.backgroundColor==="blue" && box7.style.backgroundColor==="blue")||
       (box2.style.backgroundColor==="blue" && box5.style.backgroundColor==="blue" && box8.style.backgroundColor==="blue")||
       (box3.style.backgroundColor==="blue" && box6.style.backgroundColor==="blue" && box9.style.backgroundColor==="blue")){
        alert("Winner Winner Blue Gets Dinner")
        for (let z = 0; z < boxTings.length; z++){
           boxTings[z].style.backgroundColor = "white"
       }
       
    }
    else if ((box1.style.backgroundColor==="red" && box2.style.backgroundColor==="red" && box3.style.backgroundColor==="red")||
    (box4.style.backgroundColor==="red" && box5.style.backgroundColor==="red" && box6.style.backgroundColor==="red")||
    (box7.style.backgroundColor==="red" && box8.style.backgroundColor==="red" && box9.style.backgroundColor==="red")||
    (box1.style.backgroundColor==="red" && box5.style.backgroundColor==="red" && box9.style.backgroundColor==="red")||
    (box3.style.backgroundColor==="red" && box5.style.backgroundColor==="red" && box7.style.backgroundColor==="red")||
    (box1.style.backgroundColor==="red" && box4.style.backgroundColor==="red" && box7.style.backgroundColor==="red")||
    (box2.style.backgroundColor==="red" && box5.style.backgroundColor==="red" && box8.style.backgroundColor==="red")||
    (box3.style.backgroundColor==="red" && box6.style.backgroundColor==="red" && box9.style.backgroundColor==="red")){
     alert("Hereee Comessssss Redddddddd!!!!")
     for (let h = 0; h < boxTings.length; h++){
        boxTings[z].style.backgroundColor = "white"
        }
    }
}

var resetButton = document.getElementById('reset')
resetButton.addEventListener('click', function(evt){
    evt.preventDefault();
    for (let i=0; i<boxTings.length; i++){
      boxTings[i].style.backgroundColor = 'white';
    }
})