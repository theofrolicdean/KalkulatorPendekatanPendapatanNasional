const productionIncomeInputs = document.querySelectorAll(".block--production-income .input__income")
const productionIncomeResultContent = document.querySelector(".block--production-income-result .result__content")
const productionIncomeCalculateButton = document.querySelector(".block--production-income .btn--calculate")
const incomeApproachInputs = document.querySelectorAll(".block--income-approach .input__income")
const incomeApproachResultContents = document.querySelectorAll(".block--income-approach-result .result__content")
const incomeApproachCalculateButton = document.querySelector(".block--income-approach .btn--calculate")
const productionApproachInputs = document.querySelectorAll(".block--production-approach .input__income")
const productionApproachResultContents = document.querySelectorAll(".block--production-approach-result .result__content") 
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
    let incomeApproachValues = [
        {terms: "Yield", value: 0},
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

    for (let i = 0; i < incomeApproachValues.length; i++) {
        if (incomeApproachValues[i].value == 0) {
            if (i == 0) incomeApproachValues[i].value = validateNumber(addValues(incomeApproachValues[1], incomeApproachValues[2], incomeApproachValues[3], incomeApproachValues[4]))
            if (i == 1) incomeApproachValues[i].value = validateNumber(subtractValues(incomeApproachValues[0], incomeApproachValues[2], incomeApproachValues[3], incomeApproachValues[4]))
            if (i == 2) incomeApproachValues[i].value = validateNumber(subtractValues(incomeApproachValues[0], incomeApproachValues[1], incomeApproachValues[3], incomeApproachValues[4]))
            if (i == 3) incomeApproachValues[i].value = validateNumber(subtractValues(incomeApproachValues[0], incomeApproachValues[1], incomeApproachValues[2], incomeApproachValues[4]))
            if (i == 4) incomeApproachValues[i].value = validateNumber(subtractValues(incomeApproachValues[0], incomeApproachValues[1], incomeApproachValues[2], incomeApproachValues[3]))
        }
    }

    for (let i = 0; i < incomeApproachResultContents.length; i++) {
        incomeApproachResultContents[i].textContent = `${String(incomeApproachValues[i].terms)}: ${String(formatNumber(incomeApproachValues[i].value))}`
    }
})

productionApproachCalculateButton.addEventListener("click", function() {
    let productionApproachValues = [
        {terms: "Yield", value: 0},
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

    for (let i = 0; i < productionApproachValues.length; i++) {
        if (productionApproachValues[i].value == 0) {
            if (i == 0) productionApproachValues[i].value = validateNumber(addSubtractValues(productionApproachValues[1], productionApproachValues[2], productionApproachValues[3], productionApproachValues[4], productionApproachValues[5]))
            if (i == 1) productionApproachValues[i].value = validateNumber(subtractAddValues(productionApproachValues[0], productionApproachValues[2], productionApproachValues[3], productionApproachValues[4], productionApproachValues[5]))
            if (i == 2) productionApproachValues[i].value = validateNumber(subtractAddValues(productionApproachValues[0], productionApproachValues[1], productionApproachValues[3], productionApproachValues[4], productionApproachValues[5]))
            if (i == 3) productionApproachValues[i].value = validateNumber(subtractAddValues(productionApproachValues[0], productionApproachValues[1], productionApproachValues[2], productionApproachValues[4], productionApproachValues[5]))
            if (i == 4) productionApproachValues[i].value = validateNumber(subtractAddValues(productionApproachValues[0], productionApproachValues[1], productionApproachValues[2], productionApproachValues[3], productionApproachValues[5]))
            if (i == 5) productionApproachValues[i].value = validateNumber(subtractAddValues(productionApproachValues[1], productionApproachValues[2], productionApproachValues[3], productionApproachValues[4], productionApproachValues[0]))
        }
    }

    for (let i = 0; i < productionApproachResultContents.length; i++) {
        productionApproachResultContents[i].textContent = `${String(productionApproachValues[i].terms)}: ${String(formatNumber(productionApproachValues[i].value))}`
    }
})

function addValues(a, b, c, d) {
    return a.value + b.value + c.value + d.value
}

function subtractValues(a, b, c, d) {
    return a.value - b.value - c.value - d.value
}

function addSubtractValues(a, b, c, d, e) {
    return a.value + b.value + c.value + d.value - e.value
}

function subtractAddValues(a, b, c, d, e) {
    return a.value - b.value - c.value - d.value + e.value    
}

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