import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


function EditUser() {

    const navegar = useNavigate()


    const params = useParams()

    // Hooks
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [contraseña, setContraseña] = useState('')

    useEffect(() => {
        axios.post('https://siswebtjbackend-production.up.railway.app/api/usuario/obtenerdatausuario', { idusuario: params.idusuario }).then(res => {
            console.log(res.data[0])
            const datausuario = res.data[0]
            setNombre(datausuario.nombre)
            setEmail(datausuario.email)
            setTelefono(datausuario.telefono)
            setContraseña(datausuario.contraseña)

        })
    }, [])

    // Funcion que actualiza
    function editarUsuario() {
        // Crear objeto para actualizar usuario
        const actualizarusuario= {
            nombre: nombre,
            email: email,
            telefono: telefono,
            contraseña: contraseña,
            idusuario: params.idusuario
        }

        // Hacer peticion usando axios

        axios.post('https://siswebtjbackend-production.up.railway.app/api/usuario/actualizausuario', actualizarusuario)

            .then(res => {
                Swal.fire(
                    'Actualizacion exitosa!',
                    'Se guardaron las modificaciones',
                    'success'
                  )
                navegar('/')
            })
            .then(err => { console.log(err) })

    }


    return (
        <>

            <div className='container'>
                <Link to={"/"}><button className='btn btn-warning mt-3'>Regresar</button></Link>

                <div className='row'>
                    <h2 className='mt-4'>Editar Usuario</h2>
                </div>

                <div className='row'>
                    <div className='col-sm-6 offset-3'>
                        <div className='mb-3'>
                            <label htmlFor='nombre' className='form-label'>Nombre</label>
                            <input value={nombre} onChange={(e) => { setNombre(e.target.value) }} type="text" className='form-control' />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='email' className='form-label'>Correo</label>
                            <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" className='form-control' />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='celular' className='form-label'>Celular</label>
                            <input value={telefono} onChange={(e) => { setTelefono(e.target.value) }} type="number" className='form-control' />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='contraseña' className='form-label'>Contraseña</label>
                            <input value={contraseña} onChange={(e) => { setContraseña(e.target.value) }} type="password" className='form-control' />
                        </div>

                        <button onClick={editarUsuario} className='btn btn-success'>Guardar cambios</button>
                    </div>
                </div>
            </div>        </>
    )
}

export default EditUser;