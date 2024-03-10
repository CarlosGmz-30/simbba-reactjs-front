import React from 'react'
import styled from 'styled-components'

const RegisterUser = ({ children, estado, cambiarEstado }) => {
    return (
        <>
            {estado &&
                <Overlay>
                    <Contenedor>
                        <BotonCerrar onClick={() => cambiarEstado(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                            </svg>
                        </BotonCerrar>
                        {children}
                    </Contenedor>
                </Overlay>
            }
        </>
    )
}

export default RegisterUser

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Contenedor = styled.div`
    width: 600px;
    height: 450px;
    background-color: white;
    position: relative;
    border-radius: 20px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    padding: 30px;
`;


const BotonCerrar = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 20px;
    height: 20px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    color: black;

    svg {
        width: 100%;
        height: 100%;
    }
`;

