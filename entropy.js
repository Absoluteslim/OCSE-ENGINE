let entropyLevel = 0;
let lastMove = 0;

document.addEventListener("mousemove", e => {
  entropyLevel += Math.abs(e.movementX) + Math.abs(e.movementY);
  lastMove = Date.now();
});

function updateEntropy() {
  entropyLevel *= CONFIG.entropyDecay;
  document.getElementById("entropy").innerText = entropyLevel.toFixed(2);
}