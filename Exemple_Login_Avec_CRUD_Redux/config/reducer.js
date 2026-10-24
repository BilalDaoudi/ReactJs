const Users = [
    {id:1,username : "Admin",password:"Admin" },
    {id:2,username : "user1",password:"user1" },
    {id:3,username : "user2",password:"user2" },
    {id:4,username : "user3",password:"user3" },
]


const reducer = (state = Users,action) => {
    switch(action.type){
        case 'Ajouter':
            return [...state,action.per];
        case 'Supprimer':
            return state.filter(s => s.id !== action.id);
        case 'Modifier' : 
            return state.map(s => s.id === action.per.id ? action.per : s);
        default : 
            return state;
    }
}

export default reducer;