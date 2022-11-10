import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../../models/contacto.class'

const ContactosForm = ({ add } ) => {
    const nombreRef = useRef('');
    const apellidoRef = useRef('');
    const emailRef = useRef('');
    

    function addContacto(e){
        e.preventDefault();
        const newContacto = new Contacto(
            nombreRef.current.value,
            apellidoRef.current.value,
            emailRef.current.value,
            false       
        );
        add(newContacto);
    }

    return (
        <div className="card flex-fill">
            <div className="card-header text-dark fw-bold">
                Agregar Contactos
            </div>
            <div class="card-body">
                <form onSubmit={ addContacto } className='d-flex justify-content-center align-items-center mb-4'>
                    <div className='form-outline flex-fill'>
                        <input ref={ nombreRef } id='inputNombre' type='text' className='form-control form-control-lg mb-3' required autoFocus placeholder='Nombre del contacto'/>
                        <input ref={ apellidoRef } id='inputApellido' type='text' className='form-control form-control-lg mb-3' required placeholder='Apellido'/>
                        <input ref={ emailRef } id='inputemail' type='text' className='form-control form-control-lg mb-3' required placeholder='E-mail'/>
                        <div className='card-footer bg-white'>
                            <button type='submit' className='btn btn-success ms-2 flex-fill'>
                                Crear nuevo contacto
                            </button>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>

    );
}

ContactosForm.protoTypes = {
    add: PropTypes.func.isRequired    
}


export default ContactosForm;
