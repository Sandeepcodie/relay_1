// 🔥 Your Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdxGoyceOa5t4JBTgHhQdDtAVMZRevV2E",
  authDomain: "relay-control-e746d.firebaseapp.com",
  databaseURL:
    "https://relay-control-e746d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "relay-control-e746d",
  storageBucket: "relay-control-e746d.firebasestorage.app",
  messagingSenderId: "1007799568051",
  appId: "1:1007799568051:web:d18954c14905d3a249d2c6",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database(app);
const relayStatusRef = database.ref("relay/status");

// Elements
const statusEl = document.getElementById("status");
const onBtn = document.getElementById("onBtn");
const offBtn = document.getElementById("offBtn");

// Listen for status updates
relayStatusRef.on("value", (snapshot) => {
  const state = snapshot.val();
  statusEl.textContent = state ? state.toUpperCase() : "UNKNOWN";
  statusEl.style.color = state === "ON" ? "#00ff88" : "#ff5555";
});

// Button events
onBtn.addEventListener("click", () => {
  relayStatusRef.set("ON");
});

offBtn.addEventListener("click", () => {
  relayStatusRef.set("OFF");
});
