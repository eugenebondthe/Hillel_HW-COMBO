function getExchangeRate(currency) {
  switch (currency) {
    case "EUR":
      return 0.9;
    case "UAH":
      return 35;
    case "GBP":
      return 0.8;
    default:
      throw new Error("Currency code not supported.");
  }
}

function convertCurrency(amount, targetCurrency) {
  try {
    const exchangeRate = getExchangeRate(targetCurrency);
    const convertedAmount = amount * exchangeRate;
    return convertedAmount;
  } catch (error) {
    return error.message;
  }
}

const amountInUSD = 1000;
const targetCurrency = 'UAH';
const convertedAmount = convertCurrency(amountInUSD, targetCurrency);

console.log(`${amountInUSD} USD is ${convertedAmount} in ${targetCurrency}`);