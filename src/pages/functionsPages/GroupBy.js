import React, {useState, useEffect} from "react";

const GroupBy = () => {

    const [data, setData] = useState()
    const [search, setSearch] = useState('')
    const [razas, setRazas] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/getData/Mascota/')
        .then(response => response.json())
        .then(data => setData(data))
    }, [])

    const Buscar = () => {
        setRazas(data.filter(raza => search.toLowerCase()===raza.raza.toLowerCase()))
        console.log(razas)
    }

    return(
        <div>
            <h3>Agrupar por razas de mascotas</h3>

            <input type="text" placeholder="Buscar Raza" value={search} onChange={e => setSearch(e.target.value)}/>
            <button onClick={Buscar}>Buscar</button>
            {(razas != null) && 
                razas.map(raza => {
                    return(
                        <div key={raza.mascotaid}>
                            <p>ID {raza.mascotaid}</p>
                            <p>Nombre {raza.nombre}</p>
                            <p>Genero {raza.genero}</p>
                            <p>Raza {raza.raza}</p>
                            <p>Esepecie {raza.especie}</p>
                            <p>Fecha de Nacimiento {raza.fechanacimiento}</p>
                            <p>Cliente ID {raza.clienteid}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default GroupBy