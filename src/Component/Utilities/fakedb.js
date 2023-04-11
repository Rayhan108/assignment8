
const addToDb = id => {
    let appliedJobCart = getAppliedCart();
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



const getAppliedCart = () => {
    let jobCart = {};
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
