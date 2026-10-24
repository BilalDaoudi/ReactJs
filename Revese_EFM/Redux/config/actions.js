export function AjouterPersonne(per){
    return {
        type : "Ajouter" , personne : per
    }
}

export function ModifierPersonne(per){
    return {
        type : "Modifier" , personne : per
    }
}


export function SupprimerPersonne(per){
    return {
        type : "Supprimer" , id : per
    }
}