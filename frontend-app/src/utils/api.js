import axios from 'axios';

const API_BASE_URL = 'https://early-rules-sit.loca.lt/api';

/**
 * Shorten a URL using the Laravel backend.
 * 
 * @param {string} url - The long URL to shorten.
 * @returns {Promise<object>} - The API response data.
 */
export const shortenUrl = async (url) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/shorten`, {
      url: url,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      throw new Error(error.response.data.message || 'Failed to shorten URL');
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error('No response from server. Make sure the backend is running.');
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new Error('An unexpected error occurred.');
    }
  }
};
