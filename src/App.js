import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

function App() {
  return (
      <Routes>
        <Route exact path={"/"} element={<Home/>}/>
        <Route exact path={"/register"} element={<Register/>}/>
        <Route exact path={"/login"} element={<Login/>}/>
      </Routes>
  );
}

export default App;
