const personnes = [
  {
    id: 1,
    Nom: "Bilal",
    DateNaissance: "2002-12-09",
    Genre: "Homme",
  },
  {
    id: 2,
    Nom: "Nouzha",
    DateNaissance: "2003-12-09",
    Genre: "Femme",
  },
];

export default function reducer(state = personnes, action) {
  switch (action.type) {
    case "Ajouter":
      return [...state, action.personne];
    case "Modifier":
      return state.map((s) => 
        s.id === action.personne.id ? action.personne : s 
      );
    case "Supprimer":
      return state.filter((s) => s.id !== action.id);
    default:
      return state;
  }
}



    // return [...state.filter(s => s.id !== action.personne.id),action.personne];