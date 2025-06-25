let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// let bola = new Bola(canvas.width / 2, canvas.height / 2);

let bolas = [];
let numBolas = parseInt(prompt("Ingrese el número de bolas"));

for (let i = 0; i < numBolas; i++) {
  bolas.push(new Bola(canvas.width / 2, canvas.height / 2));
}

function animacion() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  bolas.forEach((bola) => {
    bolas.forEach((bolaTarget) => {
      ctx.beginPath();
      ctx.moveTo(bola.x, bola.y);
      ctx.lineTo(bolaTarget.x, bolaTarget.y);
      ctx.stroke();
      ctx.closePath;
      // ctx.fillStyle = "red";
    //  ctx.strokeStyle = "red"; 

    });

    bola.dibujar();
    bola.movimiento();
  });

  requestAnimationFrame(animacion);
}

animacion();


