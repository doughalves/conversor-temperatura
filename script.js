function Converter() {
    var valorCelsius = parseFloat(document.getElementById("valor").value);
  
    // Calculo convertendo Celsius em Fahrenheit e imprimindo o resultado no console
    var valorFahrenheit = (valorCelsius * (9 / 5) + 32).toFixed(2);
    console.log(valorFahrenheit);
  
    // Calculo convertendo Celsius em Kelvin e imprimindo o resultado no console
    var valorKelvin = (valorCelsius + 273.15).toFixed(2);
    console.log(valorKelvin);
  
    // Enviando para o HTML o resultado da conversão de Celsius em Fahrenheit
    var elementoValorConvertido = document.getElementById("resultadoFahrenheit");
    elementoValorConvertido.innerHTML = valorCelsius + "º Celcius equivalem a " + valorFahrenheit + "º em Fahrenheit";
  
    // Enviando para o HTML o resultado da conversão de Celsius em Kelvin
    var elementoValorConvertido = document.getElementById("resultadoKelvin");
    elementoValorConvertido.innerHTML = "E a " + valorKelvin + "º em Kelvin";
  }
  