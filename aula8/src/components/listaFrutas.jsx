import { useState } from "react";
import { useEffect } from 'react'
import 'virtual:windi.css'
import Fruta from './fruta'


function ListaFrutas(params){

    let [frutas, setFrutas] = useState([])

    console.log("listafruta")

    async function Loadfrutas(){
        let resp = await fetch('http://localhost:3000/frutas')
        let obj = await resp.json()
        let temp_frutas=[]
        for (let key in obj){
            temp_frutas.push(obj[key])
        }
        setFrutas(temp_frutas)

        console.log(obj);
    }

    useEffect(()=>{
        console.log('pagina montada')
        Loadfrutas()
    },[])
    return(
    <div>
        {
            frutas.map((obj,index)=>{
                return(
                    <Fruta key={index} fruta={obj} />
                )
            })
        }
    </div>
    )
}

export default ListaFrutas