import axios from "axios";

// Servicio de IA - Conectado al backend real
const API_ENDPOINT = "https://fe903a7a93a6.ngrok-free.app/ia";

/**
 * Función principal para obtener respuestas de la IA
 * Envía la pregunta del usuario al backend y retorna la respuesta
 */
export const getAIResponse = async (userMessage: string): Promise<string> => {
	try {
		const response = await axios.post(
			API_ENDPOINT,
			{
				pregunta: userMessage,
			},
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		// Axios automáticamente parsea JSON, pero manejaremos string también
		if (typeof response.data === "string") {
			return response.data || "No se recibió una respuesta válida";
		}

		// Si es un objeto JSON
		return (
			response.data.respuesta ??
			response.data.response ??
			response.data.message ??
			JSON.stringify(response.data)
		);
	} catch (error) {
		console.error("Error al obtener respuesta de la IA:", error);
		throw new Error("No se pudo conectar con el servicio de IA. Por favor, intenta de nuevo.");
	}
};
