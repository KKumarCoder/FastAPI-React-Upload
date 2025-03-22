import { useState } from "react";
import { completeUpload } from "../services/api";
import { toast } from "react-toastify";

const CompleteUpload = () => {
  const [fileName, setFileName] = useState("");
  const [uploadId, setUploadId] = useState("");
  const [parts, setParts] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await completeUpload(fileName, uploadId, parts);

      // ✅ Display success toaster
      toast.success(`✅ ${data.status}`, {
        position: "top-right",
        autoClose: 3000, // 3 seconds
      });
    } catch (error) {
      // ❌ Display error toaster
      toast.error(`❌ Upload failed: ${error.message}`, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div>
      <h2 style={{marginBottom:40}}>Complete Upload</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="File Name"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Upload ID"
          value={uploadId}
          onChange={(e) => setUploadId(e.target.value)}
          required
        />
        <button type="submit">Complete Upload</button>
      </form>
    </div>
  );
};

export default CompleteUpload;
