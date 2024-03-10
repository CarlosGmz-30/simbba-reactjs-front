import React from 'react'
import styled from 'styled-components'

const OffCanvas = ({ children, estado }) => {
    return (
        <>
            {estado &&
                <Overlay>
                    <Contenedor>
                        {children}
                    </Contenedor>
                </Overlay>
            }
        </>
    )
}

export default OffCanvas

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
    height: 480px;
    background-color: white;
    position: relative;
    border-radius: 20px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;