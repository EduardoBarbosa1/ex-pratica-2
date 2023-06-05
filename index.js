//exercicio 1 
temCelsius = 30;
tempFarhe = temCelsius * 1.8 + 32;
console.log(tempFarhe + "em fahrenheit")


//exercicio 2
var numeroDia = Number(1);
switch (numeroDia) {
    case 1:
        console.log("domingo");
        break;
    case 2:
        console.log("segunda")
        break;
    case 3:
        console.log("terça")
        break;
    case 4:
        console.log("quarta")
        break;
    case 5:
        console.log("quinta")
        break;
    case 6:
        console.log("sexta")
        break;
    case 7:
        console.log("sabado")
        break;
    default:
        diaSemana = valor_invalido;
        break;
}


// //exercicio3
var numero = -22;
if (numero > 0) {
    console.log("O numero é positivo");

} else if (numero < 0) {
    console.log("O numero é negativo");
} else {
    console.log("O número é zero")
}

//exercicio 4 
var custoFabrica = parseFloat(prompt("digite o valor total"))
var porcentagem = custoFabrica / 100
var distribuidor = 28 * porcentagem
var impostos = 45 * porcentagem

console.log(custoFabrica + distribuidor + impostos + "  é o valor total ");


// //exercicio 5
var altura = parseFloat(prompt("Digite sua altura em metros:"));
var peso = parseFloat(prompt("Digite seu peso em quilogramas:"));
var imc = peso / (altura * altura);
if (imc < 18.5) {
    console.log("Você está abaixo da faixa de peso ideal");
} else if (imc >= 18.5 && imc <= 24.99) {
    console.log("Você está dentro da faixa de peso ideal");
} else {
    console.log("Você está acima da faixa de peso ideal");
}


// //exercicio 6 
var numero1 = parseFloat(prompt("numero 1"))
var numero2 = parseFloat(prompt("numero 2"))
var soma = numero1 + numero2
var sub = numero1 - numero2
var mult = numero1 * numero2
var divi = numero1 / numero2

console.log("adição  " + soma)
console.log("subtração  " + sub)
console.log("multiplicação  " + mult)
console.log("divisão " + divi)

//exercicio 7
var valorTotal = 1000
var retirada = parseFloat(prompt("Retirada"))
var taxaRet = parseFloat(4.5)
if (retirada + taxaRet > valorTotal) {
    console.log("não é possivel fazer a retirada")
} else {
    console.log("saldo restante  " + (valorTotal - retirada - taxaRet) + "  R$")
}


// exexrcicio 8


//exercicio 9
var velocidade = parseFloat(prompt("Velocidade"))
var taxa = velocidade % 80 * 5
if (velocidade > 80) {
    console.log("voce foi multado, valor:  " + taxa)
}

