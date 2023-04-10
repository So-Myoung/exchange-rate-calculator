const cboCurrency1 = document.getElementById("cboCurrency1");
const txtCurrency1 = document.getElementById("txtCurrency1");
const cboCurrency2 = document.getElementById("cboCurrency2");
const txtCurrency2 = document.getElementById("txtCurrency2");
const rate = document.getElementById("rate");
const btnSwap = document.getElementById("btnSwap");

// API로 환율 정보 받아오기
async function getExchangeRate(fromCurrency, toCurrency) {
  const response = await fetch(
    `https://v6.exchangerate-api.com/v6/b559d464028fab1cbbae8dba/latest/${fromCurrency}`
  );
  const data = await response.json();
  const exchangeRate = data.conversion_rates[toCurrency];
  return exchangeRate;
}

function calculateClosure() {
  let exchangeRate, convertedAmount;

  return async function (e) {
    let inputId = e === undefined ? "txtCurrency1" : e.target.id;
    let fromCurrency =
      inputId === "txtCurrency1" ? cboCurrency1.value : cboCurrency2.value;
    let toCurrency =
      inputId === "txtCurrency1" ? cboCurrency2.value : cboCurrency1.value;
    let amount =
      inputId === "txtCurrency1" ? txtCurrency1.value : txtCurrency2.value;

    exchangeRate = await getExchangeRate(fromCurrency, toCurrency);
    convertedAmount = (amount * exchangeRate).toFixed(5);

    rate.innerText = `1 ${fromCurrency} = ${exchangeRate.toFixed(
      5
    )} ${toCurrency}`;

    if (inputId === "txtCurrency1") {
      txtCurrency2.value = convertedAmount;
    } else {
      txtCurrency1.value = convertedAmount;
    }
  };
}

const calculate = calculateClosure();

calculate();

cboCurrency1.addEventListener("change", calculate);
cboCurrency2.addEventListener("change", calculate);
txtCurrency1.addEventListener("input", function (e) {
  calculate(e);
});
txtCurrency2.addEventListener("input", function (e) {
  calculate(e);
});
btnSwap.addEventListener("click", swapCurrencies);

function swapCurrencies() {
  const temp = cboCurrency1.value;
  cboCurrency1.value = cboCurrency2.value;
  cboCurrency2.value = temp;

  calculate();
}
