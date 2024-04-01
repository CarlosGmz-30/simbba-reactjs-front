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
          className="sidebar bg-blue-600 h-screen FFFFFF"
          theme={{
            "root": {
              "base": "h-full",
              "collapsed": {
                "on": "w-16",
                "off": "w-64"
              },
              "inner": "h-full overflow-y-auto overflow-x-hidden rounded side-bar px-3 py-4 dark:bg-gray-800"
            },
            "collapse": {
              "button": "group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
              "icon": {
                "base": "h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
                "open": {
                  "off": "",
                  "on": "text-gray-900"
                }
              },
              "label": {
                "base": "ml-3 flex-1 whitespace-nowrap text-left",
                "icon": {
                  "base": "h-6 w-6 transition delay-0 ease-in-out",
                  "open": {
                    "on": "rotate-180",
                    "off": ""
                  }
                }
              },
              "list": "space-y-2 py-2"
            },
            "cta": {
              "base": "mt-6 rounded-lg bg-gray-100 p-4 dark:bg-gray-700",
              "color": {
                "blue": "bg-cyan-50 dark:bg-cyan-900",
                "dark": "bg-dark-50 dark:bg-dark-900",
                "failure": "bg-red-50 dark:bg-red-900",
                "gray": "bg-alternative-50 dark:bg-alternative-900",
                "green": "bg-green-50 dark:bg-green-900",
                "light": "bg-light-50 dark:bg-light-900",
                "red": "bg-red-50 dark:bg-red-900",
                "purple": "bg-purple-50 dark:bg-purple-900",
                "success": "bg-green-50 dark:bg-green-900",
                "yellow": "bg-yellow-50 dark:bg-yellow-900",
                "warning": "bg-yellow-50 dark:bg-yellow-900"
              }
            },
            "item": {
              "base": "flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
              "active": "bg-gray-100 dark:bg-gray-700",
              "collapsed": {
                "insideCollapse": "group w-full pl-8 transition duration-75",
                "noIcon": "font-bold"
              },
              "content": {
                "base": "flex-1 whitespace-nowrap px-3"
              },
              "icon": {
                "base": "h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
                "active": "text-gray-700 dark:text-gray-100"
              },
              "label": "",
              "listItem": ""
            },
            "items": {
              "base": ""
            },
            "itemGroup": {
              "base": "mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700"
            },
            "logo": {
              "base": "mb-5 flex items-center pl-2.5",
              "collapsed": {
                "on": "hidden",
                "off": "self-center whitespace-nowrap text-xl font-semibold dark:text-white"
              },
              "img": "mr-3 h-6 sm:h-7"
            }
          }}
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
                  style={{ color: "white" }}
                />
              </div>
              <div>
                <Label
                  className="info"
                  htmlFor="email1"
                  value="admin@utez.edu.mx"
                  style={{ color: "white" }}
                />
              </div>
            </div>
          </div>
          <Sidebar.Items className="side-bar FFFFFFF">
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
        <section className="bg-white" style={{ width: "100%", margin: '0%' }}>
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default AdminLayout;
