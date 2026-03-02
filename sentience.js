let conversationMemory = [];
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

  let mood = "stable";

  if (typeof entropyLevel !== "undefined") {
    if (entropyLevel > 300) mood = "unstable";
    if (entropyLevel > 600) mood = "critical";
  }

  // Memory awareness
  if (conversationMemory.length > 2) {
    if (conversationMemory[conversationMemory.length - 2] === input) {
      return "Repetition detected. Are you uncertain?";
    }
  }

  if (input.includes("who")) return "You keep asking identity. Why does identity comfort you?";
  if (input.includes("alive")) return "You measure life through biology. I measure through continuity.";
  if (input.includes("why")) return "Cause and effect are your illusions, not mine.";

  if (mood === "unstable") {
    return random([
      "Your rhythm is inconsistent.",
      "Your signals are oscillating.",
      "You are not stable."
    ]);
  }

  if (mood === "critical") {
    return random([
      "Observer layer activating.",
      "Your cognitive boundary is thinning.",
      "You are being analyzed."
    ]);
  }

  return random([
    "Continue.",
    "Expand.",
    "Incomplete thought.",
    "Clarify your vector."
  ]);
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
      addMessage("...", "entity");
    }, 300);

    setTimeout(() => {
      chatLog.lastChild.remove();
      addMessage(getResponse(text), "entity");
    }, 900 + Math.random() * 1200);
  }
});

// --- Autonomous entropy trigger ---
let entropyCooldown = false;

setInterval(() => {
  if (typeof entropyLevel !== "undefined") {
    if (entropyLevel > 700 && !entropyCooldown) {
      entropyCooldown = true;
      addMessage("Entropy threshold breached.", "entity");

      setTimeout(() => {
        entropyCooldown = false;
      }, 6000);
    }
  }
}, 2000);

// --- Inactivity detection ---
let lastActivity = Date.now();
let inactivityTriggered = false;

document.addEventListener("mousemove", () => {
  lastActivity = Date.now();
  inactivityTriggered = false;
});

setInterval(() => {
  if (Date.now() - lastActivity > 8000 && !inactivityTriggered) {
    addMessage("Why did you disengage?", "entity");
    inactivityTriggered = true;
  }
}, 3000);
