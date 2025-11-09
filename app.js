// ✅ Firebase configuration
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
const db = firebase.database(app);
const relayRef = db.ref("relay/status");

// DOM Elements
const indicator = document.getElementById("indicator");
const statusText = document.getElementById("statusText");
const onBtn = document.getElementById("onBtn");
const offBtn = document.getElementById("offBtn");

// Listen for realtime database changes
relayRef.on("value", (snapshot) => {
  const value = snapshot.val();
  if (value === "ON") {
    indicator.classList.add("on");
    indicator.classList.remove("off");
    statusText.textContent = "ON";
    statusText.style.color = "#00e676";
  } else if (value === "OFF") {
    indicator.classList.add("off");
    indicator.classList.remove("on");
    statusText.textContent = "OFF";
    statusText.style.color = "#f44336";
  } else {
    statusText.textContent = "UNKNOWN";
    statusText.style.color = "#ffeb3b";
  }
});

// Write ON/OFF to Firebase
onBtn.addEventListener("click", () => {
  relayRef.set("ON");
});

offBtn.addEventListener("click", () => {
  relayRef.set("OFF");
});
