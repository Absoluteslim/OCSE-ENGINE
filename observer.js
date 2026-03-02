function observerCheck() {
  const state = entropyLevel > 500 ? "Awakened" : "Dormant";
  document.getElementById("observerState").innerText = state;
}