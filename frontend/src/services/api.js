import axios from "axios";

const API_BASE_URL = "http://localhost:8000"; // Your backend server

// ✅ Email validation API
export const postEmail = async (email) => {
  const response = await axios.post(`${API_BASE_URL}/api`, { email });
  return response.data;
};

// ✅ Get upload URL API
export const getUploadUrl = async (fileName, chunkSize, fileSize) => {
  const response = await axios.post(`${API_BASE_URL}/upload-get-url`, {
    file_name: fileName,
    chunk_size: chunkSize,
    file_size: fileSize,
  });
  return response.data;
};

// ✅ Complete upload API
export const completeUpload = async (fileName, uploadId, parts) => {
  const response = await axios.post(`${API_BASE_URL}/upload-complete`, {
    file_name: fileName,
    upload_id: uploadId,
    parts: parts,
  });
  return response.data;
};
