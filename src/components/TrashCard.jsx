import React from 'react'
import { Progress } from 'flowbite-react';
import '../assets/styles/TrashCard.css'
import trash from '../assets/images/trash.png'
import edit from '../assets/images/editar.png'
import eliminar from '../assets/images/eliminar.png'

export default function TrashCard({ name, level }) {

    let capacity = '';
    if (level == 0) {
        capacity = 'VACIO'
    } else if (level > 0 && level <= 25) {
        capacity = 'CASI VACIO'

    } 

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
                    <h1>{name}</h1>
                    <Progress
                        style={{ width: '100%', padding: '10px' }}
                        progress={level}
                    />



                    <h2>{capacity}</h2>
                    <h1>{level}%</h1>
                </div>

            </div>
        </>
    )
}
