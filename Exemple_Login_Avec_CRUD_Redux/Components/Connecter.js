import Admin from "./admin";
import User from "./user";
export default function Connecter(props){
    return(
        <div>
           {props.user.id === 1 ? <Admin user={props.user} /> : <User user={props.user} /> }
        </div>
    );
}