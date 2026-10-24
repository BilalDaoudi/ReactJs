import data from "../data/products.json";

const objetState = {
  Products: data,
  Cart: []
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
              quantite: parseInt(c.quantite) + parseInt(actionstate.cart.quantite),
              total: parseFloat(c.total) + parseFloat(actionstate.cart.total),
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
