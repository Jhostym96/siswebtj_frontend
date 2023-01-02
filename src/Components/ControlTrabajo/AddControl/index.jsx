import React from 'react'
import { useState } from 'react';
import uniquid from 'uniqid'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

function AddControlTrabajo() {

    const navegar = useNavigate()



    // Hooks
    const [numerocontrol, setNumeroControl] = useState('')
    const [fecha, setFecha] = useState('')
    const [cliente, setCliente] = useState('')
    const [almacen, setAlmacen] = useState('')
    const [maquina, setMaquina] = useState('')
    const [operador, setOperador] = useState('')
    const [turno, setTurno] = useState('')
    const [inicio, setInicio] = useState('')
    const [fin, setFin] = useState('')
    const [total, setTotal] = useState('')


    function agregarControlTrabajo() {
        var controltrabajo = {
            numerocontrol: numerocontrol,
            fecha: fecha,
            cliente: cliente,
            almacen: almacen,
            maquina: maquina,
            operador: operador,
            turno: turno,
            inicio: inicio,
            fin: fin,
            total: total,

            idcontrol: uniquid()
        }
        console.log(controltrabajo)
        axios.post('https://siswebtjbackend-production.up.railway.app/api/controltrabajo/agregarcontroltrabajo', controltrabajo)

            .then(res => {
                // alert(res.data)
                Swal.fire(
                    'Registo exitoso!',
                    'El usuario fue registrado',
                    'success'
                )
                navegar('/listcontrol')
            })
            .then(err => { console.log(err) })
    }

    return (
        <>
            <div className='container'>
                <Link to={"/listcontrol"}><button className='btn btn-warning mt-3'>Regresar</button></Link>

                <div className='row'>
                    <h2 className='mt-4'>Registrar servicio</h2>
                </div>

                <div className='row'>
                    <div className='col-sm-6 offset-3'>

                        <div className='mb-3'>
                            <label htmlFor='numerocontrol' className='form-label'>N°</label>
                            <input value={numerocontrol} onChange={(e) => { setNumeroControl(e.target.value) }} type="numer" className='form-control' />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='fecha' className='form-label'>Fecha</label>
                            <input value={fecha} onChange={(e) => { setFecha(e.target.value) }} type="date" className='form-control' />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='cliente' className='form-label'>Cliente</label>
                            <input value={cliente} onChange={(e) => { setCliente(e.target.value) }} type="text" className='form-control' />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='almacen' className='form-label'>Almacen</label>
                            <input value={almacen} onChange={(e) => { setAlmacen(e.target.value) }} type="text" className='form-control' />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='maquina' className='form-label'>Maquina</label>
                            <input value={maquina} onChange={(e) => { setMaquina(e.target.value) }} type="text" className='form-control' />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='operador' className='form-label'>Operador</label>
                            <input value={operador} onChange={(e) => { setOperador(e.target.value) }} type="text" className='form-control' />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='turno' className='form-label'>Turno</label>
                            <input value={turno} onChange={(e) => { setTurno(e.target.value) }} type="text" className='form-control' />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='inicio' className='form-label'>Inicio</label>
                            <input value={inicio} onChange={(e) => { setInicio(e.target.value) }} type="text" className='form-control' />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='fin' className='form-label'>Fin</label>
                            <input value={fin} onChange={(e) => { setFin(e.target.value) }} type="text" className='form-control' />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='total' className='form-label'>Total</label>
                            <input value={total} onChange={(e) => { setTotal(e.target.value) }} type="text" className='form-control' />
                        </div>

                        <button onClick={agregarControlTrabajo} className='btn btn-success mb-3'>Guardar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddControlTrabajo;