import { useState } from "react";
import { getUploadUrl } from "../services/api";
import { toast } from "react-toastify";

const UploadUrl = () => {
  const [fileName, setFileName] = useState("");
  const [chunkSize, setChunkSize] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await getUploadUrl(
        fileName,
        Number(chunkSize),
        Number(fileSize)
      );

      // ✅ Display success toaster
      toast.success("✅ Upload URL generated successfully!", {
        position: "top-right",
        autoClose: 3000,
      });

      setUrl(JSON.stringify(data, null, 2));
    } catch (error) {
      // ❌ Display error toaster
      toast.error("❌ Failed to generate upload URL!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div>
      <h2 style={{ marginBottom: 40 }}>Get Upload URL</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="File Name"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Chunk Size"
          value={chunkSize}
          onChange={(e) => setChunkSize(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="File Size"
          value={fileSize}
          onChange={(e) => setFileSize(e.target.value)}
          required
        />
        <button type="submit">Generate URL</button>
      </form>

      {url && (
        <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
          {url}
        </pre>
      )}
    </div>
  );
};

export default UploadUrl;
