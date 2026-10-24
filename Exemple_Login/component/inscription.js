import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { AddUser } from "../config/actions";


export default function Inscription(){

    const users = useSelector(data => data.users);
    const dispatch = useDispatch();
    console.log(users);

    const [username,setUserName] = useState('');
    const [email,setEmail] = useState('');
    const [age,setAge] = useState('');
    const [genre,setGenre] = useState('');
    const [pays,setPays] = useState('Maroc');
    const [password,setPassword] = useState('');

    const newId = users.length === 0 ? 1 : users[users.length-1].id + 1

    function Add(e){
        e.preventDefault();
        const User = {
            id : newId,
            username : username,
            email : email,
            age : age,
            genre : genre,
            pays : pays,
            password : password
        }
        dispatch(AddUser(User));
    }
    

    return(
        <div>

            <form onSubmit={(e) => Add(e)}>  
                <label>User Name</label><br/>
                <input type="text" value={username} onChange={(e)=> setUserName(e.target.value)} /><br/><br/>

                <label>Email</label><br/>
                <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}  /><br/><br/>

                <label>Age</label><br/>
                <input type="number" value={age} onChange={(e)=> setAge(e.target.value)}  /><br/><br/>

                <input type="radio" name="sexe" value="Homme"  onChange={(e)=> setGenre(e.target.value)} /> Homme
                <input type="radio" name="sexe" value="Femme"  onChange={(e)=> setGenre(e.target.value)}/> Femme
                <br/><br/>

                <label>Pays</label><br/>
                <select onChange={(e)=> setPays(e.target.value)}>
                    <option value="Maroc">Maroc</option>
                    <option value="Tiza">Tiza</option>
                    <option value="France">France</option>
                </select><br/><br/>

                <label>Password</label><br/>
                <input type="password"  value={password} onChange={(e)=> setPassword(e.target.value)} /><br/><br/>

                <button type="submit">Envoyer</button>

            </form>


        </div>
    )
}