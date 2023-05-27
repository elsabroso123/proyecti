import React from "react";
import UI from "../../components/UI";

const ClientesPage = () => {

    const PageParams = {
        title: 'Adminstracion de Clientes',
        createTitle: 'Registrar Cliente',
        fields: ['Nombre', 'Apellido', 'Telefono', 'Correo'],
        stateData: {'Nombre': '', 'Apellido': '', 'Telefono': '', 'Correo': ''},
        updateTitle: 'Actualizar Datos del Cliente:',
        showDataTitle: 'Clientes: ',
        getUrl: 'http://localhost:8000/getData/Cliente/',
        table: 'Cliente'
    }

    return(
        <div>
            <UI params={PageParams}/>
        </div>
    )
}

export default ClientesPage