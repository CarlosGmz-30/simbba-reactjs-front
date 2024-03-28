import "../assets/styles/DashboardBoats.css";
import Map from '../components/Map';
import AddTrash from '../components/AddTrash';
import TrashCard from '../components/TrashCard';
import AxiosClient from '../config/http-client/axios-client';
import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

// Importaciones para el OffCanvas
import styled from "styled-components";
import OffCanvas from "../components/OffCanvas";
import { Button, Alert, TextInput, Spinner } from "flowbite-react";


const DashboardBoats = () => {
    const [trashcans, setTrashcans] = useState([]);
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
            formik.resetForm();
            setTimeout(() => {
                setMostrarAlerta(false);
                cambiarEstado(false);
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

    const getAllTrashcans = async () => {
        try {
            const response = await AxiosClient({
                url: "/v1/trashcan/",
                method: "GET"
            });
            //console.log(response);

            const DATA = response.data;
            setTrashcans(DATA);

            console.log(DATA);

            // DATA.forEach(trashcan => { 
            //     console.log(`ID: ${trashcan.id}`);
            //     console.log(`Serial Number: ${trashcan.serialNumber}`);
            //     console.log(`Trashcan Name: ${trashcan.trashcanName}`);
            //     console.log(`Level: ${trashcan.level}`);
            // });


        } catch (error) {
            console.log('Error: ', error);
        }
    }

    useEffect(() => {
        getAllTrashcans();
    }, []);

    //getAllTrashcans();

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
            <div id="generalContainerB">
                <div id="HeaderB">
                    <h1 id="headerTitleB">Ubicación de los botes de basura</h1>
                </div>
                <section id="sectionGeneralB">
                    <div id="mapContainerB">
                        <Map />
                    </div>
                    <div id="cardsContainerB">
                        <h1 className="titleB">Botes de Basura Disponibles</h1>
                        <div style={{ display: 'flex', flexDirection: 'row', height: '240px' }}>
                            <AddTrash abrirFormulario={() => cambiarEstado(true)} />
                            {trashcans && trashcans.map((trashcan, index) => (
                                <TrashCard
                                    key={index}
                                    name={trashcan.trashcanName}
                                    level={trashcan.level}
                                />
                            ))}
                        </div>
                    </div>
                </section>
                <OffCanvas estado={estado} cambiarEstado={cambiarEstado}>
                    <ContenedorFormulario>
                        <h1>Registrar Bote</h1>
                        <form>
                            <label htmlFor="">Nombre:</label>
                            <TextInput
                                className="inputForm"
                                id="nombreInput"
                                type="text"
                                placeholder="Nombre"
                                name="name"
                            />
                            <label htmlFor="">ID del Bote:</label>
                            <TextInput
                                className="inputForm"
                                id="nombreInput"
                                type="text"
                                placeholder="ID del Bote"
                                name="name"
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
                            <Button
                                className="btnGuardar"
                                onClick={mostrarAlertaGuardado}
                                type="submit"
                            >
                                Agregar
                            </Button>
                        </ContenedorBoton>
                    </ContenedorFormulario>
                </OffCanvas>
            </div>
        </>
    )
}

export default DashboardBoats

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