const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")
const dolar = 5.9
const Euro = 5.9
const bitcoin = 0.0000068

const covertvalues = () => {

    const inputReais = document.getElementById('input-real').value

    const realValueText = document.getElementById('real-value-text')
    const convertValue = document.getElementById('convert-value')

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais);

    if (select.value === "US$ Dólar Americano") {
        convertValue.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar);
    }

    if (select.value === "€ Euro") {
        convertValue.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / Euro);
    }

    if (select.value === "₿ Bitcoin") {
        convertValue.innerHTML = new Intl.NumberFormat('pt-BR',
            { style: 'currency', currency: 'BTC' }).format(inputReais / bitcoin)
    }
}
changecurrency = () => {
    const currencyname = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")


    if (select.value === "US$ Dólar Americano") {
        currencyname.innerHTML = "US$ Dólar Americano"
        currencyImg.src = "./estados-unidos (1) 1.png"
    }
    if (select.value === "€ Euro") {
        currencyname.innerHTML = " € Euro"
        currencyImg.src = "./euro-img.png"
    }
    if (select.value === "₿ Bitcoin") {
        currencyname.innerHTML = "₿ Bitcoin"
        currencyImg.src = "./bitcon-png.png"
    }
    covertvalues()
}


button.addEventListener("click", covertvalues)
select.addEventListener("change", changecurrency)
