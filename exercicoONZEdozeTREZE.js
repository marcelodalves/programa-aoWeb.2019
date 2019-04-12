//11.Sabendo que, em um determinado dia, a cotação de 1 dólar é de R$3.98, desenvolva duas funções que convertam um valor de dólar para real e de real para dólar
//arredondando para até 2 casas decimais.
function x($dolar,$dol){
	alert(""+$dol+" dolares em reais é: "+($dolar*$dol));
}
var $dol=prompt("Entre com o valor em DOLAR:");
x (3.98,$dol);

function y($reais,$rel){
	alert(""+$rel+" reais em dolares é: "+($rel/$reais));
}
var $rel=prompt("Entre com o valor em REAIS");
y (3.98,$rel);

//Escreva um programa em JavaScript, que entre com nome, sexo e idade de uma pessoa. Se a pessoa for do sexo feminino e tiver menos que 25 anos, imprimir nome e a mensagem: ACEITA.
//Caso contrário, imprimir nome e a mensagem: NÃO ACEITA.

var $sexo=prompt("Caso for FEMININO, digite 1. Masculino, digite 0");
var $idade=prompt("Entre com a idade");

if($sexo==1&&$idade<25){
	alert("ACEITA!");
}
else{
	alert("NÃO ACEITA!");
}

/*13. Elaborar um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser pago por cliente.*/
var $conta=prompt("Entre com o valor da conta em R$");
var $cliente=prompt("Entre com o numero de clientes");
var $total=$conta/$cliente;
alert("Cada cliente irá pagar "+$total+" reais");/*
