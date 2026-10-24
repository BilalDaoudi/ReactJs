import data from "../data/products.json";

const objetState = {
  Products: data,
  Cart: [],
  CodePromo : [
    {Code : "bilal1" , remise : 30},
    {Code : "daoudi1" , remise : 10},
  ]
};

export default function reducer(state = objetState, actionstate) {
  switch (actionstate.type) {
    case "Add":
      return { ...state, Cart: [...state.Cart, actionstate.cart] };
    case "Delete":
      return {
        ...state,
        Cart: state.Cart.filter((c) => c.id !== actionstate.idcart),
      };
    case "Update":
      return {
        ...state,
        Cart: state.Cart.map((c) => {
          if (c.id === actionstate.cart.id) {
            const modifiercart = {
              id: c.id,
              image: c.image,
              prix: c.prix,
              quantite: parseInt(c.quantite) + parseInt(actionstate.cart.quantite)
            };
            return modifiercart;
          } else return c;
        }),
      };
    case "DeleteAll":
      return { ...state, Cart: [] };
    default:
      return state;
  }
}
