function celsiusToFarenheit(celsius) {
  return celsius * 1.8 + 32;
}

function farenheitToCelsius(farenheit) {
  return (farenheit - 32) / 1.8;
}

let farenheitValue = celsiusToFarenheit(
  prompt("Введите температуру в градусах Цельсия:")
);
console.log(farenheitValue);

let celsiusValue = farenheitToCelsius(
  prompt("Введите температуру в градусах Фаренгейта:")
);
console.log(celsiusValue);
