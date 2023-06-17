import Doctors from "./pages/Doctors/Doctors";
import Home from "./pages/Home/Home";


const routesLinks = [
    {path: "/", name: "Главная", element: <Home/>, isPrivate: false, isShown: false},
    {path: "/profile", name: "Жеке баракча", element: <Home/>, isPrivate: true, isShown: false},
    {path: "/doctors", name: "Дарыгерлер", element: <Doctors/>, isPrivate: true, isShown: true}
]

export default routesLinks;