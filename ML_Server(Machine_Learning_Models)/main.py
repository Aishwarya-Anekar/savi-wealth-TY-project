from fastapi import FastAPI
import joblib
import pandas as pd
from pydantic import BaseModel

app = FastAPI()

# Load full pipeline (preprocessing + model)
model = joblib.load("panic_prediction_model.pkl")

# Define input schema
class PredictionInput(BaseModel):
    age: float
    income: float
    portfolio_value: float
    emotional_score: float
    risk_score: float
    financial_score: float
    horizon: float
    past_loss_percent: float
    panic_history: int

@app.post("/predict")
def predict(data: PredictionInput):

    # Convert input to DataFrame (IMPORTANT)
    input_df = pd.DataFrame([data.dict()])

    # Predict probability
    probability = model.predict_proba(input_df)[0][1]

    return {
        "panic_probability": float(probability),
        "model_version": "v1.0_rf"
    }