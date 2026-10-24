
const initialState = {
    Articles: [
      {id : 1 , title : "post 1",body : "Quisque cursus, metus vitae pharetra"},
      {id : 2 , title : "post 2",body : "Quisque cursus, metus vitae pharetra"},
      {id : 3 , title : "post 3",body : "Quisque cursus, metus vitae pharetra"}
    ],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'Ajouter':
        return {...state,Articles: [...state.Articles, action.article],};
      case 'Supprimer':
        return {...state,Articles: state.Articles.filter((art) => art.id !== action.article),};
      case 'Modifier':
        return {...state,Articles: state.Articles.map((art) =>  art.id === action.article.id ? action.article : art),};
      default:
        return state;
    }
  };
  
  export default reducer;