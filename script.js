/*
---Etch-a-Sketch---

Learing outcome: Further practice with manipulating the DOM from within Javascript. 

This script does the following: 

1) On page load, it produces a 16x16 grid on the webpage that can be "drawn on" via mouse hover. The script accomplishes this by changing the background-color CSS property
as a mouse hovers over it. 
2) Two buttons are available, a "clear board" button, and a "random color" button.
    - Clear board will first prompt for how big one wants to make the grid (minimum 16, maximum 100, for performance and practicality reasons). When this is done, a function changes 
    the height and width of the "grid-cell" class to fit this new parameter by a math equation. (The drawing board is locked at 600px by 600px)
    - The other allows you to change the color of your "pen" to a random RGB value. (May need to install an API for this)
Optional) Add an option that picks a random color every time you hover
*/

const ART_GRID = document.getElementById("art-grid");
const CLEAR_BUTTON = document.getElementById("clear-button");
const COLOR_BUTTON = document.getElementById("change-color");
CLEAR_BUTTON.addEventListener("click", function(){formGrid(clearGrid())});
COLOR_BUTTON.addEventListener("click", function(){changeColor()});

formGrid(16);

function formGrid(param){
    while (ART_GRID.firstChild){ //clears any existing cells
        ART_GRID.removeChild(ART_GRID.firstChild);
    }
    let area = param*param; //sets the area of the grid

    ART_GRID.style.cssText = `grid-template-columns: 1fr repeat(${param-1}, 1fr); grid-template-rows: 1fr repeat(${param-1}, 1fr);`;
    
    for (i = 1; i <= area; i++){ //adds cells
        let cell = document.createElement("div");
        ART_GRID.appendChild(cell);
        cell.style.cssText = `width: ${600/param}; height: ${600/param};`;
        cell.classList.add("grid-cell");
        fill(cell, "black"); //This is what adds the mouse hover event to the cell, with the default color being black
    }
}

function clearGrid(){
    let newSize = prompt("Would you like to adjust the fineness of the pen? (Min. 16, Max. 100)", 16);
    while (parseInt(newSize) < 16 || parseInt(newSize) > 100){
        newSize = prompt("Sorry, that number is out of range. Please enter a number between 16 and 100");
    }
    return newSize;
}

function changeColor(){
    let cells = document.querySelectorAll(".grid-cell");
    let color = prompt("Enter a new color name/code. NOTE: Will default to white if invalid", "black");
    while (color.includes(" ") == true){
        color = color.replace(" ", "");
        console.log("Removed a space!");
    }
    for (i = 0; i < cells.length; i++){
        fill(cells[i], color);
    }
}

function fill(cell, color){ //Adds mouse hover event that changes the color of the cell
    COLOR_BUTTON.style.cssText = `background-color: ${color}; color: ${color}`; //changes color of color change button
    return cell.addEventListener("mouseover", function(){cell.style.cssText = `background-color: ${color};`});
}