
// function updatePrice(id , countFinal, no){
//     if(no !== 1){
//         const phonePriceElm = document.getElementById(id)
//         phonePriceElm.innerText = countFinal*1219
//     }{
//         const phonePriceElm = document.getElementById(id)
//         phonePriceElm.innerText = countFinal*1219
//     }
// }

function updatePhonePrice(id, phone){
    const phonePriceElm = document.getElementById(id)
    const totalPhonePrice  = phone*1278
    phonePriceElm.innerText = totalPhonePrice
    return totalPhonePrice
}

function updateCasePrice(id, caseNo){
    const casePriceElm = document.getElementById(id)
    const totalCasePrice  = caseNo*59
    casePriceElm.innerText = totalCasePrice
    return totalCasePrice
}

function updateNumber(id1, no){
    if(no === 1){
        const countElm = document.getElementById(id1)
        const countElmStringToInt = parseInt(countElm.value)
        const countFinal = countElmStringToInt + 1
        countElm.value = countFinal
        return countFinal
    }else{
        const countElm = document.getElementById(id1)
        const countElmStringToInt = parseInt(countElm.value)
        if(countElmStringToInt === 0) return countElm.value = 0
        const countFinal = countElmStringToInt - 1
        countElm.value = countFinal
        return countFinal
    }
}


document.getElementById('phone-btn-plus').addEventListener('click', function(){
    const countNumber1 =  updateNumber('phone-count',  1)
    const totalPhonePrice =  updatePhonePrice('phone-price' , countNumber1 )



    const totalPhonePriceELM = document.getElementById('phone-price')
    const totalCasePriceELM = document.getElementById('case-price')
    const totalPriceElm = document.getElementById('total-price')
    const totalPrice = parseInt(totalPhonePriceELM.innerText) + parseInt(totalCasePriceELM.innerText)
    totalPriceElm.innerText = totalPrice

    const taxElm = document.getElementById('tax')
    const taxToInt = parseInt(taxElm.innerText)
    const taxTotal = (totalPrice*0.05).toFixed(2)
    taxElm.innerText = taxTotal

    const totalELM = document.getElementById('total')
    const total =  parseFloat(totalPrice) + parseFloat(taxTotal)
    totalELM.innerText = total

})
document.getElementById('phone-btn-minus').addEventListener('click', function(){
    const countNumber2 = updateNumber('phone-count',  2)
    updatePhonePrice('phone-price' , countNumber2 )



    const totalPhonePriceELM = document.getElementById('phone-price')
    const totalCasePriceELM = document.getElementById('case-price')
    const totalPriceElm = document.getElementById('total-price')
    const totalPrice = parseInt(totalPhonePriceELM.innerText)+ parseInt(totalCasePriceELM.innerText)
    totalPriceElm.innerText = totalPrice

    const taxElm = document.getElementById('tax')
    const taxToInt = parseInt(taxElm.innerText)
    const taxTotal = (totalPrice*0.05).toFixed(2)
    taxElm.innerText = taxTotal

    const totalELM = document.getElementById('total')
    const total =  parseFloat(totalPrice) + parseFloat(taxTotal)
    totalELM.innerText = total

})


document.getElementById('case-btn-plus').addEventListener('click', function(){
    const countNumber = updateNumber('case-count', 1)
    updateCasePrice('case-price', countNumber)


    const totalPhonePriceELM = document.getElementById('phone-price')
    const totalCasePriceELM = document.getElementById('case-price')
    const totalPriceElm = document.getElementById('total-price')
    const totalPrice = parseInt(totalPhonePriceELM.innerText)+ parseInt(totalCasePriceELM.innerText)
    totalPriceElm.innerText = totalPrice

    const taxElm = document.getElementById('tax')
    const taxToInt = parseInt(taxElm.innerText)
    const taxTotal = (totalPrice*0.05).toFixed(2)
    taxElm.innerText = taxTotal

    const totalELM = document.getElementById('total')
    const total =  parseFloat(totalPrice) + parseFloat(taxTotal)
    totalELM.innerText = total

    

})
document.getElementById('case-btn-minus').addEventListener('click', function(){
    const countNumber =  updateNumber('case-count', 2)
    updateCasePrice('case-price', countNumber)

    const totalPhonePriceELM = document.getElementById('phone-price')
    const totalCasePriceELM = document.getElementById('case-price')
    const totalPriceElm = document.getElementById('total-price')
    const totalPrice = parseInt(totalPhonePriceELM.innerText)+ parseInt(totalCasePriceELM.innerText)
    totalPriceElm.innerText = totalPrice

    const taxElm = document.getElementById('tax')
    const taxToInt = parseInt(taxElm.innerText)
    const taxTotal = (totalPrice*0.05).toFixed(2)
    taxElm.innerText = taxTotal

    const totalELM = document.getElementById('total')
    const total =  parseFloat(totalPrice) + parseFloat(taxTotal)
    totalELM.innerText = total

 
})