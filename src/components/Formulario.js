

const Formulario = () => {
    return (  
        <>
        <h2> Crear Cita </h2>

        <form>
            <label>Nombre Mascota</label>
            <input 
                type="text"
                name="mascota"
                className="u-full-width"
                placeholder="Nombre Mascota"
            />
            
            <label>Nombre Dueño</label>
            <input 
                type="text"
                name="fecha"
                className="u-full-width"
                placeholder="Nombre dueño de la mascota"
            />

            <label>Fecha</label>
            <input 
                type="date"
                name=""
                className="u-full-width"
                placeholder="Nombre Mascota"
            />

            <label>Hora</label>
            <input 
                type="time"
                name="hora"
                className="u-full-width"
                placeholder="Nombre Mascota"
            />

            <label>Sintomas</label>
            <textarea 
                name="sintomas"
                className="u-full-width"
                placeholder="Nombre Mascota"
            ></textarea>

        </form>

        </>

    );
}
 
export default Formulario;