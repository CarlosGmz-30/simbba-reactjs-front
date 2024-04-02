import React, { useState } from 'react'
import OffCanvas from '../../../components/OffCanvas';
import { Button, Progress, TextInput } from 'flowbite-react';
import '../styles/TrashCard.css'
import trash from '../../../assets/images/trash.png'
import edit from '../../../assets/images/editar.png'
import eliminar from '../../../assets/images/eliminar.png'
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { deleteTrash } from '../../../config/alerts/alert';
import { useFormik } from 'formik';
import * as yup from 'yup';

export default function TrashCard({ name, level, serialNumber, onSelect }) {

    // Esto es para el boton de actualizar
    const [isUpdate, setIsUpdate] = useState(false);

    // Esto es para el boton de actualizar
    const handleUpdateClick = () => {
        setIsUpdate(true);
    }

    // Validaciones con Formik
    const formik = useFormik({
        initialValues: {
            name: "",
            id: "",
        },
        validationSchema: yup.object().shape({
            name: yup.string().required("El nombre es requerido"),
            id: yup.string().required("La matrícula es requerida"),
        }),
    });


    const handleClick = (event) => {
        event.preventDefault();
        onSelect(serialNumber);
    }



    let capacity = '';
    if (level == 0) {
        capacity = 'VACIO'
    } else if (level > 0 && level <= 25) {
        capacity = 'CASI VACIO'

    }
    const location = useLocation();
    //console.log(location.pathname)

    return (
        <Link to={`/historical/${serialNumber}`} onClick={handleClick}>
            <>
                <div className='generalContainer'>
                    <div id='containerButtons'>
                        {/* Boton de editar */}
                        <button onClick={handleUpdateClick}>
                            <img className='trashBtn' src={edit} alt="" />
                        </button>
                        {/* Boton de eliminar */}
                        <button onClick={deleteTrash}>
                            <img className='trashBtn' src={eliminar} alt="" />
                        </button>
                    </div>
                    <div id='cardContainer'>
                        <img src={trash} alt="" />
                        <h1>{name}</h1>
                        <Progress
                            style={{ width: '100%', padding: '10px' }}
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
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                helperText={
                                    formik.errors.name && formik.touched.name ?
                                        (<span className="text-red-500">{formik.errors.name}</span>) : null
                                }
                            />
                            <label htmlFor=""
                                style={{ marginTop: "35px" }}
                            >
                                ID del Bote:
                            </label>
                            <TextInput
                                className="inputForm"
                                id="matriculaInput"
                                type="text"
                                placeholder="ID del Bote"
                                name="id"
                                value={formik.values.id}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                helperText={
                                    formik.errors.id && formik.touched.id ?
                                        (<span className="text-red-500">{formik.errors.id}</span>) : null
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
                                    type="submit"
                                    disabled={!formik.isValid || formik.isSubmitting}
                                >
                                    {
                                        formik.isSubmitting ? (<Spinner />) : (<>
                                            Guardar
                                        </>)
                                    }
                                </Button>
                            </ContenedorBoton>
                        </form>
                    </ContenedorFormulario>
                </OffCanvas>
            </>
        </Link>
    )
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