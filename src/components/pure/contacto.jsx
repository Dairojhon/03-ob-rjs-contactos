import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';
import '../../styles/contacto.scss';
import Tooltip from '@mui/material/Tooltip';

const ContactoComponent = ({contacto, conectar, remove}) => {

    useEffect(() => {
        console.log('Contacto creado')
        return () => {
            console.log(`Contacto: ${contacto.nombre} será eliminado`);
        }
    }, [contacto]);

    function contactoEstadoBadge(){
        if(contacto.estado){
            return(
                <h6 className='mb-0'>
                    <span className='badge bg-success'>
                        En línea                        
                    </span>
                </h6>)
        }
        else{
            return(
            <h6 className='mb-0'>
                    <span className='badge bg-secondary'>
                        Desconectado                        
                    </span>
                </h6>)       
        }               
            
    }

    function tooltipDeleteIcon(){
        return(
            <Tooltip title="Eliminar contacto" placement="right">
                <i className='bi-trash contacto-connect'  style={{color: 'tomato'}} onClick={() => remove(contacto)}></i>
            </Tooltip>
        )
    }


    function contactoEstadoIcon(){
        if(contacto.estado){
            return (
                <Tooltip title="Desconectar" placement="left">
                    <i onClick={() => conectar(contacto)} className='bi-toggle-on contacto-connect' style={{color: 'green'}}></i>
                </Tooltip>)            
        }else{
            return (
                <Tooltip title="Conectar" placement="left">
                    <i onClick={() => conectar(contacto)} className='bi-toggle-off contacto-connect' style={{color: 'grey'}}></i>
                </Tooltip>)   
        }
    }    

    return (
        <tr className='fw-normal' >
            <th scope='row'>
                <span className='ms-2'>{contacto.nombre}</span>
            </th>
            <td className='align-middle'>
                <span>{contacto.apellido}</span>
            </td>
            <td className='align-middle'>
                <span>{contacto.email}</span>
            </td>
            <td className='align-middle'>
                
                { contactoEstadoBadge() }                
            </td>
            <td className='align-around'>
                
                {contactoEstadoIcon()}
                {tooltipDeleteIcon()}                   
            </td>
        </tr>

    );
};


ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto).isRequired,
    conectar: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default ContactoComponent;
