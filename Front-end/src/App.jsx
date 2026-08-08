import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/header/Header";
import Footer from "./component/Footer/Footer";
import Home from "./component/landingPAGE/Home";

import Prediction from "./Pages/Home/Prediction/Prediction";
import Analytics from "./Pages/Home/Analytics/Analytics";
import Model from "./Pages/Home/Model/Model";
// import About from "./Pages/About/About";
// import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/prediction" element={<Prediction />} />

        <Route path="/analytics" element={<Analytics />} />

        <Route path="/model" element={<Model />} />

        {/* <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} /> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
