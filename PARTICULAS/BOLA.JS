class Bola {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.radio = 10;
      this.dirX = Math.random() * 2 - 1;
      this.dirY = Math.random() * 2 - 1;
      this.velocidad = 5;
      ctx.fillStyle = "red";
      this.imagen = new Image(); 
      this.imagen.src = '';
      
    }
    dibujar() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radio, 0, Math.PI * 2);
    //   ctx.fillStyle = 'red';
      ctx.fill();
      // ctx.stroke();
      ctx.closePath();
    }
    movimiento() {
      this.x += this.dirX * this.velocidad;
      this.y += this.dirY * this.velocidad;

      // arrayColores = [];
  
      if (this.x + this.radio > canvas.width || this.x < 0) {
          this.dirX *= -1;
          ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
          ctx.strokeStyle = ctx.fillStyle;

      }
  
      if (this.y + this.radio > canvas.height || this.y < 0) {
        this.dirY *= -1;
        ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        ctx.strokeStyle = ctx.fillStyle;
      }
    }
  }