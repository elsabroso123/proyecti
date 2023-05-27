import React, {useState, useEffect} from "react";

const MaxMin = () => {

    const [min, setMin] = useState()
    const [max, setMax] = useState()

    useEffect(() => {
        fetch('http://localhost:8000/getData/Servicio/')
          .then(response => response.json())
          .then(data => {
            let maxPrice = data[0]
            let minPrice = data[0]
      
            data.map((item) => {
                // console.log(`${item.precio} > ${maxPrice.precio}: ${item.precio > maxPrice.precio}`)
                if(Number(item.precio) > Number(maxPrice.precio))
                    maxPrice = item
                if (Number(item.precio) < Number(minPrice.precio))
                    minPrice = item;
            })
            
            setMax(maxPrice);
            setMin(minPrice);
          });
      }, []);
      

    return(
        <div>
            <h3>Presupuestos</h3>
            <div>
                <h5>Minimo Costo</h5>
                <p>{min && min.nombre}</p>
                <p>{min && min.descripcion}</p>
                <p>{min && min.precio}</p>
            </div>
            <div>
                <h5>Maximo Costo</h5>
                <p>{max && max.nombre}</p>
                <p>{max && max.descripcion}</p>
                <p>{max && max.precio}</p>
            </div>
        </div>
    )
}

export default MaxMin