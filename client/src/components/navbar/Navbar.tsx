import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import LBlogo from "../navbar/LBlogo.png";
import { Nav, Container } from "react-bootstrap";

interface Props {}

const Navbar: React.FC = (props: Props) => {
  return (
    <nav className="navbar navbar-light bg-light navbar-expand-lg">
      <img
        src={LBlogo}
        width={75}
        height={50}
        className="fluid"
        alt="LB logo"
      />
      <Container>
      
        <Nav className="me-auto">
          <div className="collpase navbar-collapse">
            <li className="navbar-item">
            <Link to="/" className="navbar-link">
            Home
          </Link>
            </li>
            <li className="navbar-item">
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user/profile" className="nav-link">
                My Profile
              </Link>
            </li>
          </div>
        </Nav>
      </Container>
    </nav>
  );
};

export default Navbar;
