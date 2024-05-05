import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import IntroPage from "./components/AuthPages/IntroPage/IntroPage";
import Register from "./components/AuthPages/RegisterPage/Register";
import Login from "./components/AuthPages/LoginPage/Login";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./components/Home/NavBar/Navbar";
import Footer from "./components/Home/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/pages/About/About";
import Shop from "./components/pages/Shop/Shop";
import Contact from "./components/pages/Contact/Contact";
import Cart from "./components/pages/Cart/Cart";
import Dashbar from "./components/pages/Dashbar/Dashbar";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      mirror: false,
      once: true,
    });
  }, []);

  return (
    <div>
      <SignedOut>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IntroPage />}></Route>
            <Route path="/sign-up" element={<Register />}></Route>
            <Route path="/sign-in" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </SignedOut>

      <SignedIn>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/dashbar" element={<Dashbar />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </SignedIn>
    </div>
  );
}

export default App;
