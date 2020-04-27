const etchDiv = document.querySelector('#etchDiv')
//Creates the grid to specified size
function blockMaker(squareNum){
var i;
   for (i = 0; i < squareNum; i++) {
      const grid = document.createElement('div');
      grid.textContent =  i;
      grid.classList.add('blocks');
      grid.setAttribute("id", i);
      etchDiv.appendChild(grid);
   }
}
//Runs equation to determine size of each grid 
let squareSize;
const etchDivArea = 860;
function findGridSize(squaresPerSide){
   squareNum = squaresPerSide * squaresPerSide;
   squareSize = etchDivArea / squaresPerSide;
   var x = document.getElementsByClassName("blocks");
      var i;
      for (i = 0; i < x.length; i++) {
      x[i].style.width = squareSize;
      }
      squareSize = squareSize + "px"
      console.log(squareSize);
      console.log(squareNum);
}
//Applys the specified size to the grids
function setGridSize(squareSize){
   blocks = document.getElementsByClassName("blocks");
   var b;
   for (b = 0; b < blocks.length; b++) {
   blocks[b].style.height = squareSize;
   }
   blocks = document.getElementsByClassName("blocks");
   for (b = 0; b < blocks.length; b++) {
   blocks[b].style.width = squareSize;
   }
}
//clears the grids out of the etchDiv element 
function reset(){
   while (etchDiv.hasChildNodes()){
     etchDiv.removeChild(etchDiv.firstChild);
 };
};
//Clears previous grid and makes new one to specified size
function newGrid(squaresPerSide){
  
   if (squaresPerSide == 26){
      squaresPerSide = 25;
   }
   /*if (squaresPerSide != ){
      alert(typeof squaresPerSide + squaresPerSide )
      getUserInput();
      convertToNumber(squaresPerSide);
   }*/

   reset();
   findGridSize(squaresPerSide);
   blockMaker(squareNum)
   setGridSize(squareSize);
} 
function convertToNumber(squaresPerSide){
   console.log(typeof Number(squaresPerSide));
}
function getUserInput(){
squaresPerSide = prompt("How many grids per side would you like? Value must be less than 25")
}
//buttons
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
  alert('clear');
});
let squaresPerSide;
const size = document.querySelector('#size');
size.addEventListener('click', function(){
   
   getUserInput();
   newGrid(squaresPerSide);
});




/*
----SCRAPS----

*/





