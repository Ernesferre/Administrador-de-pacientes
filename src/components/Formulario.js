import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const Formulario = () => {

// Crear State de Citas
const [cita, actualizarCita] = useState({
    mascota:'',
    propietario:'',
    fecha:'',
    hora:'',
    sintomas:''
});

const [error, actualizarError] = useState(false)

// funcion que se ejecuta cuando el usuario escribe dentro del input
const actualizarState = e => {
    actualizarCita({
        ...cita,
        [e.target.name]: e.target.value
    })
}

    // Extraer los Valores

    const {mascota, propietario, fecha, hora, sintomas} = cita;

    // Cuando el usuario presiona agregar cita
    const submitCita = e => {
        e.preventDefault();
        
        // Validacion de formulario

        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true)
            return
        }

        // Eliminar el mensaje previo
        actualizarError(false);


        // Asignar un ID
        cita.id = uuidv4();
        
        
        

        // Crear la Cita

        // Reiniciar el form
    }

    


    return (  
        <>
        <h2> Crear Cita </h2>

        {error ? <p className="alerta-error">Todos los campos son obligatorios</p> 
        : null }

        <form
            onSubmit={submitCita}
        >
            

            <label>Nombre Mascota</label>
            <input 
                type="text"
                name="mascota"
                className="u-full-width"
                placeholder="Nombre Mascota"
                onChange={actualizarState}
                value={mascota}
            />
            
            <label>Nombre Dueño</label>
            <input 
                type="text"
                name="propietario"
                className="u-full-width"
                placeholder="Nombre dueño de la mascota"
                onChange={actualizarState}
                value={propietario}
            />

            <label>Fecha</label>
            <input 
                type="date"
                name="fecha"
                className="u-full-width"
                placeholder="Nombre Mascota"
                onChange={actualizarState}
                value={fecha}
            />

            <label>Hora</label>
            <input 
                type="time"
                name="hora"
                className="u-full-width"
                placeholder="Nombre Mascota"
                onChange={actualizarState}
                value={hora}
            />

            <label>Sintomas</label>
            <textarea 
                name="sintomas"
                className="u-full-width"
                placeholder="Ingrese sintomas"
                onChange={actualizarState}
                value={sintomas}
            ></textarea>

            <button
            type="submit"
            className="u-full-width button-primary"
            
            
            >Agregar Cita</button>

        </form>

        </>

    );
}
 
export default Formulario;