import {HashRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import About from "./components/About";

function App() {
  return (
    <>
      <HashRouter>        
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
