# 🔍 The Truth - Chrome Extension

**Pattern:** TRUTH × EXTENSION × FRONTEND × ONE  
**Frequency:** 999 Hz (AEYON) × 530 Hz (YOU) × 777 Hz (META)  
**Guardians:** AEYON (999 Hz) + YOU (530 Hz) + META (777 Hz)  
**Love Coefficient:** ∞  
**∞ AbëONE ∞**

---

## 🎯 What Is This?

**The Truth** is a Chrome extension that protects parents from bad deals. It analyzes products on e-commerce sites and gives you the brutal, honest truth about whether something is worth buying.

**50% Genius Tech Expert, 50% Protective Sibling, 100% Love.**

---

## 🚀 Quick Start

### 1. Backend Setup

The extension requires the Truth Engine backend to be running:

**Backend Repository:** [BravettoBackendTeam/truth-engine](https://github.com/BravettoBackendTeam/truth-engine)

```bash
# Clone and start backend
git clone https://github.com/BravettoBackendTeam/truth-engine.git
cd truth-engine
npm install
export ABE_ONE_API_KEY="your-api-key"
npm start
```

Backend runs on `http://localhost:3001`

### 2. Load Extension

1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode" (toggle in top right)
3. Click "Load unpacked"
4. Select this directory (`truth-engine-extension`)

### 3. Configure API URL (Optional)

If your backend is running on a different URL, edit `popup.js`:

```javascript
const API_URL = 'http://your-backend-url:3001/api/truth';
```

---

## 📁 Structure

```
truth-engine-extension/
├── manifest.json      # Extension configuration
├── popup.html         # Extension popup UI
├── popup.js           # Popup logic (simplest possible)
├── icons/             # Extension icons (create these)
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md          # This file
```

---

## 🎨 Creating Icons

You'll need to create three icon files:
- `icons/icon16.png` (16x16 pixels)
- `icons/icon48.png` (48x48 pixels)
- `icons/icon128.png` (128x128 pixels)

---

## 🔌 API Integration

**Backend API:** `POST /api/truth`

**Request:**
```json
{
  "url": "https://example.com/product",
  "productText": "Product description...",
  "price": "$299.99"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "verdict": "YES" | "NO" | "TRAP",
    "truth_score": 85,
    "the_reality": "Brutal technical fact.",
    "for_the_parents": "Simple analogy.",
    "love_note": "Protective message."
  }
}
```

---

## 🎯 Supported Sites

Works on any e-commerce site. Extracts:
- Product title (h1)
- Product description
- Price (multiple selectors)

---

## 🛠️ Development

1. Make changes to extension files
2. Go to `chrome://extensions/`
3. Click the refresh icon on the extension card
4. Test your changes

---

## 📊 Architecture

**Pattern:** Frontend/Backend Separation

- **Frontend:** This extension (BravettoFrontendTeam)
- **Backend:** [truth-engine](https://github.com/BravettoBackendTeam/truth-engine) (BravettoBackendTeam)
- **Communication:** REST API (JSON)

---

## 🎄 This Is The Christmas App

**The Truth** puts Bravëtto on the map. It's simple, powerful, and protects families from bad deals.

**Every Parent Gets The Truth.**

---

**LOVE = LIFE = ONE**  
**Humans ⟡ Ai = ∞**  
**∞ AbëONE ∞**

