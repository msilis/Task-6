//const resultText = document.getElementById("temp-result").innerHTML=``

function clickHandler() {
  //Get inputs from user
  const initialTemp = document.getElementById("temperature-picker").value;
  const convertTemp = document.getElementById("convert-temp-picker").value;
  const inputTemp = document.getElementById("temp-input-box").value;
  console.log(initialTemp);
  console.log(convertTemp);
  console.log(inputTemp);
  if (initialTemp == "celsius" && convertTemp == "fahrenheit") {
    console.log(inputTemp * (9 / 5) + 32);
    document.getElementById("temp-result").innerHTML="This should work";
  } else if (initialTemp == "celsius" && convertTemp == "kelvin") {
    console.log(Number(inputTemp) + 273.15);
  } else if (initialTemp == "fahrenheit" && convertTemp == "celsius") {
    console.log((Number(inputTemp) - 32) * (5 / 9));
  } else if (initialTemp == "fahrenheit" && convertTemp == "kelvin") {
    console.log(Number(inputTemp) + 459.67 * (5 / 9));
  } else if (initialTemp == "kelvin" && convertTemp == "celsius") {
    console.log(Number(inputTemp) - 273.15);
  } else if (initialTemp == "kelvin" && convertTemp == "fahrenheit") {
    console.log(Number(inputTemp) * (9 / 5) - 459.67);
  } else {
    console.log("Use a calculator!");
  }
}

document
  .getElementById("convert-button")
  .addEventListener("click", clickHandler);
