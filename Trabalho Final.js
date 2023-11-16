function calcularPlanos() {
    var idade = parseFloat(document.getElementById("idade").value);
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var IMC = peso / (altura * altura);
    var ab = 100 + (idade * 10 * (IMC / 10));
    var as = (150 + (idade * 15)) * (IMC / 10);
    var ap = (200 - (IMC * 10) + (idade * 20)) * (IMC / 10); 
    
    var fc = "";
        if (imc < 18.5) {
            fc = 10;
        } else if (imc >= 18.5 && imc < 24.9) {
            fc = 1;
        } else if (imc >= 25 && imc < 29.9) {
            fc = 6;
        } else if (imc >= 30 && imc < 34.9) {
            fc = 10;
        } else if (imc >= 35 && imc < 39.9) {
            fc = 20;
        } else {
            fc = 30;
        }
    
    var bb = 100 + (fc * 10 * (IMC / 10));
    var bs = (150 + (fc * 15)) * (IMC / 10);
    var bp = (200 - (200 - (IMC * 10) + (fc * 20)) * (IMC / 10));

}
