import React, {useEffect, useState} from 'react'
import SingleUser from '../SingleUser';
import { Link } from 'react-router-dom';
import axios from 'axios'

function ListUser() {

    const [datausuarios, setdatausuarios] = useState([])

    useEffect(() => {

        axios.get('https://siswebtjbackend-production.up.railway.app/api/usuario/obtenerusuarios').then(res => {
            console.log(res.data)
            setdatausuarios(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    // Mapear listadeusuarios en objeto usuario
    const listausuarios = datausuarios.map(usuario => {
        return (
            <SingleUser usuario={usuario} />
        )
    })
    return (
        <>
            <div className='container'>

                <Link to={"/agregarusuario"}><button className='btn btn-success mt-3'>Agregar Usuario</button></Link>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Email</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Contraseña</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    {listausuarios}
                </table>
            </div>
        </>
    )
}

export default ListUser;