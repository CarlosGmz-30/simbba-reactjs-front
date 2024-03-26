import React from 'react'
import { Progress } from 'flowbite-react';
import '../assets/styles/TrashCard.css'
import trash from '../assets/images/trash.png'
import edit from '../assets/images/editar.png'
import eliminar from '../assets/images/eliminar.png'
 
export default function TrashCard() {
    return (
        <>
            <div className='generalContainer'>
                <div id='containerButtons'>
                    <button>
                        <img className='trashBtn' src={edit} alt="" />
                    </button>
                    <button>
                        <img className='trashBtn' src={eliminar} alt="" />
                    </button>
                </div>
                <div id='cardContainer'>
                    <img src={trash} alt="" />
                    <h1>Nombre del Bote</h1>
                    <Progress
                        style={{ width: '100%', padding: '10px'}}
                        progress={50}
                    />
                    <h2>Capacidad - Medio</h2>
                    <h1>50%</h1>
                </div>

            </div>
        </>
    )
}
