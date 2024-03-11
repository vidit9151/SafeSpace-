import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Navbar } from "./components";
import { About_page, Contact_page, Error_page, Home_Page } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home_Page />} />
        <Route path="/about" element={<About_page />} />
        <Route path="/contact" element={<Contact_page />} />
        <Route path="/*" element={<Error_page />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
