import React from "react";
import UI from "../../components/UI";

const MascotasPage = () => {

    const PageParams = {
        title: 'Adminstracion de Mascotas',
        createTitle: 'Registrar Mascota',
        fields: ['Nombre', 'FechaNacimiento', 'Especie', 'Raza', 'Genero', 'ClienteId'],
        stateData: {'Nombre': '', 'FechaNacimiento': '', 'Especie': '', 'Raza': '', 'Genero': '', 'ClienteId': ''},
        updateTitle: 'Actualizar Datos de la Mascota:',
        showDataTitle: 'Mascotas: ',
        getUrl: 'http://localhost:8000/getData/Mascota/',
        table: 'Mascota'
    }

    return(
        <div>
            <UI params={PageParams}/>
        </div>
    )
}

export default MascotasPage