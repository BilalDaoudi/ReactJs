export const DeleteAll = () => ({
    type: 'DeleteAll'
  });
    export const Add = (newcart) => ({
    type: 'Add',
    cart:newcart
  });
  
  export const Delete = (id) => ({
    type: 'Delete',
    idcart:id
  });
  
    
  export const Update = (updatecart) => ({
    type: 'Update',
    cart:updatecart
  });
  