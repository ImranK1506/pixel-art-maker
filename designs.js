// global variables to set row and col size
let row;
let col;

/**
* @description Draw a grid based on user input
*/
function makeGrid() {
  const table = document.getElementById("pixel_canvas");
  // clear previous grid
  table.innerHTML = "";
  while (table.rows.length > 0)
    table.deleteRow(0);
  /* assign row to input_height */
  row = document.getElementById("input_height").value;
  /* assign col to input_width */
  col = document.getElementById("input_width").value;
  /* create row and col */
  for (let r = 0; r < row; r++) {
    const elt = table.insertRow(r);
    elt.setAttribute("class", "rows");
    for (let c = 0; c < col; c++) {
      const cell = elt.insertCell(c);
      /* add color to selected cell */
      cell.addEventListener("click", function(evt) {
        evt.target.style.backgroundColor = document.getElementById("colorPicker").value;
      });
    }
  }
  return false;
}

// Event listener on Submit button
document.getElementById("sizePicker").addEventListener("submit", function(evt) {
  evt.preventDefault();
  makeGrid();
})
