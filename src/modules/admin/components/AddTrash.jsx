import React from 'react';
import addBtn from '../../../assets/images/addBtn.png';
import '../styles/AddTrash.css';

const AddTrash = ({ abrirFormulario }) => {
    return (
        <div className='cardContainer' onClick={abrirFormulario}>
            <img src={addBtn} alt="Agregar" style={{ width: '100px' }} />
            <h1 style={{ color: '#C8C8C8' }}>Agregar Bote</h1>
        </div>
    );
}

export default AddTrash;
