import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import About from "./Screens/About";
import NotFound from "./Screens/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element= {<HomeScreen></HomeScreen>}></Route> 
      <Route path="/about" element = {<About></About>}></Route> 
      <Route path="*" element = {<NotFound></NotFound>}></Route> 
    </Routes>
  );
}

export default App;
