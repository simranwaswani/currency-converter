function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    let exchangeRate;

    // Define exchange rates
    if (fromCurrency === "USD" && toCurrency === "NPR") {
        exchangeRate = 132.56;
    } else if (fromCurrency === "USD" && toCurrency === "PKR") {
        exchangeRate = 230; // Example exchange rate for USD to PKR
    } else if (fromCurrency === "INR" && toCurrency === "USD") {
        exchangeRate = 0.012;
    } else if (fromCurrency === "NPR" && toCurrency === "USD") {
        exchangeRate = 0.0075;
    } else if (fromCurrency === "PKR" && toCurrency === "USD") {
        exchangeRate = 0.0043; // Example exchange rate for PKR to USD
    } else {
        exchangeRate = 1;
    }

    const result = (amount * exchangeRate).toFixed(2);
    document.getElementById('result-text').innerText = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
}
