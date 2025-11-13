// Firebase SDK imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// -------------------------
// 🔥 Your Firebase Config
// -------------------------
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
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Write relay state to Firebase
window.setRelay = function (state) {
  set(ref(db, "/relay/status"), state);
};

// Live status box update
const statusBox = document.getElementById("statusBox");

onValue(ref(db, "/relay/status"), (snapshot) => {
  const val = snapshot.val();

  statusBox.innerHTML = "Relay: " + val;

  if (val === "ON") {
    statusBox.style.background = "#00ff90";
    statusBox.style.color = "black";
  } else {
    statusBox.style.background = "#ff4757";
    statusBox.style.color = "white";
  }
});


