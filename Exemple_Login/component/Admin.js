import { useDispatch, useSelector } from "react-redux";
import { DeleteUser } from "../config/actions";

export default function Admin(props) {
  const users = useSelector((data) => data.users.filter((u) => u.id !== 1));
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        Hello <b>{props.user.username}</b>
      </div>
      <div>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Id</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Sexe</th>
              <th>Pays</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={i}>
                <td>{u.id}</td>
                <td>{u.username}</td>
                <td>{u.email}</td>
                <td>{u.age}</td>
                <td>{u.genre}</td>
                <td>{u.pays}</td>
                <td>{u.password}</td>
                <td>
                  <button onClick={() => dispatch(DeleteUser(u.id))}>
                    delete
                  </button>
                  <button>update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
