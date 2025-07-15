
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/scores")
async def get_scores():
    return [
        {"asset": "EUR/USD", "score": 62},
        {"asset": "XAU/USD", "score": 48},
        {"asset": "S&P500", "score": 55},
        {"asset": "NASDAQ", "score": 50},
    ]
