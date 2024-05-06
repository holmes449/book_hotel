import React from "react"; // thư viện React
import ReactDOM from "react-dom/client"; // Thư viện React dom
import App from "./App"; // import component
import { BrowserRouter } from "react-router-dom"; // Thư viện React router dom

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Bắt nghiêm ngặt tìm ẩn
  <React.StrictMode>
    {/* Trả về App trong Browser Router*/}
    <BrowserRouter>
      {/* App */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
