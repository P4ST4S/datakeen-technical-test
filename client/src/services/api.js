import axios from "axios";

const API_ENDPOINT = "http://localhost:5000/";

export const sendText = async (text) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}process-text`, { text });
    return response.data;
  } catch (error) {
    console.error("Error during API call: ", error);
  }
};
