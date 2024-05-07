function convertir() {
    var numero = parseInt(document.getElementById('numero').value);
    var baseEntrada = parseInt(document.getElementById('baseEntrada').value);
    var baseSalida = parseInt(document.getElementById('baseSalida').value);
    var resultado = "";

    // Paso a paso
    resultado += `Paso 1: Convertir ${numero} de base ${baseEntrada} a base 10.<br>`;
    var numeroBase10 = parseInt(numero, baseEntrada);
    resultado += `Resultado del paso 1: ${numeroBase10} en base 10.<br><br>`;

    // Paso 2
    resultado += `Paso 2: Convertir ${numeroBase10} de base 10 a base ${baseSalida}.<br>`;
    var resultadoFinal = numeroBase10.toString(baseSalida);
    resultado += `Resultado final: ${resultadoFinal} en base ${baseSalida}.<br>`;

    // Mostrar resultado
    document.getElementById('resultado').innerHTML = resultado;
}

function sumar() {
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;
  
    if (!validarBinario(numero1) || !validarBinario(numero2)) {
      alert("Por favor, ingresa solo números binarios (0 y 1).");
      return;
    }
  
    const resultado2 = parseInt(numero1, 2) + parseInt(numero2, 2);
    document.getElementById("resultado2").value = resultado2.toString(2);
  }
  
  function restar() {
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;
  
    if (!validarBinario(numero1) || !validarBinario(numero2)) {
      alert("Por favor, ingresa solo números binarios (0 y 1).");
      return;
    }
  
    const resultado2 = parseInt(numero1, 2) - parseInt(numero2, 2);
    document.getElementById("resultado2").value = resultado2.toString(2);
  }
  
  function validarBinario(numero) {
    return /^[01]+$/.test(numero);
  }

  function calcularComplemento() {
    const numerocb = document.getElementById("numerocb").value;
    const base = parseInt(document.getElementById("base").value);
  
    if (!validarBinario(numerocb)) {
      alert("Por favor, ingresa solo un número binario (0 y 1).");
      return;
    }
  
    const n = numerocb.length;
    const complemento = Math.pow(base, n) - parseInt(numerocb, 2);
    document.getElementById("resultado3").value = complemento.toString(2);
  }

  function calcularComplementoBaseMenosUno() {
    const numerocb = document.getElementById("numerocb").value;
    const base = parseInt(document.getElementById("base").value);
  
    if (!validarBinario(numerocb)) {
      alert("Por favor, ingresa solo un número binario (0 y 1).");
      return;
    }
  
    const n = numerocb.length;
    const complemento = Math.pow(base, n) - 1 - parseInt(numerocb, 2);
    document.getElementById("resultado3").value = complemento.toString(2);
  }
  
  function validarBinario(numerocb) {
    return /^[01]+$/.test(numerocb);
  }