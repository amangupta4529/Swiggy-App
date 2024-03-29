const getCartTotal=(cartItems)=>{
    let totalAmount = 0;
    let totalItems = 0;
    for(ind in cartItems){
        let item = cartItems[ind]
        totalAmount += item.quantity*item.price
        totalItems += item.quantity
    }
    return {
        totalAmount,totalItems
    }
}
export {getCartTotal}