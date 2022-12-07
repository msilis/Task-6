function clickHandler() {
  //Get inputs from user
  const initialTemp = document.getElementById("temperature-picker").value;
  const convertTemp = document.getElementById("convert-temp-picker").value;
  const inputTemp = document.getElementById("temp-input-box").value;
  console.log(initialTemp);
  console.log(convertTemp);
  console.log(inputTemp);
  const resultText = `${inputTemp}\u00B0${initialTemp}`;
//Temperature conversion calculations
  const celsiusToFahrenheit = inputTemp * (9 / 5) + 32;
  const celsiusToKelvin = Number(inputTemp) + 273.15;
  const fahrenheitToCelsius = (Number(inputTemp) - 32) * (5 / 9);
  const fahrenheitToKelvin = (Number(inputTemp) + 459.67) * (5 / 9);
  const kelvinToCelsius = Number(inputTemp) - 273.15;
  const kelvinToFahrenheit = Number(inputTemp) * (9 / 5) - 459.67;

  // if checks
  if (initialTemp == "C" && convertTemp == "F") {
    console.log(inputTemp * (9 / 5) + 32);
    document.getElementById("temp-result").innerHTML = ` ${resultText} is ${celsiusToFahrenheit.toFixed(2)}\u00B0${convertTemp}`;
  } else if (initialTemp == "C" && convertTemp == "K") {
    console.log(Number(inputTemp) + 273.15);
    document.getElementById("temp-result").innerHTML = ` ${resultText} is ${celsiusToKelvin.toFixed(2)}\u00B0${convertTemp}`;
  } else if (initialTemp == "F" && convertTemp == "C") {
    console.log((Number(inputTemp) - 32) * (5 / 9));
    document.getElementById("temp-result").innerHTML = ` ${resultText} is ${fahrenheitToCelsius.toFixed(2)}\u00B0${convertTemp}`;
  } else if (initialTemp == "F" && convertTemp == "K") {
    console.log((Number(inputTemp) + 459.67) * (5/9));
    document.getElementById("temp-result").innerHTML = ` ${resultText} is ${fahrenheitToKelvin.toFixed(2)}\u00B0${convertTemp}`;
  } else if (initialTemp == "K" && convertTemp == "C") {
    console.log(Number(inputTemp) - 273.15);
    document.getElementById("temp-result").innerHTML = ` ${resultText} is ${kelvinToCelsius.toFixed(2)}\u00B0${convertTemp}`;
  } else if (initialTemp == "K" && convertTemp == "F") {
    console.log(Number(inputTemp) * (9 / 5) - 459.67);
    document.getElementById("temp-result").innerHTML = ` ${resultText} is ${kelvinToFahrenheit.toFixed(2)}\u00B0${convertTemp}`;
  } else {
    console.log("Use a calculator!");
  }
}

//Button press
document
  .getElementById("convert-button")
  .addEventListener("click", clickHandler);
