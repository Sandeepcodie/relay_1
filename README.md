# 🔌 ESP32 + Firebase Realtime Database Relay Control Dashboard

A beautiful web dashboard + ESP32 firmware to control a **Wi-Fi relay switch** in real time from **anywhere in the world** using **Firebase Realtime Database** and **GitHub Pages** 🌍⚡

---

## 🚀 Features
✅ Control relay ON/OFF remotely using Firebase  
✅ Real-time two-way communication  
✅ Works on **ESP32** (via Arduino IDE)  
✅ Firebase Realtime Database integration  
✅ Beautiful responsive web dashboard with transitions  
✅ Hosted free using **GitHub Pages**  

---

## 🧠 System Overview

**Architecture:**


- The web app updates `/relay/status` in Firebase (`ON` / `OFF`)
- The ESP32 listens to Firebase and toggles the relay pin accordingly

---

## 🛠️ Requirements

### Hardware
- ESP32 Dev Module  
- Relay Module (5V or 3.3V compatible)
- Jumper Wires
- USB Cable (Data cable)

### Software
- Arduino IDE (with ESP32 core installed)
- Firebase Realtime Database (free tier)
- GitHub account (for hosting dashboard)

---

## ⚙️ Arduino Setup

1. **Install Libraries**  
   - `Firebase ESP Client` by Mobizt  
   - `WiFi` (comes preinstalled)

2. **Update Code Variables**
   ```cpp
   #define WIFI_SSID "Your_WiFi_Name"
   #define WIFI_PASSWORD "Your_WiFi_Password"
   #define API_KEY "Your_Firebase_Web_API_Key"
   #define DATABASE_URL "Your_Firebase_RTD_Url"
