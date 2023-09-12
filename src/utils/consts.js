export const CARCO_PRICE = 75


export const calcPrice = (price) => {
    if (price >= CARCO_PRICE) {
        return price
    } else {
        return price + CARCO_PRICE
    }
}

