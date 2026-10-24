export const AddUser = (u) => (
    {
        type : 'AddUser',
        user : u
    }
)

export const DeleteUser = (idUser) => (
    {
        type : 'DeleteUser',
        id : idUser
    }
)

export const UpdateUser = (u) => (
    {
        type : 'UpdateUser',
        user : u
    }
)