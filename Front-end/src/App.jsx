import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/header/Header";
import Footer from "./component/Footer/Footer";
import Home from "./component/landingPAGE/Home";

import Prediction from "./pages/Prediction/Prediction";
import Analytics from "./pages/Analytics/Analytics";
import Model from "./pages/Model/Model";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/prediction"
          element={<Prediction />}
        />

        <Route
          path="/analytics"
          element={<Analytics />}
        />

        <Route
          path="/model"
          element={<Model />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
