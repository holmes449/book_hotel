import "./NavBar.css"; // Css
import DataNav from "../../data/navBar.json"; // Lấy dữ liệu từ Json
import { Link } from "react-router-dom"; // import Link để trang ko load lại

// Component Navbar
function NavBar() {
  return (
    <nav className="nav">
      <div className="page-wide">
        <div className="logo">
          <p>
            <Link to="/">Booking Website</Link>
          </p>
          <div className="nav-login">
            <button className="button-normal button--white">Register</button>
            <button className="button-normal button--white">Login</button>
          </div>
        </div>
        <ul className="navbar">
          {/* Return value Array */}
          {DataNav.map((nav, index) => (
            <li
              className={`navbar-item ${nav.active ? "active" : ""}`}
              key={index}
            >
              <Link to="#">
                <i className={`fa-solid ${nav.icon}`}></i> {nav.type}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

// Trả về
export default NavBar;
