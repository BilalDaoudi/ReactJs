import { Link } from "react-router-dom";


export default function Navbar(){
    return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand">Portfolio  </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">Accueil</Link>
          </li>
        
          <li className="nav-item dropdown">
            <Link to="/informations" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            A propos
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><Link to="/informations" className="dropdown-item">Informations Personnel</Link></li>
              <li><Link to="/skills" className="dropdown-item">Compétences</Link></li>
              <li><Link to="/education" className="dropdown-item">Education</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">Projets</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>)
}