import api from './api';

/**
 * Sends a news query for AI verification.
 * @param {string} query 
 * @param {number} threshold 
 * @param {number} maxDepth 
 * @param {number} topK 
 */
export const verifyNews = async (query, threshold = 0.45, maxDepth = 2, topK = 5) => {
  const response = await api.post('/api/predict', {
    query,
    similarity_threshold: threshold,
    max_depth: maxDepth,
    top_k: topK,
  });
  return response.data;
};

/**
 * Fetches the health status of the API server.
 */
export const checkHealth = async () => {
  const response = await api.get('/api/health');
  return response.data;
};

/**
 * Fetches system debugging and performance parameters.
 */
export const fetchInfo = async () => {
  const response = await api.get('/api/info');
  return response.data;
};
