// Servicio de IA - Actualmente con respuestas hardcodeadas
// TODO: Reemplazar con peticiones HTTP a un servidor backend real

const hardcodedResponses = [
  "¡Hola! Soy tu asistente de IA. ¿En qué puedo ayudarte hoy?",
  "Esa es una pregunta interesante. Déjame pensar en ello...",
  "Entiendo lo que me preguntas. Aquí está mi respuesta basada en mi conocimiento.",
  "Excelente pregunta. Para responderte mejor, necesitaría más contexto sobre tu situación específica.",
  "Claro, puedo ayudarte con eso. La respuesta es bastante compleja, pero intentaré explicarla de manera sencilla.",
  "Eso depende de varios factores. Consideremos las diferentes perspectivas...",
  "¡Por supuesto! Esta es una de mis áreas de especialidad. Te explico:",
  "Interesante pregunta. Hay varios enfoques que podríamos considerar para esto.",
];

/**
 * Función principal para obtener respuestas de la IA
 * En el futuro, esta función hará una petición HTTP a tu backend
 * Ejemplo de cómo reemplazarlo:
 * 
 * export const getAIResponse = async (userMessage: string): Promise<string> => {
 *   const response = await fetch('https://tu-api.com/chat', {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify({ message: userMessage })
 *   });
 *   const data = await response.json();
 *   return data.response;
 * }
 */
export const getAIResponse = async (userMessage: string): Promise<string> => {
  // Simular delay de red (1-2 segundos)
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
  
  // Seleccionar una respuesta aleatoria
  const randomIndex = Math.floor(Math.random() * hardcodedResponses.length);
  return hardcodedResponses[randomIndex];
};
