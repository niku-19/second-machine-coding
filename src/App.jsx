import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/Landing/LandingPage";
import Archive from "./Pages/Archive/Archive";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
}

export default App;
