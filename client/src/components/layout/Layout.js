import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
const Layout = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    const user = JSON.parse(window.sessionStorage.getItem("user"));
    setUser(user);
  }, []);
  console.log(user);
  const handleOnLogOut = () => {
    window.sessionStorage.removeItem("user");
    // navigate("/");
  };
  return (
    <div>
      {/* //header section */}
      <Navbar bg="primary" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ET</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <div className="nav-link">{user?.name}</div>
              {!user?._id ? (
                <>
                  <Link to="/register" className="nav-link">
                    Signup
                  </Link>
                  <Link to="/" className="nav-link">
                    Login
                  </Link>
                </>
              ) : (
                <Link to="/" className="nav-link" onClick={handleOnLogOut}>
                  Logout
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* dynamically updated page content section */}

      <main className="container wrapper">{children}</main>

      {/* footer section */}
      <footer className="bg-dark text-light text-center py-5">
        All right reserved &copy; | Made by me with 😭
      </footer>
    </div>
  );
};
export default Layout;
