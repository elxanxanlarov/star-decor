import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Catalog from "./Pages/Catalog";
import Order from "./Pages/Order";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
