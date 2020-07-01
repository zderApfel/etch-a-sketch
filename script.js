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

formGrid(16);

function formGrid(param){
    //repeat area times
    let area = param*param;
    ART_GRID.style.cssText = `grid-template-columns: 1fr repeat(${param-1}, 1fr); grid-template-rows: 1fr repeat(${param-1}, 1fr);`
    for (i = 1; i <= area; i++){
        let cell = document.createElement("div");
        ART_GRID.appendChild(cell);
        cell.style.cssText = `width: ${600/param}; height: ${600/param}`;
        cell.classList.add("grid-cell");
        changeColor(cell);

    }
}

function changeColor(cell){ //Changes the color of the cell
    return cell.addEventListener("mouseover", function(){cell.style.cssText = "background-color: black;"});
}