let resetGame;
document.addEventListener("DOMContentLoaded", () => {
    let outer = document.getElementById("outer")
    let reset = document.getElementById("reset")
    let chance = true; // if true then put x if false then put y
    let result = document.getElementById("result")
    let arr = Array(9).fill(undefined);
    // to access all the divs it will help to reset all the divs
    let cells = document.querySelectorAll("[data-cell]"); 
    reset.addEventListener("click", () => {
        resetGame()
    })
    outer.addEventListener("click", (e) => {
        let cell = e.target;
        const cellNumber = cell.getAttribute("data-cell")
        if(cell.getAttribute("data-clicked")){
            return;
        }
        cell.setAttribute("data-clicked", "true")
        if(chance == true) {
            cell.textContent = "X"
            arr[cellNumber] = "X"
            win("X")
        }
        else{
            cell.textContent = "O"
            arr[cellNumber] = "O"
            win("O")
        }
        chance = !chance
        resetGame = function  () {
            arr = Array(9).fill(undefined)
            chance = true
            result.textContent = "Tic Tac Toe"
            cells.forEach((cell) => {
                cell.textContent = ""
                cell.removeAttribute("data-clicked") 
                // untill we did not remove data-clicked attribute we are not able to write

            })
        }
    })
    

    function win(char) { // function for winning game

        // for 0th row
        if(arr[0] == char && arr[1] == char && arr[2] == char) {
            result.textContent = `Congratulations ${char} wins`
            setTimeout(() => {
                resetGame()
            }, 2000)
        }
        // for 1th row
        else if(arr[3] == char && arr[4] == char && arr[5] == char) {
            result.textContent = `Congratulations ${char} wins`
            setTimeout(() => {
                resetGame()
            }, 2000)        
        }
        // for 2th row
        else if(arr[6] == char && arr[7] == char && arr[8] == char) {
            result.textContent = `Congratulations ${char} wins`
            setTimeout(() => {
                resetGame()
            }, 2000)
        }
        // for 0th col
        else if(arr[0] == char && arr[3] == char && arr[6] == char) {
            result.textContent = `Congratulations ${char} wins`
            setTimeout(() => {
                resetGame()
            }, 2000)
        }
        // for 1th col
        else if(arr[1] == char && arr[4] == char && arr[7] == char) {
            result.textContent = `Congratulations ${char} wins`
            setTimeout(() => {
                resetGame()
            }, 2000)
        }
        // for 2th col
        else if(arr[2] == char && arr[5] == char && arr[8] == char) {
            result.textContent = `Congratulations ${char} wins`
            setTimeout(() => {
                resetGame()
            }, 2000)
        }
        // for diagonal
        else if(arr[2] == char && arr[4] == char && arr[6] == char) {
            result.textContent = `Congratulations ${char} wins`
            setTimeout(() => {
                resetGame()
            }, 2000)
        }
        // for diagunal
        else if(arr[0] == char && arr[4] == char && arr[8] == char) {
            result.textContent = `Congratulations ${char} wins`
            setTimeout(() => {
                resetGame()
            }, 2000)
        }

    }
})