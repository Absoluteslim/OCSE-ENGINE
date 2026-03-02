function loop() {
  updateEntropy();
  distortUI();
  observerCheck();
  requestAnimationFrame(loop);
}

loop();