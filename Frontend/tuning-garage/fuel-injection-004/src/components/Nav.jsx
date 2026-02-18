import { NavLink } from "react-router-dom";
const Nav = () => (
  <nav className="nav d-flex align-items-center justify-content-center">
    <NavLink
      to="/"
      end
      className="nav-link"
      style={({ isActive }) => ({
        color: isActive ? "blue" : "gray",
      })}
    >
      Home
    </NavLink>
    <NavLink to="/about" className="nav-link"  style={({ isActive }) => ({
        color: isActive ? "blue" : "gray",
      })}>
      About
    </NavLink>
    <NavLink to="/service" className="nav-link"  style={({ isActive }) => ({
        color: isActive ? "blue" : "gray",
      })}>
      Service
    </NavLink>
    <NavLink to="/blog" className="nav-link"  style={({ isActive }) => ({
        color: isActive ? "blue" : "gray",
      })}>
      Blog
    </NavLink>
  </nav>
);

export default Nav;
