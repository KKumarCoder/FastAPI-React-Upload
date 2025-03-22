import { Routes, Route, Link } from "react-router-dom";
import EmailValidation from "./components/EmailValidation";
import UploadUrl from "./components/UploadUrl";
import CompleteUpload from "./components/CompleteUpload";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const App = () => {
  return (
    <div>
      {/* ✅ Toaster Notifications */}
      <ToastContainer />

      <nav className="navbar">
        <Link to="/">Email Validation</Link>
        <Link to="/upload-url">Get Upload URL</Link>
        <Link to="/complete-upload">Complete Upload</Link>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<EmailValidation />} />
          <Route path="/upload-url" element={<UploadUrl />} />
          <Route path="/complete-upload" element={<CompleteUpload />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
