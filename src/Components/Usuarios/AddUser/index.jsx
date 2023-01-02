import React from 'react'
import { useState } from 'react';
import uniquid from 'uniqid'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

function AddUser() {

    const navegar = useNavigate()



    // Hooks
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [contraseña, setContraseña] = useState('')


    function agregarUsuario() {
        var usuario = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            contraseña: contraseña,

            idusuario: uniquid()
        }
        console.log(usuario)
        axios.post('https://siswebtjbackend-production.up.railway.app/api/usuario/agregarusuario', usuario)

            .then(res => {
                // alert(res.data)
                Swal.fire(
                    'Registo exitoso!',
                    'El usuario fue registrado',
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
                    <h2 className='mt-4'>Crear un nuevo usuario</h2>
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

                        <button onClick={agregarUsuario} className='btn btn-success'>Guardar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddUser;