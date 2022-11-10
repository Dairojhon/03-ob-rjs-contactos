import React, { useEffect, useState } from 'react';
import { Contacto } from '../../models/contacto.class';
import ContactoComponent from '../pure/contacto';
import '../../styles/contactoList.scss'
import ContactosForm from '../pure/forms/contactoForm';


const ContactoListComponent = () => {

    const contacto1 = new Contacto('Jhon','Rodriguez','dairojhon90@gmail.com', true);
    const contacto2 = new Contacto('Carolina', 'Ospina', 'cospinae@gmail.com', false);

    const [contactos, setContactos] = useState([contacto1, contacto2]);
    const [loading, setLoading] = useState(true);  

    useEffect(() => {
        console.log('Contacto ha sido modificado');
        setTimeout(() => {
            setLoading();
        }, 1000);      
        return () => {
            console.log('El componente contacto sera desmontado')
        }
    }, [contactos])

    function conectarContacto(contacto){
        console.log('Contacto conectado:', contacto);
        const index = contactos.indexOf(contacto);
        const tempContacto = [...contactos];
        tempContacto[index].estado = !tempContacto[index].estado;        
        setContactos(tempContacto);
    }

    function eliminarContacto(contacto){
        console.log('eliminar este contacto:', contacto);
        const index = contactos.indexOf(contacto);
        const tempContactos = [...contactos];
        tempContactos.splice(index,1);
        setContactos(tempContactos);
    }

    function addContacto(contacto){
        console.log('contacto agregado:', contacto);
        const tempContactos = [...contactos];
        tempContactos.push(contacto);
        setContactos(tempContactos);
    }

    const Table = () => {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Nombre</th>
                        <th scope='col'>Apellido</th>
                        <th scope='col'>E-mail</th>
                        <th scope='col'>Estado</th>
                        <th scope='col'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { contactos.map((contacto, index) => {
                        return (
                                <ContactoComponent 
                                    key={index} 
                                    contacto={contacto}
                                    conectar={conectarContacto}
                                    remove={eliminarContacto}                                
                                >
                                </ContactoComponent>
                            )
                        }
                    )}
                </tbody>
            </table>
        )
    }

    let tableContactos;

    if(contactos.length > 0){
        tableContactos = <Table></Table>
    }else{
        tableContactos = (
        <div style={{color : 'black'}}>
            <h3> no hay contactos para mostrar</h3>
            <h4>Intenta agregar algunos</h4>
        </div>
        )
    }

    return (
        <div className='mb-5'>
            <h1>Contactos agregados</h1>
            <div className='container d-flex justify-content-between'>
                <ContactosForm add={ addContacto }></ContactosForm>                          
                <div className='col-9 contactos-table'>
                    <div className='card'>                    
                        <div className='card-header'>
                            <h5 className='text-dark fw-bold'>
                                Mis Contactos
                            </h5>
                        </div>                    
                        <div className='card-body overflow-auto' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                            {loading ? (<p style={{color: 'black'}}>Loading tasks...</p>) : tableContactos}
                        </div>
                    </div>
                </div>
            </div>    
            
        </div>
    );
};

export default ContactoListComponent;

