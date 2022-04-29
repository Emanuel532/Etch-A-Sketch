let gridSize = 0;
let trace = false;
let currentColor = 'white';
let isRandomColor = false;
let eraserOn = false;

const createDivs = function (noDiv) {
    eraserOn = false;
    currentColor = 'white';
    const container = document.querySelector('.container');
    //container.style.width = 100*noDiv + 'px';
    //container.style.height = 100*noDiv + 'px';
    container.innerHTML = "";

    let square_size = 700/noDiv;

    noDiv *= noDiv;
    for(let i = 1; i <= noDiv; i++) {

        const content = document.createElement('div');
        content.classList.add('square');

        content.style.width = square_size + 'px';
        content.style.height = square_size + 'px';

        content.addEventListener( 'mouseover', (e)=>{

            if(isRandomColor) {
                currentColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            }

            if(eraserOn )
                currentColor = "#333";
            
            if(e.target.classList.square !== undefined) {
                e.target.classList.remove('square')
                
            }
            e.target.style.transition = '';
            e.target.style.backgroundColor = currentColor;
            


        });
            content.addEventListener( 'mouseout', (e) =>{
                if(trace == false) {
                e.target.style.backgroundColor = '#333';
                e.target.style.transition = 'background-color 1.5s ease-out';
                } else {

                e.target.style.transition = '0';
                }
            })

        container.appendChild(content);
    }

}

const gridBtn = document.getElementById("grid");
gridBtn.addEventListener( "click", () =>  {
    let size = prompt("Please enter your desired size(01-99)");
    gridSize = parseInt(size);
        if( size > 0 & size < 100) {
            createDivs(size);
        }
    
});

const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', ()=> createDivs(gridSize));

const traceBtn = document.getElementById('trace');
traceBtn.addEventListener('click', ()=> {
    if (confirm('Warning! Your grid will be erased!')) {
        trace = !trace;
        createDivs(gridSize);
      } 

});

const rainbowBtn = document.getElementById('rainbow');
rainbowBtn.addEventListener('click', () => {
    if(isRandomColor == true)
        currentColor = 'white';
    isRandomColor = !isRandomColor;

} );
const eraserBtn = document.getElementById('eraser');
eraserBtn.addEventListener('click', () => {
    if(trace == false)
        alert("can t use eraser while trace mode is disabled");
     else 

    eraserOn = !eraserOn;
});

