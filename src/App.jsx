import React,{useEffect} from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Event from "./components/Events2/Event.js";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Main/Home.js";
import Footer from "./components/Footer/Footer.js"
import ReactimageGallery from "./components/Gallery/ReactimageGallery.js"
import './fonts/Barlow-Bold.ttf'
import './fonts/Iceland-Regular.ttf'
import './index.css'
import './App.css'
const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return <>{props.children}</>;
};

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
     {/* <ScrollToTop> */}
    <Routes>
     <Route exact index path="/" element={<Home/>}/>
     <Route exact path="/events" element={<Event/>}/>
     <Route exact path="/gallery" element={ <ReactimageGallery/>}/>
    </Routes>
    <Footer/>
    {/* </ScrollToTop> */}
    </BrowserRouter>
    </>
  )
}

export default App
