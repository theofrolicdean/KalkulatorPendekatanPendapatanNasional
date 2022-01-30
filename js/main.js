const productionIncomeInputs = document.querySelectorAll(".block--production-income .input__income")
const productionIncomeResultContent = document.querySelector(".block--production-income-result .result__content")
const productionIncomeCalculateButton = document.querySelector(".block--production-income .btn--calculate")
const incomeApproachInputs = document.querySelectorAll(".block--income-approach .input__income")
const incomeApproachResultContent = document.querySelector(".block--income-approach-result .result__content")
const incomeApproachCalculateButton = document.querySelector(".block--income-approach .btn--calculate")
const productionApproachInputs = document.querySelectorAll(".block--production-approach .input__income")
const productionApproachResultContent = document.querySelector(".block--production-approach-result .result__content") 
const productionApproachCalculateButton = document.querySelector(".block--production-approach .btn--calculate")

productionIncomeCalculateButton.addEventListener("click", function() {
    let productionIncomeResult = 0
    let productionIncomeValues = [
        {terms: "P1", value: 0},
        {terms: "Q1", value: 0},
        {terms: "P2", value: 0},
        {terms: "Q2", value: 0},
    ] 

    for (let i = 0; i < productionIncomeInputs.length; i++) {
        if (isNumber(productionIncomeInputs[i].value)) {
            if (isNaN(parseFloat(productionIncomeInputs[i].value))) productionIncomeValues[i].value = 0
            else productionIncomeValues[i].value = parseFloat(productionIncomeInputs[i].value)
        }

        productionIncomeResult = validateNumber(productionIncomeValues[0].value * productionIncomeValues[1].value) + (productionIncomeValues[2].value * productionIncomeValues[3].value)
        productionIncomeResultContent.textContent = `Pendapatan Nasional: ${String(formatNumber(productionIncomeResult))}`
    }
})

incomeApproachCalculateButton.addEventListener("click", function() {
    let incomeApproachResult = 0
    let incomeApproachValues = [
        {terms: "Sewa", value: 0},
        {terms: "Upah", value: 0},
        {terms: "Bunga", value: 0},
        {terms: "Laba", value: 0}
    ]

    for (let i = 0; i < incomeApproachInputs.length; i++) {
        if (isNumber(incomeApproachInputs[i].value)) {
            if (isNaN(parseFloat(incomeApproachInputs[i].value))) incomeApproachValues[i].value = 0
            else incomeApproachValues[i].value = parseFloat(incomeApproachInputs[i].value)
        }
    }

    incomeApproachResult = validateNumber(incomeApproachValues[0].value + incomeApproachValues[1].value + incomeApproachValues[2].value + incomeApproachValues[3].value)
    incomeApproachResultContent.textContent = `Yield: ${String(formatNumber(incomeApproachResult))}`
})

productionApproachCalculateButton.addEventListener("click", function() {
    let productionApproachResult = 0
    let productionApproachValues = [
        {terms: "Konsumsi Masyarakat", value: 0},
        {terms: "Investasi", value: 0},
        {terms: "Pengeluaran Negara", value: 0},
        {terms: "Ekspor", value: 0},
        {terms: "Impor", value: 0}
    ]

    for (let i = 0; i < productionApproachInputs.length; i++) {
        if (isNumber(productionApproachInputs[i].value)) {
            if (isNaN(parseFloat(productionApproachInputs[i].value))) productionApproachValues[i].value = 0
            else productionApproachValues[i].value = parseFloat(productionApproachInputs[i].value)
        }
    }

    productionApproachResult = validateNumber(productionApproachValues[0].value + productionApproachValues[1].value + (productionApproachValues[2].value + (productionApproachValues[3].value - productionApproachValues[4].value)))
    productionApproachResultContent.textContent = `Yield: ${String(formatNumber(productionApproachResult))}`
})

function formatNumber(number) {
    let parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

function validateNumber(number) {
    if (number < 0) number = 0
    return number
}

function isNumber(number) {
    return !(isNaN(number))
}