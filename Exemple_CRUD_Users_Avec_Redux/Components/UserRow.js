import { useDispatch } from "react-redux"
import { Supprimer } from "../config/actions"
export default function UserRow(props){
    const dispatch = useDispatch();
    const GetUser = (user) => {
        props.getupdateuser(user)
       
    }
    return(
        <tr>
            <td>{props.user.CIN}</td>
            <td>{props.user.Name}</td>
            <td>{props.user.Date}</td>
            <td>{props.user.Genre}</td>
            <td>{props.user.Loisirs.join("-")}</td>
            <td>{props.user.Nationalite}</td>
            <td>
                <button className="btn btn-outline-danger m-1" onClick={()=>dispatch(Supprimer(props.user.CIN))}>Supprimer</button>
                <button className="btn btn-outline-warning m-1" onClick={() => GetUser(props.user)}>Modifier</button>
            </td>
        </tr>
    )
}