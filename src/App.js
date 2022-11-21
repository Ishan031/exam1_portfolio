import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Listing from "./Components/Listing";
import Blog from "./Components/Blog";
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about.html" element={<About />} />
        <Route path="/contact.html" element={<Contact />} />
        <Route path="/listing.html" element={<Listing />} />
        <Route path="/blog.html" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
