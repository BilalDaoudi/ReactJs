import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [utilisateur,setUtilisateur] = useState([]);
  const [posts,setPosts] = useState([]);
  const [iddetail,setIdDetail] = useState() 
  useEffect(function(){
    fetch(
      "https://jsonplaceholder.typicode.com/users"
    )
      .then((response) => response.json())
      .then((data) => setUtilisateur(data));
    fetch(
        "https://jsonplaceholder.typicode.com/posts"
      )
        .then((response) => response.json())
        .then((data) => setPosts(data));
  })

  function changeId(id){
    setIdDetail(id);
  }
  
  return(<div>
    {utilisateur.map(use => <p key={use.id}>
                              {use.name} 
                              <button onClick={()=>changeId(use.id)}>Post</button>
                              {iddetail == use.id ? posts.filter(p=> p.userId == use.id ).map(po => <li>{po.title}</li>) : null}
                            </p>
                      )
    }
        </div>)
}


