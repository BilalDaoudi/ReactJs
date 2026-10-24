import { useSelector } from "react-redux";
import Menu from "../Components/Menu";
import UsersTable from "../Components/UsersTable";
import Formulaire from "../Components/Form";
import { useState } from "react";

export default function Users() {
  const [userUpdate, setUserUpdate] = useState({
    CIN: "",
    Name: "",
    Date: "",
    Genre: "",
    Loisirs: [],
    Nationalite: "Marocain",
  });

  const users = useSelector((data) => data);

  const GetUser = (user) => console.log(user);

  return (
    <div>
      <Menu />
      <div className="row">
        
        <div className="col-5">
          <Formulaire user={userUpdate} />
        </div>
        <div className="col-7">
          <UsersTable users={users} getuserupdate={GetUser} />
        </div>
      </div>
    </div>
  );
}
