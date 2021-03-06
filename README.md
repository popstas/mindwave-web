Web interface for meditations.

Just pair Bluetooth with MindWave and run.

## Features:
- **Visualize meditation zones**: high, mid, low
- **High zones details**: time at level 70+%
- **Sound feedback**: when meditation level is high, sound off
- **Session time**: recording will stop after time
- **Meditations history**: average levels
- **Days history**: meditations count average levels
- **Compare**: two meditation graphs
- **Bundled with ThinkGear Connector** for Windows
- **MQTT**: it can send to MQTT all headset data

App bundled with ThinkGear Connector, it connects to Mindwave with COM port and share socket.

## Setup
1. Download release
2. Pair MindWave headset with your PC
3. Run program

---

## Advanced

### MQTT setup
Add your MQTT server in config.js

### Build
```
npm install

cp config.example.js config.js

npm start # main app
npm run dev # vite app
```

### Stack
- Vue
- Vite, TS
- Vuex, vuex-persistedstate
- D3.js

### TODO
- vite-plugin-vue-layouts
- Meditation tags