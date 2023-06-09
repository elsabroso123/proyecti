import React from "react";
import UI from "../../components/UI";

const VeterinariosPage = () => {

    const PageParams = {
        title: 'Adminstracion de Veterinarios',
        createTitle: 'Registrar Veterinario',
        fields: ['Nombre', 'Apellido', 'Telefono', 'Correo', 'Especialidad'],
        stateData: {'Nombre': '', 'Apellido': '', 'Telefono': '', 'Correo': '', 'Especialidad': ''},
        updateTitle: 'Actualizar Datos del Veterinario:',
        showDataTitle: 'Veterinarios: ',
        getUrl: 'http://localhost:8000/getData/Veterinario/',
        table: 'Veterinario'
    }

    return(
        <div>
            <UI params={PageParams}/>
        </div>
    )
}

export default VeterinariosPage