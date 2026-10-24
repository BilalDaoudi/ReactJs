export const Ajouter = (personne) => ({
    type: 'Ajouter',
    payload: personne,
  });
  
  export const Supprimer = (id) => ({
    type: 'Supprimer',
    payload: id,
  });
  
  export const Modifier = (personne) => ({
    type: 'Modifier',
    payload: personne,
  });
  
  