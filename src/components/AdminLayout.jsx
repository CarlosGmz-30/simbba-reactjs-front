import React, { useContext } from "react";
import { Avatar, Label, Button } from "flowbite-react";
import { Sidebar } from "flowbite-react";
import logo from "../assets/images/logoSIMBBA-white.png";
import "../assets/styles/AdminLayout.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import AuthContext from "../config/context/auth-context";
import { closeAlert } from "../config/alerts/alert"

const AdminLayout = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    closeAlert(() => {
      dispatch({ type: "SIGNOUT" });
      navigate("/");
    });
  };


  return (
    <>
      <main>
        <Sidebar
          aria-label="Sidebar with multi-level dropdown example"
          className="sidebar bg-blue-600"
        >
          <header className="logo">
            <img src={logo} alt="Logo" className="w-24 h-auto" width="100px" />
          </header>
          <div className="profile">
            <Avatar
              src="https://avatars.dicebear.com/api/avataaars/1.svg"
              label="Profile"
              rounded
              size="xl"
            />
            <div className="profile-info">
              <div>
                <Label
                  className="info"
                  htmlFor="email1"
                  value="Administrador"
                />
              </div>
              <div>
                <Label
                  className="info"
                  htmlFor="email1"
                  value="admin@utez.edu.mx"
                />
              </div>
            </div>
          </div>
          <Sidebar.Items className="side-bar">
            <Sidebar.ItemGroup>
              <li>
                <Link to={"users"} className="side-bar item">
                  Ver Usuarios
                </Link>
              </li>
              <li>
                <Link to={"boats"} className="side-bar item">
                  Ver Botes
                </Link>
              </li>
              <li>
                <Link to={"historical"} className="side-bar item">
                  Histórico
                </Link>
              </li>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
          <div
            style={{
              justifyContent: "center",
              alignContent: "center",
              display: "flex",
            }}
          >
            <Button type="submit" className="button-logout" id="btn-logout" onClick={handleLogout}>
              CERRAR SESIÓN
            </Button>
          </div>
        </Sidebar>
        <section style={{ width: "100%", margin: '0%' }}>
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default AdminLayout;
