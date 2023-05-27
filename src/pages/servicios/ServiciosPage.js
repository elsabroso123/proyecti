import React from "react";
import UI from "../../components/UI";

const ServiciosPage = () => {

    const PageParams = {
        title: 'Adminstracion de Servicios',
        createTitle: 'Registrar Servicio',
        fields: ['Nombre', 'Descripcion', 'Precio'],
        stateData: {'Nombre': '', 'Descripcion': '', 'Precio': ''},
        updateTitle: 'Actualizar Datos del Servicio:',
        showDataTitle: 'Servicios: ',
    }

    return(
        <div>
            <UI params={PageParams}/>
        </div>
    )
}

export default ServiciosPage