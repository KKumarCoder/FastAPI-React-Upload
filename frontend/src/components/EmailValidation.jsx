import { useState } from "react";
import { postEmail } from "../services/api";
import { toast } from "react-toastify";

const EmailValidation = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await postEmail(email);

      // ✅ Display success toaster
      toast.success(`✅ ${data.message}`, {
        position: "top-right",
        autoClose: 3000, // 3 seconds
      });
    } catch (error) {
      // ❌ Display error toaster
      toast.error(`❌ ${error.response?.data.detail || "Validation failed"}`, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div>
      <h2 style={{marginBottom:40}}>Email Validation</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmailValidation;
