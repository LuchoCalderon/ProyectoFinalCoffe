import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import Swal from 'sweetalert2'
function CrearBebida(){

    const parametros = useParams();

    const url = `${import.meta.env.MONGODB_CONECTION}/bebidas`

    const [nombre,setNombre] = useState('')
    const [imagen,setImagen] = useState('')
    const [categoria,setCategoria] = useState('')
    const [descripcion,setDescripcion] = useState('')
    
  

    useEffect(()=>{
        
        async function getBebidas(){

            if(parametros.id == undefined){
                return;
            }

            await axios({
                url: `${url}/${parametros.id}`,
                method: "get"
            }).then((response)=>{
                setNombre(response.data.nombre)
                setImagen(response.data.imagen)
                setCategoria(response.data.categoria)
                setDescripcion(response.data.descripcion)
                
            })
        }
        
        getBebidas()    
    },[])

    const changeNombre = (evt) => {
        setNombre(evt.target.value)
    }
    const changeImagen = (evt) => {
        setImagen(evt.target.value)
    }

    const changeCategoria = (evt) => {
        setCategoria(evt.target.value)
    }

    const changeDescripcion = (evt) => {
        setDescripcion(evt.target.value)
    }


    const guardarBebida= (evt) =>{
        evt.preventDefault();

        let method = "post";
        let liga = url

        if(parametros.id != undefined){
            method = "PUT"
            liga = `${url}/${parametros.id}`
        }
        Swal.showLoading()
        axios({
            url: liga,
            method: method,
            data:{
                "nombre": nombre,
                "imagen": imagen,
                "categoria": categoria,
                "descripcion": descripcion,
            }
        }).then((response)=>{
            Swal.close()
           console.log(response)
        })
    }

    return(
        <div className="container">
         <h1 className="my-5 is-size-4">Vista de creacion de bebida</h1>
            <form onSubmit={guardarBebida}>
                <div>
                    <label>Nombre</label>
                    
                    <input className="input" onChange={changeNombre} type="text" placeholder="Ingresa el nombre" value={nombre} ></input>
                </div>
                <div>
                    <label>Imagen</label>
                    <input className="input" onChange={changeImagen} type="text" placeholder="Ingresa la imagen" value={imagen}></input>
                </div>
                <div>
                    <label>Categoria</label>
                    <input className="input" onChange={changeCategoria} type="text" placeholder="Ingresa la categoria" value={categoria}></input>
                </div>
                <div>
                    <label>Descripcion</label>
                    <input className="input" onChange={changeDescripcion} type="text" placeholder="Ingresa la descripcion" value={descripcion}></input>
                </div>
                
                
                <button className="mt-5 button is-link">Guardar</button>
            </form>
        </div>
    )
}

export default CrearBebida;