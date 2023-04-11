// use local storage to manage cart data
const addToDb = id => {
    let appliedJobCart = getAppliedCart();
    // add quantity
    const quantity =appliedJobCart[id];
    if (!quantity) {
        appliedJobCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        appliedJobCart[id] = newQuantity;
    }
    localStorage.setItem('job-cart', JSON.stringify(appliedJobCart));
}

// const addToDb = id => {
//     let shoppingCart = getShoppingCart();
//     // add quantity
//     const quantity = shoppingCart[id];
//     if (!quantity) {
//         shoppingCart[id] = 1;
//     }
//     else {
//         const newQuantity = quantity + 1;
//         shoppingCart[id] = newQuantity;
//     }
//     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
// }

const getAppliedCart = () => {
    let jobCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('job-cart');
    if (storedCart) {
        jobCart = JSON.parse(storedCart);
    }
    return jobCart;
}



export {
    addToDb,
   
    getAppliedCart,
   
}
