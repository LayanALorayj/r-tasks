import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar w-100">
      <div className="d-flex justify-content-between align-items-center w-100 px-4">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/ar/thumb/6/69/%D8%B4%D8%B9%D8%A7%D8%B1_%D8%AC%D8%A7%D9%85%D8%B9%D8%A9_%D8%A7%D9%84%D9%85%D9%84%D9%83_%D8%B3%D8%B9%D9%88%D8%AF.svg/1200px-%D8%B4%D8%B9%D8%A7%D8%B1_%D8%AC%D8%A7%D9%85%D8%B9%D8%A9_%D8%A7%D9%84%D9%85%D9%84%D9%83_%D8%B3%D8%B9%D9%88%D8%AF.svg.png"
            alt="KSU Logo"
            height="40"
            className="me-2"
          />
          <span className="fw-bold">King Saud University</span>
        </Link>

        <ul className="navbar-nav flex-row">
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
