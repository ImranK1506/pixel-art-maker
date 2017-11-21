// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let row;
let col;
let color = "#000";

function makeGrid() {
const table = document.getElementById("pixel_canvas");
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
