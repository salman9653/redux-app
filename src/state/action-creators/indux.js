export const depositMoney = (amount) => {
    return (dispach) => {
        dispach({
            type: 'deposit',
            paylod: amount
        })
    }
}

export const withdrawMoney = (amount) => {
    return (dispach) => {
        dispach({
            type: 'withdraw',
            paylod: amount
        })
    }
}