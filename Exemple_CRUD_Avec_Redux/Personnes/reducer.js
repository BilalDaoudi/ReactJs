
const initialState = {
    Personnes: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'Ajouter':
        return {...state,Personnes: [...state.Personnes, action.payload],};
      case 'Supprimer':
        return {...state,Personnes: state.Personnes.filter((person) => person.id !== action.payload),};
      case 'Modifier':
        return {...state,Personnes: state.Personnes.map((person) =>  person.id === action.payload.id ? action.payload : person),};
      default:
        return state;
    }
  };
  
  export default reducer;