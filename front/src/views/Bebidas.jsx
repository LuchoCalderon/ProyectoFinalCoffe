import {useEffect, useState} from 'react'
import Bebida from "../components/bebida"
import axios from "axios";


function Principal() {
  const [drinks, setdrinks] = useState([]);

  const peticionGet=async()=>{
    axios.get("http://localhost:3000/api/bebida")
    .then(response=>{
      setdrinks(response.data)
    }).catch(error=>{
      setdrinks(error);
    })
  }

  useEffect(()=>{
    peticionGet();
  },[])
  return (
    <>
        <section className="page princial">

      <body className="bg-secondary">
        

        <div className="container mt-5">
          <Bebida drinks ={drinks}/>
        </div>
      </body>
      </section>
    </>
  )
}

export default Principal;

