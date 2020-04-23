const etchDiv = document.querySelector('#etchDiv')

var i;
   for (i = 0; i < 256; i++) {
      const grid = document.createElement('div');
      grid.textContent =  i;
      grid.classList.add('blocks');
      grid.setAttribute("id", i);
      etchDiv.appendChild(grid);
   }

/*<h1>Etch-a-Sketch!</h1>
background-color:rgb(239, 0, 0);
*/




