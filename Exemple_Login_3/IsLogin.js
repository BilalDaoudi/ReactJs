import React from "react";
import User from "./User";
import Admin from "./Admin";
export default function IsLogin(props){

    return(
        <div>
            {
                props.user.UserName === "Admin" ? <Admin user={props.user}/> : <User  user={props.user}/>
            }
        </div>
    )
}
