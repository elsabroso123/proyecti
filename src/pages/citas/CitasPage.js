import React from "react";
import UI from "../../components/UI";

const CitasPage = () => {

    const PageParams = {
        title: 'Adminstracion de Citas',
        createTitle: 'Registrar Cita',
        fields: ['Fecha', 'Hora', 'MascotaId', 'VeterinarioId', 'ServicioId'],
        stateData: {'Fecha': '', 'Hora': '', 'MascotaId': '', 'VeterinarioId': '', 'ServicioId': ''},
        updateTitle: 'Actualizar Datos de la Cita:',
        showDataTitle: 'Citas: ',
        getUrl: 'http://localhost:8000/getData/Cita/',
        table: 'Cita'
    }

    return(
        <div>
            <UI params={PageParams}/>
        </div>
    )
}

export default CitasPage