import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Navbar } from "./components";
import { About_page, Contact_page, Error_page, Home_Page } from "./pages";
import { useRecoilValue } from "recoil";
import { hamburgerOpenAtom } from "./atoms/atoms";
import MobTabNav from "./components/Navbar/MobTabNav";

const App = () => {
  const ham = useRecoilValue(hamburgerOpenAtom);
  return (
    <BrowserRouter>
      <Navbar />

      {ham && <MobTabNav />}
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
