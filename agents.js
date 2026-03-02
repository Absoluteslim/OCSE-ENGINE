class CognitiveAgent {
  constructor(id) {
    this.id = id;
    this.bias = Math.random();
    this.state = Math.random();
  }

  process(input) {
    this.state += quantumNoise(input.length + this.bias);
    return this.state;
  }
}

let agents = [];

for (let i = 0; i < CONFIG.agentCount; i++) {
  agents.push(new CognitiveAgent(i));
}