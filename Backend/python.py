from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI

app = Flask(__name__)
CORS(app, origins="*", methods=["GET", "POST", "OPTIONS"], allow_headers=["Content-Type", "Authorization"])

client = OpenAI(api_key="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")

historial = []



@app.route("/")
def home():
    return "Hola desde Colab"

@app.route("/ia", methods=["POST", "OPTIONS"])
def ia():
    if request.method == "OPTIONS":
        # ✅ Respuesta correcta para preflight CORS
        response = jsonify({"message": "Preflight OK"})
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        return response, 200

    datos = request.json
    userQuestion = datos.get("pregunta", "")

    historial.append({'role': 'user', 'content': userQuestion})

    response = client.responses.create(
        model="gpt-5-mini",
        instructions="Eres Sofía y vas a actuar como agente de call center de una universidad...",
        input=historial
    )

    respuesta = response.output_text
    historial.append({'role': 'assistant', 'content': respuesta})
    return jsonify({"respuesta": respuesta})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
