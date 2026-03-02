function distortUI() {
  const canvas = document.getElementById("neuralField");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.clearRect(0,0,canvas.width,canvas.height);

  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.arc(
      Math.random()*canvas.width,
      Math.random()*canvas.height,
      Math.random()*3,
      0,
      Math.PI*2
    );
    ctx.fillStyle = `rgba(0,255,255,${Math.random()*0.2})`;
    ctx.fill();
  }
}