const etchDiv = document.querySelector('#etchDiv')
//Global Variables
let squaresPerSide;
let squareSize;
//Creates the grid to specified size
   function blockMaker(squareNum){
   var i;
      for (i = 0; i < squareNum; i++) {
         const grid = document.createElement('div');
         grid.classList.add('blocks');
         grid.setAttribute("id", i);
         etchDiv.appendChild(grid);
      }
   }
//Runs equation to determine size of each grid 
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
      if (squaresPerSide >= 31){
         alert('Value too large!')
         getUserInput();
      }
      reset();
      findGridSize(squaresPerSide);
      blockMaker(squareNum)
      setGridSize(squareSize);
      fillItIn();
   } 
//Uses prompt to ask user how grid dense they want their drawing surface
   function getUserInput(){
   squaresPerSide = prompt("How many grids per side would you like? Value must be less than 30")
   }
//Clear button
   const clear = document.querySelector('#clear');
      clear.addEventListener('click', () => {
         document.querySelectorAll('.blocks').forEach(blocks => {
            blocks.style.backgroundColor = 'rgb(209, 203, 203)';
      })
   });
//size button
   const size = document.querySelector('#size');
      size.addEventListener('click', function(){
         getUserInput();
         newGrid(squaresPerSide);
      });
//event listeners
   function fillItIn(){
      document.querySelectorAll('.blocks').forEach(blocks => {
         blocks.addEventListener('mouseover', event => {
         blocks.style.backgroundColor = 'black';
         })
      })    
   };
newGrid(16);
/*
----SCRAPS----
const blocks = document.querySelectorAll(".blocks")
      blocks.forEach((blocks) => {blocks.addEventListener('mouseover', (e) => {
               blocks.classList.add('filledIn')})});


NOTES
when you mouse over, add a class of "filledIn"
*/
