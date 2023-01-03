
// //Canvas elemtn & set canvas context
// const canvas = document.getElementById("matrix");
// const ctx = canvas.getContext('2d');

// //set width and height of canvas
// const w = canvas.width = document.body.offsetWidth;
// const h = canvas.height = document.body.offsetHeight;

// //fill with black
// ctx.fillStyle = '#000';
// ctx.fillRect(0, 0, w, h);

// const cols = Math.floor(w / 20) + 1;
// const yPos = Array(cols).fill(0);

// function matrix() {
//     //Draw semi-transparent shade to fade old text
//     ctx.fillStyle = '#0001';
//     ctx.fillRect(0, 0, w, h);

//     //set color and font in drawing context
//     ctx.fillStyle = '#0f0';
//     ctx.font = '15pt monospace';

//     //for each column, put a random character
//     yPos.forEach((y, ind) => {
//         //generate random string
//         const text = String.fromCharCode(Math.random() * 128);

//         //x coordinate of column, y is given
//         const x = ind * 20;
//         //fill text
//         ctx.fillText(text, x, y);

//         //randomly reset columns >100px
//         if (yPos > 100 * Math.random() * 10000) yPos[ind] = 0;
//         else yPos[ind] = y + 20;
//     });
// }
// //render at 20fps
// setInterval(matrix, 50)


const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = document.body.offsetHeight;
const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);

function matrix () {
  ctx.fillStyle = '#0001';
  ctx.fillRect(0, 0, w, h);
  
  ctx.fillStyle = '#0f0';
  ctx.font = '15pt monospace';
  
  ypos.forEach((y, ind) => {
    const text = String.fromCharCode(Math.random() * 128);
    const x = ind * 20;
    ctx.fillText(text, x, y);
    if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
    else ypos[ind] = y + 20;
  });
}

setInterval(matrix, 50);
