let boxTings = document.querySelectorAll('.item')
console.log(boxTings)
let player1 = "red"
let player2 = "blue"
let counter1 = 9

for (let i = 0; i < boxTings.length; i++) {
    boxTings[i].style.backgroundColor = 'white'
    boxTings[i].addEventListener('click', function (e){
        e.preventDefault();
        if (e.target.style.backgroundColor === "white") {
        if (counter1 % 2 === 1) {
             boxTings[i].style.backgroundColor = "red"
             counter1 = counter1 -1
        } else {
            boxTings[i].style.backgroundColor = "blue"
            counter1 -= 1
        }
    }
    })
}


