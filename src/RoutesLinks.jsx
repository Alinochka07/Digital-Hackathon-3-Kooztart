import AboutUs from "./pages/AboutUs/AboutUs";
import Ambulance from "./pages/Ambulance/Ambulance";
import Doctors from "./pages/Doctors/Doctors";
import Home from "./pages/Home/Home"
import Pharmacy from "./pages/Pharmacy/Pharmacy";


const routesLinks = [
    {path: "/", name: "Главная", element: <Home/>, isPrivate: false, isShown: false},
    {path: "/profile", name: "Жеке баракча", element: <Home/>, isPrivate: true, isShown: false},
    {path: "/doctors", name: "Дарыгерлер", element: <Doctors/>, isPrivate: true, isShown: true},
    {path: "/ambulance", name: "Тез жардам", element: <Ambulance/>, isPrivate: true, isShown: true},
    {path: "/pharmacy", name: "Дарыкана", element: <Pharmacy/>, isPrivate: true, isShown: true},
    {path: "/about-us", name: "Биз жөнундө", element: <AboutUs/>, isPrivate: false, isShown: true},
]

export default routesLinks;