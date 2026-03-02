let memoryGraph = [];

function addMemory(data) {
  if (memoryGraph.length > CONFIG.memoryLimit) memoryGraph.shift();
  memoryGraph.push({
    data,
    timestamp: Date.now(),
    weight: Math.random()
  });
}