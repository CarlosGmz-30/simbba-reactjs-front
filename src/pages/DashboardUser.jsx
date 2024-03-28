import { Button, Alert, TextInput, Spinner } from "flowbite-react";
import styled from "styled-components";
import React, { useState } from "react";
import "../assets/styles/DashboardUser.css";
import add from "../assets/images/add.png";
import borrar from "../assets/images/deleteBtn.png";
import OffCanvas from "../components/OffCanvas";
import { useFormik } from 'formik';
import * as yup from 'yup';

const DashboardUser = () => {
  const [estado, cambiarEstado] = useState(false);
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [mostrarAlertaVacios, setMostrarAlertaVacios] = useState(false);

  // Validaciones con Formik
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      name: yup.string().required("El nombre es requerido"),
      email: yup.string().required("El correo es requerido").email("El correo no es válido"),
      password: yup.string().required("La  contraseña es requerida")
    }),
  });


  // Funcion para mostrar alerta de guardado
  const mostrarAlertaGuardado = () => {
    if (camposValidos()) {
      setMostrarAlerta(true);
      cambiarEstado(!estado);
      formik.resetForm();
      setTimeout(() => {
        setMostrarAlerta(false);
      }, 3000);
    } else {
      setMostrarAlertaVacios(true);
      setTimeout(() => {
        setMostrarAlertaVacios(false);
      }, 3000);
    }
  };

  // Funcion para validar campos vacios
  const camposValidos = () => {
    const nombreInput = document.querySelector("#nombreInput").value;
    const emailInput = document.querySelector("#emailInput").value;
    const passwordInput = document.querySelector("#passwordInput").value;

    if (
      nombreInput.trim() === "" ||
      emailInput.trim() === "" ||
      passwordInput.trim() === ""
    ) {
      setMostrarAlertaVacios(true);

      setTimeout(() => {
        setMostrarAlertaVacios(false);
      }, 3000);

      return false;
    }

    return true;
  };

  return (
    <>
      {/* Alert de confirmacion de insert de datos */}
      {mostrarAlerta && (
        <Alert
          color="success"
          onDismiss={() => setMostrarAlerta(false)}
          style={{
            position: "fixed",
            zIndex: 100,
            bottom: "6%",
            left: "50%",
            padding: "20px",
          }}
        >
          <span
            className="font-medium"
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              marginRight: "10px",
            }}
          >
            ¡Datos guardados correctamente!
          </span>
        </Alert>
      )}

      {/* Alert inserte datos validos */}
      {mostrarAlertaVacios && (
        <Alert
          color="danger"
          onDismiss={() => setMostrarAlertaVacios(false)}
          style={{
            position: "fixed",
            zIndex: 10000,
            top: "5%",
            left: "38%",
            padding: "20px",
            backgroundColor: "rgba(255, 210, 210)",
          }}
        >
          <span
            className="font-medium"
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              marginRight: "10px",
            }}
          >
            ¡Por favor, completa todos los campos!
          </span>
        </Alert>
      )}

      <div id="generalContainer" style={{ padding: 60 }}>
        {/* Contenedor del titulo */}
        <div className="titleContainer">
          <h1 id="userTitle">Dashboard User</h1>
          <button id="addBtn" onClick={() => cambiarEstado(!estado)}>
            <p>Agregar Usuario</p>
            <img src={add} alt="addIcon" />
          </button>

          {/* OfCanvas de registrar usuario */}
          <OffCanvas estado={estado} cambiarEstado={cambiarEstado}>
            <ContenedorFormulario>
              <h1>Registrar Usuario</h1>
              <form>
                <label htmlFor="">Nombre:</label>
                <TextInput
                  className="inputForm"
                  id="nombreInput"
                  type="text"
                  placeholder="Nombre"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.errors.name && formik.touched.name ?
                      (<span className="text-red-500">{formik.errors.name}</span>) : null
                  }
                />

                <label htmlFor="">Correo Electrónico:</label>
                <TextInput
                  className="inputForm"
                  id="emailInput"
                  type="email"
                  placeholder="Correo Electrónico"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.errors.email && formik.touched.email ?
                      (<span className="text-red-500">{formik.errors.email}</span>) : null
                  }
                />
                <label htmlFor="">Contraseña:</label>
                <TextInput
                  className="inputForm"
                  id="passwordInput"
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.errors.password && formik.touched.password ?
                      (<span className="text-red-500">{formik.errors.password}</span>) : null
                  }
                />
              </form>
              <ContenedorBoton>
                <button
                  className="btnCancelar"
                  onClick={() => {
                    cambiarEstado(!estado);
                    formik.resetForm();
                  }}
                >
                  Cancelar
                </button>
                <Button className="btnGuardar" onClick={mostrarAlertaGuardado} type="submit" disabled={formik.isSubmitting || !formik.isValid}>
                  {
                    formik.isSubmitting ? (<Spinner />) : (<>
                      Guardar
                    </>)
                  }
                </Button>
              </ContenedorBoton>
            </ContenedorFormulario>
          </OffCanvas>
        </div>

        {/* Contenedor de la tabla */}
        <div id="tableContainer">
          <table id="table">
            <thead>
              <tr>
                <th id="blueColumn">Nombre</th>
                <th id="greenColumn">Correo Electrónico</th>
                <th id="blueColumn">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Example</td>
                <td>example@utez.edu.mx</td>
                <td>
                  <button>
                    <img id="deleteBtn" src={borrar} alt="" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>Example</td>
                <td>example@utez.edu.mx</td>
                <td>
                  <button>
                    <img id="deleteBtn" src={borrar} alt="" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>Example</td>
                <td>example@utez.edu.mx</td>
                <td>
                  <button>
                    <img id="deleteBtn" src={borrar} alt="" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>Example</td>
                <td>example@utez.edu.mx</td>
                <td>
                  <button>
                    <img id="deleteBtn" src={borrar} alt="" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>Example</td>
                <td>example@utez.edu.mx</td>
                <td>
                  <button>
                    <img id="deleteBtn" src={borrar} alt="" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>Example</td>
                <td>example@utez.edu.mx</td>
                <td>
                  <button>
                    <img id="deleteBtn" src={borrar} alt="" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DashboardUser;

const ContenedorFormulario = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 30px;
    font-weight: bold;
  }

  form {
    width: 60%;
    display: flex;
    flex-direction: column;

    label {
      font-size: 15px;
      font-weight: bold;
      margin-bottom: 5px;
      margin-top: 20px;
    }

    input {
      border-radius: 5px;
      background-color: #f4f9ff;
    }
  }
`;

const ContenedorBoton = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin-top: 25px;

  button {
    width: 45%;
    height: 40px;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    transition: 0.3s ease all;
  }
`;
