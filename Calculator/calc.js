const clearBtn = document.getElementById("clear")
const equalBtn = document.getElementById("equal")
let screen = document.getElementById("screen")
let previous = []
const ulEl = document.getElementById("history")

function display(val){
    screen.value += val
}


clearBtn.addEventListener("click", function(){
    screen.value=""
})


equalBtn.addEventListener("click", function(){
    let answer = eval(screen.value)
    screen.value = answer
    previous.push(screen.value)
    render(previous)
})

function render(Arr){
    let previousAnswers = ""
    for(let i =0; i <Arr.length; i++){
        previousAnswers += ` ${Arr[i]}, `
    }

    ulEl.innerHTML = previousAnswers
}