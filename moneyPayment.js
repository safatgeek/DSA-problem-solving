const listOfPaymentDays = (year) =>{
    let result = []
    const days = year * 365
    for(let day = 1; day <= days; day++){
        if(day % 22 == 0){
            result.push(day)
        }
    }

    return result
}

const amountOfPayment = (year, unitPayment) =>{
    let paymentDays = listOfPaymentDays(year).length
    return paymentDays * unitPayment
}

console.log(amountOfPayment(1, 3000))
console.log(amountOfPayment(4, 3000))



// console.log(listOfPaymentDays(1))
// console.log(listOfPaymentDays(2))
// console.log(listOfPaymentDays(4))