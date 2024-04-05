import React, { useState, useEffect } from "react";
import OffCanvas from "../../../components/OffCanvas";
import { Button, Progress, TextInput } from "flowbite-react";
import "../styles/TrashCard.css";
import trash from "../../../assets/images/trash.png";
import edit from "../../../assets/images/editar.png";
import eliminar from "../../../assets/images/eliminar.png";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { deleteTrash } from "../../../config/alerts/alert";
import { useFormik } from "formik";
import * as yup from "yup";
import AxiosClient from "../../../config/http-client/axios-client";
import { Spinner } from "flowbite-react";
export default function TrashCard({ name, level, serialNumber, onSelect, updateTrashcans }) {

  // Esto es para el boton de actualizar
  const [isUpdate, setIsUpdate] = useState(false);

  // Esto es para el boton de eliminar
  const [isDelete, setIsDelete] = useState(false);
  const [trashcanUpdated, setTrashcanUpdated] = useState(false);

  // Esto es para el boton de actualizar
  const handleUpdateClick = () => {
    setIsUpdate(true);
  };

  const handleUpdateSubmit = (values, { setSubmitting }) => {
    AxiosClient.put(`/v1/trashcan/update/`, values)
      .then(() => {
        console.log("Trashcan updated");
        updateTrashcans();
        setIsUpdate(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  // Esto es para el boton de eliminar
  // endpoint /v1/trashcan/delete/:serialNumber
  const handleDeleteClick = () => {
    isDelete ? setIsDelete(false) : setIsDelete(true);
    deleteTrash(() => {
      AxiosClient.delete(`/v1/trashcan/delete/${serialNumber}`)
        .then(() => {
          console.log("Bote eliminado");
          updateTrashcans();
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  // Validaciones con Formik
  const formik = useFormik({
    initialValues: {
      trashcanName: "",
      serialNumber: "",
    },
    validationSchema: yup.object().shape({
      trashcanName: yup.string().required("El nombre es requerido"),
      serialNumber: yup.string().required("La matrícula es requerida"),
    }),
    onSubmit: handleUpdateSubmit,
  });

  const handleClick = (event) => {
    event.preventDefault();
    onSelect(serialNumber);
  };

  let capacity = "";
  if (level == 0) {
    capacity = "VACIO";
  } else if (level > 0 && level <= 25) {
    capacity = "CASI VACIO";
  }
  const location = useLocation();
  //console.log(location.pathname)
  return (
    <Link to={`/historical/${serialNumber}`} onClick={handleClick}>
      <>
        <div className="generalContainer">
          <div id="containerButtons">
            {/* Boton de editar */}
            <button onClick={handleUpdateClick}>
              <img className="trashBtn" src={edit} alt="" />
            </button>
            {/* Boton de eliminar */}
            <button onClick={handleDeleteClick}>
              <img className="trashBtn" src={eliminar} alt="" />
            </button>
          </div>
          <div id="cardContainer">
            <img src={trash} alt="" />
            <h1>{name}</h1>
            <Progress
              style={{ width: "100%", padding: "10px" }}
              progress={level}
            />
            <h2>{capacity}</h2>
            <h1>{level}%</h1>
          </div>
        </div>
        <OffCanvas estado={isUpdate}>
          <ContenedorFormulario>
            <h1>Actualizar Bote</h1>
            <form>
              <label htmlFor="">Nombre:</label>
              <TextInput
                className="inputForm"
                id="nombreInput"
                type="text"
                placeholder="Nombre"
                name="trashcanName"
                value={formik.values.trashcanName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={
                  formik.errors.name && formik.touched.trashcanName ? (
                    <span className="text-red-500">
                      {formik.errors.trashcanName}
                    </span>
                  ) : null
                }
              />
              <label htmlFor="" style={{ marginTop: "35px" }}>
                ID del Bote:
              </label>
              <TextInput
                className="inputForm"
                id="matriculaInput"
                type="text"
                placeholder="ID del Bote"
                name="serialNumber"
                value={formik.values.serialNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={
                  formik.errors.serialNumber && formik.touched.serialNumber ? (
                    <span className="text-red-500">
                      {formik.errors.serialNumber}
                    </span>
                  ) : null
                }
              />
              <ContenedorBoton>
                <button
                  className="btnCancelar"
                  onClick={() => {
                    setIsUpdate(false);
                    formik.resetForm();
                  }}
                >
                  Cancelar
                </button>
                <Button
                  className="btnGuardar"
                  //type="submit"
                  onClick={formik.handleSubmit}
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  {formik.isSubmitting ? <Spinner /> : <>Guardar</>}
                </Button>
              </ContenedorBoton>
            </form>
          </ContenedorFormulario>
        </OffCanvas>
      </>
    </Link>
  );
}

const ContenedorFormulario = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
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
