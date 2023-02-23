import About from "../pages/About/router";
import Blog from "../pages/Blog/router";
import Contact from "../pages/Contact/router";
import Home from "../pages/Home/router";
import Services from "../pages/Services/router";

const router = [...About, ...Blog, ...Contact, ...Home, ...Services];

export default router;
