import React, {useState, useEffect} from "react";
// import { getData} from '../veterinaria/index';


const UI = (props) => {

    const params = props.params
    const [newRegister, setNewRegister] = useState(params.stateData)
    const [data, setData] = useState()
    const [dataToUpdate, setDataToUpdate] = useState(null)
    const [UpdateData, setUpdateData] = useState(params.stateData)

    useEffect(() => {
        //getData aqui deberia traer la data
        setData([['Laura', 'Gomez', '1112223333', 'laura.gonzalez@example.com', 'Cirugía'],['Laura', 'González', '1112223333', 'laura.gonzalez@example.com', 'Cirugía']])
    }, [])

    const Create = (data) => {
        //insertData
        console.log(data)
    }

    const PreUpdate = (index) => {
        const registro = data[index];
        const updatedData = registro.reduce((acc, item, fieldIndex) => {
          const fieldName = params.fields[fieldIndex];
          return { ...acc, [fieldName]: item };
        }, {});
        
        setUpdateData(updatedData);
        setDataToUpdate(index);
      };

    const Update = (data) => {

    }

    const Delete = (data) => {

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
                        {params.fields.map(field => {
                            return(
                                <div key={field}>
                                    <label>{field}:</label>
                                    <input type="text" value={UpdateData[field]} onChange={e => setUpdateData({...UpdateData, [field]: e.target.value})}/>
                                </div>
                            )   
                        })}
                        <button>Actualizar</button>
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
                                    {register.map((item, index) => {
                                        return(
                                            <p key={index}>{params.fields[index]}: {item}</p>
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