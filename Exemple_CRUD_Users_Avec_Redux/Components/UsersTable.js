import UserRow from "./UserRow";

export default function UsersTable(props) {
  
  const GetUser = (user) => props.getuserupdate(user)
  
  return (
    <div >
      <table className="table table-light">
        <thead>
          <tr>
            <th>CIN</th>
            <th>Name</th>
            <th>Date Naissance</th>
            <th>Genre</th>
            <th>Loisirs</th>
            <th>Nationalité</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user, index) => (
            <UserRow key={index} user={user} getupdateuser={GetUser} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
