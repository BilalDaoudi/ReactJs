import User from "./User";
import Admin from "./Admin";
export default function IsLogin(props){

    return (
        <div>
        {
            props.user.id  === 1 ? <Admin user={props.user}/> : <User user={props.user}/>
        }
         </div>
    )
} 