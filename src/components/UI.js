import React, {useState, useEffect} from "react";

const UI = (props) => {

    const params = props.params
    const [newRegister, setNewRegister] = useState(params.stateData)
    const [data, setData] = useState()
    const [dataToUpdate, setDataToUpdate] = useState(null)
    const [UpdateData, setUpdateData] = useState()

    useEffect(() => {
        const url = params.getUrl
        fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
    }, [])

    const Create = (data) => {
        const campos = params.fields.join(", ")
        const postData = Object.values(data)

        fetch('http://localhost:8000/insertData/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "table": params.table,
                "fields": campos,
                "values": postData
            })
        })
        .then(response => response.json())
        .then(data => {
            setNewRegister(params.stateData)
            alert(`${params.table} registrado con exito, recarge la pagina para ver los cambios`)
        })
        .catch(e => console.log('mamo esta wea'))
    }

    const PreUpdate = (index) => {
        const registro = data[index];
        setUpdateData({...registro});
        setDataToUpdate(index);
      };

    const Update = (data) => {
        const preId = `${params.table.toLowerCase()}id`

        fetch(`http://localhost:8000/updateData/${params.table}/${preId}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({data})
        })
        .then(response => console.log(response))
    }

    const Delete = (index) => {
        const registro = data[index]
        const preId = `${params.table.toLowerCase()}id`
        
        fetch(`http://localhost:8000/deleteData/${params.table}/${registro[preId]}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => alert(`${params.table} eliminada, recargue la pagina para ver resultados`))
    }
 
    return(
        <div>
            <h3>{params.title}</h3>
            <div>
                <h4>{params.createTitle}</h4>
                {params.fields.map(field => {
                    return(
                        <div key={field}>
                            <label>{field}:</label>
                            <input type="text" value={newRegister.field} onChange={e => setNewRegister({...newRegister, [field]: e.target.value})}/>
                        </div>
                    )
                })}
                <button onClick={() => Create(newRegister)}>Registrar</button>
            </div>
            <div>
                <h4>{params.updateTitle}</h4>
                {(dataToUpdate != null) &&
                    <div>
                        {Object.keys(UpdateData).map(field => {
                            return(
                                <div key={field}>
                                    <label>{field}:</label>
                                    <input type="text" value={UpdateData[field]} onChange={e => setUpdateData({...UpdateData, [field]: e.target.value})}/>
                                </div>
                            )   
                        })}
                        <button onClick={() => Update(UpdateData)}>Actualizar</button>
                    </div>
                }
            </div>
            <div>
                <h4>{params.showDataTitle}</h4>
                {data && 
                    <div>
                        {data.map((register, index) => {
                            return (
                                <div key={index}>
                                    {Object.keys(register).map(item => {
                                        return(
                                            <p key={item}>{item}: {register[item]}</p>
                                        )
                                    })}
                                    <button onClick={() => PreUpdate(index)}>Editar</button>
                                    <button onClick={() => Delete(index)}>Borrar</button>
                                </div>
                            );
                        })}
                    </div>
                }
            </div>
        </div>
    )
}

export default UI