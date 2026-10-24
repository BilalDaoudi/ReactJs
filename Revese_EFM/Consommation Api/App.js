import { useEffect, useState } from "react";
import axios from 'axios';


function App() {
    const [users,setUsers] = useState([]);
    const [posts,setPosts] = useState([]);
    const [id,setId] = useState(0);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data));
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])

    // useEffect(() => {
    //     axios.get("https://jsonplaceholder.typicode.com/users")
    //     .then(rse => setUsers(rse.data));
    //     axios.get("https://jsonplaceholder.typicode.com/posts")
    //     .then(rse => setPosts(rse.data));
    // },[])
    console.log(users);
    return (
        <div>
          {users.map((u,i) =>
            <div key={i}>
                {u.name} <button onClick={() => setId(u.id)}>Post</button>
                { id === u.id ? <div>
                                    {posts.filter(p => p.userId === id).map(p => <li>{p.title}</li>)}
                                </div>  : null
                    }
            </div>
          )}
        </div>
    );
}

export default App;
