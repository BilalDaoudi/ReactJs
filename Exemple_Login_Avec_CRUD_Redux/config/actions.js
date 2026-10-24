export const AjouterUser = (user) => {
    return {
        type : "Ajouter",
        per : user
    }
}

export const ModifierUser = (user) => {
    return {
        type : "Modifier",
        per : user
    }
}

export const SupprimerUser = (id) => {
    return {
        type : "Supprimer",
        id : id
    }
}