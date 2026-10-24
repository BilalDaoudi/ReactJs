import { createSlice } from '@reduxjs/toolkit';

const personnesSlice = createSlice({
  name: 'personnes',
  initialState: [],
  reducers: {
    ajouterPersonne: (state, action) => {
      state.push(action.payload);
    },
    modifierPersonne: (state, action) => {
      const { id, nom, age, sexe } = action.payload;
      const personneIndex = state.findIndex((personne) => personne.id === id);
      if (personneIndex !== -1) {
        state[personneIndex].nom = nom;
        state[personneIndex].age = age;
        state[personneIndex].sexe = sexe;
      }
    },
    supprimerPersonne: (state, action) => {
      const id = action.payload;
      const updatedState = state.filter((personne) => personne.id !== id);
      return updatedState;
    },
  },
});

export const { ajouterPersonne, modifierPersonne, supprimerPersonne } = personnesSlice.actions;

export default personnesSlice.reducer;