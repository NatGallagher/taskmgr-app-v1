import {HashRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import NavBar from "./components/NavBar";
import "./App.css"

function App() {
  return (
    <>
      <HashRouter>
        <NavBar/>        
      <Routes>      
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </HashRouter>    
    </>
  );
}

export default App;
