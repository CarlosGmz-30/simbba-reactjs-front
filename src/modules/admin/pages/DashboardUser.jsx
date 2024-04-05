import { Button, Alert, TextInput, Spinner } from "flowbite-react";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import "../styles/DashboardUser.css";
import add from "../../../assets/images/add.png";
import borrar from "../../../assets/images/deleteBtn.png";
import OffCanvas from "../../../components/OffCanvas";
import { useFormik } from 'formik';
import * as yup from 'yup';
import AxiosClient from "../../../config/http-client/axios-client";
import { customAlert } from "../../../config/alerts/alert";

const DashboardUser = () => {
  const [listadoUsuarios, setListadoUsuarios] = useState([]);

  const [estado, cambiarEstado] = useState(false);
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [mostrarAlertaVacios, setMostrarAlertaVacios] = useState(false);

  // Validaciones con Formik
  const formik = useFormik({
    initialValues: {
      mail: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      mail: yup.string().required("El correo es requerido").email("El correo no es válido"),
      password: yup.string().required("La  contraseña es requerida")
    }),
    onSubmit: async (data, { setSubmitting }) => {
      try {
        const payload = {
          ...data,
          mail: data.mail,
          password: data.password,
          role: "USER"
        };
        const response = await AxiosClient({
          method: 'POST',
          url: '/user/',
          data: payload
        });
        if (!response.error) {
          mostrarAlertaGuardado()
          getAllUsers();

        }
      } catch (error) {
        customAlert("error", "Error al guardar el usuario")
        console.log("Error al guardar el usuario", error);
      } finally {
        setSubmitting(false);
      }
    }
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
    const mailInput = document.querySelector("#mailInput").value;
    const passwordInput = document.querySelector("#passwordInput").value;

    if (
      nombreInput.trim() === "" ||
      mailInput.trim() === "" ||
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

  const getAllUsers = async () => {
    try {
      const response = await AxiosClient({
        method: 'GET',
        url: '/user/'
      });

      const DATA = response.data;
      setListadoUsuarios(DATA);

      console.log(DATA);
    } catch (error) {
      console.log("Error al obtener los usuarios", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await AxiosClient({
        method: "DELETE",
        url: `/user/${id}`,
      });
      if (!response.error) {
        customAlert("success", "Usuario eliminado correctamente")
        getAllUsers();
      } else {
        customAlert("error", "Error al eliminar el usuario")
      }
    } catch (error) {
      console.log("Error al eliminar el usuario", error);

    }
  };


  useEffect(() => {
    getAllUsers();
  }, []);

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
              <form id="userForm" name="userForm" noValidate onSubmit={formik.handleSubmit}>
                <label htmlFor="">Correo Electrónico:</label>
                <TextInput
                  className="inputForm"
                  id="mailInput"
                  type="mail"
                  placeholder="Correo Electrónico"
                  name="mail"
                  value={formik.values.mail}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.errors.mail && formik.touched.mail ?
                      (<span className="text-red-500">{formik.errors.mail}</span>) : null
                  }
                />
                <label htmlFor="" style={{ marginTop: 30 }}>Contraseña:</label>
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
                  <Button
                    className="btnGuardar"
                    type="submit"
                    disabled={formik.isSubmitting || !formik.isValid}
                  >
                    {
                      formik.isSubmitting ? (<Spinner />) : ("Guardar")
                    }
                  </Button>
                </ContenedorBoton>
              </form>
            </ContenedorFormulario>
          </OffCanvas>
        </div>

        {/* Contenedor de la tabla */}
        <div id="tableContainer">
          <table id="table">
            <thead>
              <tr>
                <th id="greenColumn">Correo Electrónico</th>
                <th id="blueColumn">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {listadoUsuarios && listadoUsuarios.map((usuario, index) => (
                <tr key={usuario.id}>
                  <td>{usuario.mail}</td>
                  <td>
                    <button id="deleteBtn" onClick={() => deleteUser(usuario.id)}>
                      <img src={borrar} alt="deleteIcon" />
                    </button>
                  </td>
                </tr>
              ))}
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
    margin-bottom: 20px;
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 35px;

  button {
    width: 45%;
    height: 40px;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    transition: 0.3s ease all;
  }
`;
