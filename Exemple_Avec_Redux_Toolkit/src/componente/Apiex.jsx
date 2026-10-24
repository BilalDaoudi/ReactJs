import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Apiex() {
    const [data , setData] = useState([])
    useEffect(
        () => {
            axios.get('http://www.ofppt.ma/api/employes')
            .then((res) => {
                setData([res.data])
            }                
            )
        }, [])
  return (
   <>
    {
        data.map((e) => 
        <main>
            <div className="card-employe">
          {e.image}
        <h2>{e.nom}</h2>
        </div>
        </main>
        )
    }
   </>
  )
}

export default Apiex
