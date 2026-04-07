import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>My VercApp</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/Education">Education</Link></li>
        <li><Link to="/Skills">Skills</Link></li>
        <li><Link to="/Weather">Weather</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;