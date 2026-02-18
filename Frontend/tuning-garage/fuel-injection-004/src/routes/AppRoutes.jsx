import { Routes, Route } from "react-router-dom";
import Home from "../components/Home.jsx";
import About from "../components/About.jsx";
import Service from "../components/Service.jsx";
import Blog from "../components/Blog.jsx";
import CategoryDescription from "../components/categoryDescription.jsx";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/about/:idx" element={<CategoryDescription />} />

    <Route path="/service" element={<Service />} />
    <Route path="/blog" element={<Blog />} />
  </Routes>
);

export default AppRoutes;
