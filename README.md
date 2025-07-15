
# Macro Trading App - One Click Ready

## ✅ Cosa contiene

- /backend → FastAPI pronto per Render
- /frontend → React con login, pronto per Vercel
- README con spiegazioni

## ⚡ Come fare deploy

### Backend (Render)

- Seleziona la repo su Render
- Root Directory: backend
- Build Command: pip install -r requirements.txt
- Start Command: uvicorn main:app --host 0.0.0.0 --port 10000

### Frontend (Vercel)

- Seleziona la repo su Vercel
- Root Directory: frontend
- Modifica URL in App.jsx:
  fetch("https://TUO_BACKEND_URL.onrender.com/scores")
- Build Command: npm run build (default)
- Output: build

## ✅ Password

- Password di default: miaPassword123

