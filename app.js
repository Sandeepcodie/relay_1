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

// -------------------------
// 🔘 Write Relay State
// -------------------------
window.setRelay = function (relayNum, state) {
  set(ref(db, `/relay${relayNum}/status`), state);
};

// -------------------------
// 🔘 Master Control
// -------------------------
window.toggleAll = function (state) {
  set(ref(db, "/relay1/status"), state);
  set(ref(db, "/relay2/status"), state);
};

// -------------------------
// 👁 Real-time Display
// -------------------------
const status1 = document.getElementById("status1");
const status2 = document.getElementById("status2");

// Relay 1
onValue(ref(db, "/relay1/status"), (snapshot) => {
  const val = snapshot.val();
  status1.innerHTML = "Relay 1: " + val;

  if (val === "ON") {
    status1.style.background = "#00ff90";
    status1.style.color = "black";
  } else {
    status1.style.background = "#ff4757";
    status1.style.color = "white";
  }
});

// Relay 2
onValue(ref(db, "/relay2/status"), (snapshot) => {
  const val = snapshot.val();
  status2.innerHTML = "Relay 2: " + val;

  if (val === "ON") {
    status2.style.background = "#00ff90";
    status2.style.color = "black";
  } else {
    status2.style.background = "#ff4757";
    status2.style.color = "white";
  }
});
