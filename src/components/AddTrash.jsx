import React from 'react'
import addBtn from '../assets/images/addBtn.png'
import '../assets/styles/AddTrash.css'

export default function AddTrash() {
    return (
        <>
            <div className='cardContainer'>
                <img src={addBtn} alt="Agregar" style={{ width: '100px' }} />
                <h1 style={{ color: '#C8C8C8' }}>Agregar Bote</h1>
            </div>
        </>
    )
}
