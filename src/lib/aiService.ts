// Servicio de IA - Conectado al backend real
const API_ENDPOINT = 'https://slow-views-sleep.loca.lt/ia';

/**
 * Función principal para obtener respuestas de la IA
 * Envía la pregunta del usuario al backend y retorna la respuesta
 */
export const getAIResponse = async (userMessage: string): Promise<string> => {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ pregunta: userMessage }),
    });

    if (!response.ok) {
      throw new Error(`Error del servidor: ${response.status}`);
    }

    const data = await response.json();
    return data.respuesta || data.response || 'No se recibió una respuesta válida';
  } catch (error) {
    console.error('Error al obtener respuesta de la IA:', error);
    throw new Error('No se pudo conectar con el servicio de IA. Por favor, intenta de nuevo.');
  }
};
