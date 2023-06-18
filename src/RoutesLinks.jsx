import Doctors from "./pages/Doctors/Doctors";
import Home from "./pages/Home/Home";
import Medicine from "./pages/Profile/Medicine";
import Negotiations from "./pages/Profile/Negotiations";
import Opinions from "./pages/Profile/Opinions";
import ProfilePage from "./pages/Profile/ProfilePage";


const routesLinks = [
    {path: "/", name: "Главная", element: <Home/>, isPrivate: false, isShown: false},
    {path: "/profile", name: "Жеке баракча", element: <ProfilePage/>, isPrivate: true, isShown: false},
    {path: "/doctors", name: "Дарыгерлер", element: <Doctors/>, isPrivate: true, isShown: true},
    {path: "/negotiations", name: "Сүйлөшүүлөр", element: <Negotiations/>, isPrivate: true, isShown: false},
    {path: "/medicine", name: "Дарылар", element: <Medicine/>, isPrivate: true, isShown: false},
    {path: "/opinions", name: "Пикирлер", element: <Opinions/>, isPrivate: true, isShown: false}
]

export default routesLinks;