<<<<<<< HEAD
import './styles/style.scss';
import "./styles/style.scss";
import { Route, Routes } from "react-router-dom";
import routesLinks from "./RoutesLinks";

function App() {
  return (
    <div className='App'>
      <Routes>
        {routesLinks.map(route => {
          return <Route path={route.path} element={route.element}/>
        })}
      </Routes>
    </div>
  );
}

export default App;
