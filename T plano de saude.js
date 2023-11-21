function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    if (!isNaN(peso) && !isNaN(altura)) {
        var imc = peso / (altura * altura);
        document.getElementById("resultado").innerHTML = imc.toFixed(2);

        var classificacao = "";
        if (imc < 18.5) {
            classificacao = "Abaixo do Peso";
        } else if (imc >= 18.5 && imc < 24.9) {
            classificacao = "Peso Normal";
        } else if (imc >= 25 && imc < 29.9) {
            classificacao = "Sobrepeso";
        } else if (imc >= 30 && imc < 34.9) {
            classificacao = "Obesidade Grau I";
        } else if (imc >= 35 && imc < 39.9) {
            classificacao = "Obesidade Grau II";
        } else {
            classificacao = "Obesidade Grau III";
        }

        document.getElementById("classificacao").innerHTML = classificacao;  
    } else {
        alert("Por favor, insira valores válidos para peso e altura.");
    }
}

function calcularComparacao() {
    var idade = document.getElementById("idade").value;
    var imc = document.getElementById("imc").value;
  
    // Operadora A
    var planoA_Basico = 100 + (idade * 10 * (imc / 10));
    var planoA_Standard = (150 + (idade * 15)) * (imc / 10);
    var planoA_Premium = (200 - (imc * 10) + (idade * 20)) * (imc / 10);
  
    // Operadora B
    var fatorComorbidade = calcularFatorComorbidade(imc);
    var planoB_Basico = 100 + (fatorComorbidade * 10 * (imc / 10));
    var planoB_Standard = (150 + (fatorComorbidade * 15)) * (imc / 10);
    var planoB_Premium = (200 - (imc * 10) + (fatorComorbidade * 20)) * (imc / 10);
  
    // resultado 
    var maisbarato = "";

    maisbarato += " <b> Operadora A:<br></b>";
    maisbarato += "Plano Básico: R$ " + planoA_Basico.toFixed(2) + "<br>";
    maisbarato += "Plano Standard: R$ " + planoA_Standard.toFixed(2) + "<br>";
    maisbarato += "Plano Premium: R$ " + planoA_Premium.toFixed(2) + "<br><br>";

    maisbarato += " <b> Operadora B:<br></b>";
    maisbarato += "Plano Básico: R$ " + planoB_Basico.toFixed(2) + "<br>";
    maisbarato += "Plano Standard: R$ " + planoB_Standard.toFixed(2) + "<br>";
    maisbarato += "Plano Premium: R$ " + planoB_Premium.toFixed(2) + "<br><br>";

    document.getElementById("maisbarato").innerHTML = maisbarato;
  }
  
  function calcularFatorComorbidade(imc) {
    if (imc < 18.5) {
      return 10; // abaixo do peso
    } else if (imc < 24.9) {
      return 1; // normal
    } else if (imc < 29.9) {
      return 6; // sobrepeso
    } else if (imc < 34.9) {
      return 10; // obesidade
    } else if (imc < 39.9) {
      return 20; // obesidade mórbida grave
    } else {
      return 30; // obesidade mórbida muito grave
    }
  }