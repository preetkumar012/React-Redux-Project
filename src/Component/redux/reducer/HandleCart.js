const cart = [];
const HandleCart = (state = cart, action) => {
    const product = action.payload;
    // console.log("welcome to noida" + product);
    switch (action.type) {
        case 'ADDITEM':
        // if product is already exits
        const exist = state.find((x) => x.id === product.id);
        // alert("welcome to noida");
        if (exist) {
            // increase the Quantity in cart;
           
            return state.map((x) => x.id === product.id ? {...x, qty: x.qty + 1 } : x);
        } 
        else {
            const product = action.payload;
            return [
                ...state,
                {
                    ...product,
                    qty: 1,
                }
            ]
        }


        case "DELITEM": 
        const exist1 = state.find((x) => x.id === product.id);
        if (exist1.qty === 1) {
            return state.filter((x) => x.id !== exist1.id);
        } else {
            return state.map((x) =>
                x.id === product.id ? { ...x, qty: x.qty - 1 } : x)
        }
        default: return state


    }

}
export default HandleCart;