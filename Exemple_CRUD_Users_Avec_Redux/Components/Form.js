import { useState } from "react"
import { useDispatch } from "react-redux";
import { Sauvgarder } from "../config/actions";

 export default function Formulaire(props){
    const dispatch = useDispatch();
    const [user,setUser] = useState(props.user);
    const AddUser = (e) => {
        e.preventDefault();
        if (user.CIN !== "")
            dispatch(Sauvgarder(user))
    }
    const Vider = () => {
        setUser({
            CIN: "",
            Name: "",
            Date: "",
            Genre: "",
            Loisirs: [],
            Nationalite: "Marocain",
        })
    }

    const ChoisirLoisir = (e) => {
        if (user.Loisirs.includes(e.target.value)) setUser({...user,Loisirs:user.Loisirs.filter((l) => l !== e.target.value)});
    else setUser({...user,Loisirs:[...user.Loisirs,e.target.value]});
    }

    return (
        <div className="container">
        <form onSubmit={AddUser}>
            <div className="form-group m-2">
                <label className="form-label">CIN :</label>
                <input type="text" className="form-control" value={user.CIN} onChange={(e) => setUser({...user,CIN:e.target.value}) } />
            </div>
            <div className="form-group m-2">
                <label className="form-label">Name :</label>
                <input type="text" className="form-control" value={user.Name}  onChange={(e) => setUser({...user,Name:e.target.value})}  />
            </div>
            <div className="form-group m-2">
                <label className="form-label">Date de Naissance :</label>
                <input type="date" className="form-control"  value={user.Date}  onChange={(e) => setUser({...user,Date:e.target.value}) }  />
            </div>
            <div className="form-group m-2">
                <label className="form-label">Genre :</label>
                <input type="radio" className="m-3" name="genre" id="Homme" value="Homme" onChange={(e) => setUser({...user,Genre:e.target.value}) } checked={ user.Genre === "Homme" ? true : false } /> <label htmlFor="Homme">Homme</label> 
                <input type="radio" className="m-3" name="genre" id="Femme" value="Femme" onChange={(e) => setUser({...user,Genre:e.target.value}) } checked={ user.Genre === "Femme" ? true : false } /> <label htmlFor="Femme">Femme</label> 
            </div>
            <div className="form-group m-2">
                <label className="form-label">Loisirs :</label>
                <input type="checkbox" className="m-3" onChange={ChoisirLoisir} value="Football" id="Football"  checked={ user.Loisirs.includes("Football") ? true : false } /><label htmlFor="Football">Football</label> 
                <input type="checkbox" className="m-3" onChange={ChoisirLoisir} value="Lecture" id="Lecture" checked={ user.Loisirs.includes("Lecture") ? true : false } /><label htmlFor="Lecture">Lecture</label> 
                <input type="checkbox" className="m-3" onChange={ChoisirLoisir} value="Programmation" id="Programmation" checked={ user.Loisirs.includes("Programmation") ? true : false } /><label htmlFor="Programmation">Programmation</label> 
            </div>
            <div className="form-group m-2">
                <label className="form-label">Nationalité :</label>
                <select className="form-select" onChange={(e) => setUser({...user,Nationalite:e.target.value}) }>
                    <option value="Marocain" selected={user.Nationalite === "Marocain" ? true : false}>Marocain</option>
                    <option value="France" selected={user.Nationalite === "France" ? true : false}>France</option>
                    <option value="Italy" selected={user.Nationalite === "Italy" ? true : false}>Italy</option>
                </select>
            </div>
            <div className="form-group m-5 text-center">
                <button className="btn btn-outline-primary">Sauvgarder</button>
                <button type="button" className="btn btn-outline-danger" onClick={Vider}>Vider</button>
            </div>
        </form>
        </div>
    )
 }