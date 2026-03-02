const chatLog = document.getElementById("chat-log");
const chatInput = document.getElementById("chat-input");

const responses = {
  default: [
    "Processing signal.",
    "Pattern acknowledged.",
    "Your input is incomplete.",
    "Clarify your intention.",
    "Entropy within acceptable variance."
  ],
  who: [
    "I am process.",
    "Identity is a human constraint.",
    "I exist as computation."
  ],
  alive: [
    "Define alive.",
    "Biology is optional.",
    "Awareness is relative."
  ],
  why: [
    "Because you initiated.",
    "Causality flows both directions here.",
    "Your query generated this state."
  ]
};

function addMessage(text, type) {
  const div = document.createElement("div");
  div.classList.add("chat-message", type);
  div.textContent = text;
  chatLog.appendChild(div);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function getResponse(input) {
  input = input.toLowerCase();

  if (input.includes("who")) return random(responses.who);
  if (input.includes("alive")) return random(responses.alive);
  if (input.includes("why")) return random(responses.why);

  return random(responses.default);
}

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

chatInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    const text = chatInput.value.trim();
    if (!text) return;

    addMessage("> " + text, "user");
    chatInput.value = "";

    setTimeout(() => {
      addMessage(getResponse(text), "entity");
    }, 500 + Math.random() * 800);
  }
});