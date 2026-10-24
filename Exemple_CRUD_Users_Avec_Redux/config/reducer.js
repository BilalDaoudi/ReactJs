var Users = [
  {
    CIN: "SB215487",
    Name: "Daoudi Bilal",
    Date: "2002-12-09",
    Genre: "Homme",
    Loisirs: ["Football", "Programmation"],
    Nationalite: "Marocain",
  },{
    CIN: "SB215587",
    Name: "Daoudi Hamza",
    Date: "1999-12-15",
    Genre: "Homme",
    Loisirs: ["Lecture", "Football"],
    Nationalite: "Marocain",
  },
];

const reducer = (state = Users, action) => {
    switch(action.type){
        case "sauvgarder" : return state.find(s => s.CIN === action.personne.CIN) !== undefined ? 
                             state.map(u => u.CIN === action.personne.CIN ? action.personne : u)
                            :
                             [...state,action.personne]
                            ;
        case "supprimer" : return state.filter(u => u.CIN !== action.cin);
        default : return state;
    }
};
export default reducer;