import { color } from "@mui/system";
import React, {useState, useEffect} from "react";



export default function ItemCount({stock, onAdd}) {



    const [initial, setContador] = useState(1)

    return (
    <div>
        <h1>contador: {initial}</h1>
        <button onClick={() => {
            setContador(initial - 1);
            console.log (initial);   
        }}> - </button>

        <button onClick={() => {
            setContador(initial + 1);
            console.log (initial);
        }}> + </button>

        

        <h2>stock: {stock}</h2>
        
    </div>
    )
}