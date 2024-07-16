const pesoArgentinoInput = document.getElementById('pesoArgentino')
const dolarInput = document.getElementById('dolar')
const conversionRate = 1500

dolarInput.addEventListener('input', () => {
    const dolarValue = parseFloat(dolarInput.value)
    if (dolarValue) {
        pesoArgentinoInput.value = (dolarValue * conversionRate)
    }
});

pesoArgentinoInput.addEventListener('input', () => {
    const pesoArgentinoValue = parseFloat(pesoArgentinoInput.value);
    if (pesoArgentinoValue) {
        dolarInput.value = (pesoArgentinoValue / conversionRate)
    }
});