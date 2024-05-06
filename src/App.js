import { Routes, Route } from "react-router-dom"; // import thư viện react-router-dom

import "./css/reset.css"; // Css
import "./css/style.css"; // Css

import Home from "./pages/home/Home"; // import Component
import Detail from "./pages/detail/Detail"; // import Component
import Search from "./pages/search/Search"; // import Component

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
}

export default App;
