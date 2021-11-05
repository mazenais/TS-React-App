import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    
}

const Navbar : React.FC = (props: Props) => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Home</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/register" className="nav-link">Register</Link>
          </li>
          <li className="navbar-item">
          <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user/:id" className="nav-link">My Profile</Link>
          </li>
        </ul>
        </div>
      </nav>
    )
}

export default Navbar
