import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import About from "./Screens/About";

function App() {
  return (
    <Routes>
      <Route path="/" element= {<HomeScreen></HomeScreen>}></Route> 
      <Route path="/about" element = {<About></About>}></Route> 
      <Route path="/about" element = {<About></About>}></Route> 
    </Routes>
  );
}

export default App;
