import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Stage3 from "./Pages/Stage3";
import Footer from "./Components/Footer";
import Certification from "./Pages/Certification";

import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Stage3 />} />
        {/* <Route path="/certifications" element={<Certification />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
