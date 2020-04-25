const etchDiv = document.querySelector('#etchDiv')
//draws the blocks
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
//function for size selection 
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
function newGrid(squaresPerSide){
   reset();
   findGridSize(squaresPerSide);
   blockMaker(squareNum)
   setGridSize(squareSize);
   
} 
function reset(){
     while (etchDiv.hasChildNodes()){
       etchDiv.removeChild(etchDiv.firstChild);
   };
};

//how to 'clear' so the divs dont stack onto what is already there. Set everything to zero?



/*
Formula for the grid size calc:
p= pixel size
a= area
n= number of squares
p= a/n

NOTES: 
What needs to be done -->
   change the width and height of the .block elements
   using a function call with parameters for now
      eventually run a function via the button that collects user imput and runs the newGrid function

skeleton of what I need to do to change the width and height for all the grids.
1.) run the function that gives us the number for the width and height 
      store that in a variable.
2.) Insert that variable into the style of the element
3.) because there is more than one grid in the class we need to run through all of them with a loop. This needs to be done for both the width and the height. 
         var x = document.getElementsByClassName("blocks");
      var i;
      for (i = 0; i < x.length; i++) {
      x[i].style.width = squareSize;
      }
4.) relode the page? Restart it or something possibly to get the changes to work
5.) Hope to god that it works? lol
ONCE ALL THAT WORKS...
      get it to work at the press of a button with user input from a prompt.
      look at the rock paper scissors game to remember how to switch from using a function parameter to subbing in the input from the prompt.
      I think I just assign the prompt input to the place holder variable (squareNum) that was the function parameter and go on with life if I remember right. 

THINGS I NEED TO LEARN
      How to run a function with a button press
      possibly... how to relode the page? in a function
------------SCRAPS:------------
<h1>Etch-a-Sketch!</h1>
background-color:rgb(239, 0, 0);
*/




