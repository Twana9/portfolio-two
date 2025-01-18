import reactLogo from "./assets/react.svg";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Stage3 from "./Pages/Stage3";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stage3" element={<Stage3 />} />
      </Routes>
    </>
  );
}

export default App;
