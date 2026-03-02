function predictIntent(input) {
  let score = 0;
  agents.forEach(agent => {
    score += agent.process(input);
  });
  score = Math.abs(score % 100);
  document.getElementById("intent").innerText = score.toFixed(2);
}