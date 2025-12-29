import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <ul id="nav-links">
          <li><Link to="/mathArticles">Math</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

