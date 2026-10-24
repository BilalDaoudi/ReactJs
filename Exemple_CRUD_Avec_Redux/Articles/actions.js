export const Ajouter = (art) => ({
    type: 'Ajouter',
    article: art,
  });
  
  export const Supprimer = (id) => (
    {type: 'Supprimer',article: id}
    );
  
  export const Modifier = (art) => ({
    type: 'Modifier',
    article: art,
  });
