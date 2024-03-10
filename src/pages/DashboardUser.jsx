import { Button } from 'flowbite-react';
import styled from 'styled-components';
import React, { useState } from 'react'
import '../assets/styles/DashboardUser.css'
import add from '../images/add.png'
import borrar from '../images/borrar.png'
import RegisterUser from '../components/RegisterUser';

const DashboardUser = () => {
    const [estado, cambiarEstado] = useState(false);
    return (
        <>
            {/* Contenedor del titulo */}
            <div className='titleContainer'>
                <h1 id='userTitle'>
                    Dashboard User
                </h1>
                <Button id='addBtn' onClick={() => cambiarEstado(!estado)}>
                    <p>Agregar Usuario</p>
                    <img src={add} alt="addIcon" />
                </Button>

                {/* OfCanvas de registrar usuario */}
                <RegisterUser
                    estado={estado}
                    cambiarEstado={cambiarEstado}
                >
                    <Formulario>
                        <h1>Registrar Usuario</h1>
                        <form>
                            <label htmlFor="">Nombre</label>
                            <input type="text" />
                            <label htmlFor="">Correo Electrónico</label>
                            <input type="email" />
                            <label htmlFor="">Contraseña</label>
                            <input type="password" />

                        </form>
                    </Formulario>
                </RegisterUser>
            </div>


            {/* Contenedor de la tabla */}
            <div id='tableContainer'>
                <table id='table'>
                    <thead>
                        <tr>
                            <th id='blueColumn'>Nombre</th>
                            <th id='greenColumn'>Correo Electrónico</th>
                            <th id='blueColumn'>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Example</td>
                            <td>example@utez.edu.mx</td>
                            <td>
                                <button>
                                    <img id='deleteBtn' src={borrar} alt="" />
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Example</td>
                            <td>example@utez.edu.mx</td>
                            <td>
                                <button>
                                    <img id='deleteBtn' src={borrar} alt="" />
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Example</td>
                            <td>example@utez.edu.mx</td>
                            <td>
                                <button>
                                    <img id='deleteBtn' src={borrar} alt="" />
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Example</td>
                            <td>example@utez.edu.mx</td>
                            <td>
                                <button>
                                    <img id='deleteBtn' src={borrar} alt="" />
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Example</td>
                            <td>example@utez.edu.mx</td>
                            <td>
                                <button>
                                    <img id='deleteBtn' src={borrar} alt="" />
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Example</td>
                            <td>example@utez.edu.mx</td>
                            <td>
                                <button>
                                    <img id='deleteBtn' src={borrar} alt="" />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default DashboardUser

const Formulario = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
`;
