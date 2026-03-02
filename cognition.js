const inputBox = document.getElementById("input");

inputBox.addEventListener("input", e => {
  const value = e.target.value;
  addMemory(value);
  predictIntent(value);
});