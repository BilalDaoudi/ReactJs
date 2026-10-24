import {Link} from "react-router-dom";

export default function Menu(){
    return (
        <div className="navbar navbar-expand bg-dark navbar-dark">
            <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
            </ul>
        </div>
    )
}