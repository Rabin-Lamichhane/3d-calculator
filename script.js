let screen = document.querySelector(".screen")
let calculation = document.querySelector(".calculation")
let ans = document.querySelector(".ans")


function clearScreen() {
    calculation.innerHTML = ""
}

function showAns(value) {
    ans.innerHTML = value
}


var ansFunction;

function handleButtonClick(value, type) {
    showAns("")
    if (type == 'number') {
        calculation.innerHTML += value
    } else {
        switch (value) {
            case "ac": {
                clearScreen()
                break
            }
            case '=': {
                ansFunction = new Function(`return (${calculation.innerHTML.replace("×", "*")})`)
                let ans = ansFunction()
                showAns(ans)
                break
            }
        }
    }
}