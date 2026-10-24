export const Sauvgarder = (personne) => {
    return {
      type: "sauvgarder",
      personne : personne
    };
  };
export const Supprimer = (cin_delete) => {
  return {
    type: "supprimer",
    cin : cin_delete
  };
};
