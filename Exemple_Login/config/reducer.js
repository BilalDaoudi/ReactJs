const object = {
  users: [
    { id: 1, username: "Admin", password: "Admin" },
    {
      id: 2,
      username: "Daoudi",
      email: "Daoudi@gmail.com",
      age: 20,
      genre: "Homme",
      pays: "Maroc",
      password: "Daoudi",
    },
    {
      id: 3,
      username: "Bilal",
      email: "Bilal@gmail.com",
      age: 20,
      genre: "Homme",
      pays: "Maroc",
      password: "Bilal",
    },
    {
      id: 4,
      username: "YYYY",
      email: "YYYY@gmail.com",
      age: 20,
      genre: "Homme",
      pays: "Maroc",
      password: "YYYY",
    }
  ]
};

export default function reducer(state = object, action) {
  switch (action.type) {
    case "AddUser":
      return { ...object, users: [...object.users, action.user] };
    case "DeleteUser":
      return { ...object, users: object.users.filter(u => u.id !== action.id) };
    case "UpdateUser":
      break;
    default:
      return state;
  }
}
