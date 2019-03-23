//QUESTAO 1 COM OPERADOR TERNARIO

var $n1=parseInt(prompt("(QUESTÃO 1) Qual a nota 1?"));
var $n2=parseInt(prompt("Qual a nota 2?"));
var $media=($n1+$n2)/2;
var $x=($media>=7?"aprovado":"reprovado");
alert("A sua média é "+$media+" e você foi\u00A0"+ $x);

//QUESTAO 2

var $produto=prompt("(QUESTÃO 2) Entre com o preço do produto");
var $desconto=($produto/100)*10;
var $desconto2=$produto-$desconto;
alert("10% de "+$produto+" é "+$desconto+", logo o preço do produto com desconto é: "+$desconto2);

//QUESTAO 3

var $n3=parseInt(prompt("(QUESTÃO 3) Entre com o valor 1:"));
var $n4=parseInt(prompt("Entre com o valor 2:"));
var $nsoma=$n3+$n4;

if($nsoma<=20){
	alert(""+$nsoma+" - 5 é igual a: "+($nsoma-5));
}
else{
alert(""+$nsoma+" + 8 é igual a: " +($nsoma+8));
}

//QUESTAO 4

var $n5=prompt("(QUESTÃO 4) Entre com o valor:");
if($n5>10){
	alert("O valor é maior que 10");
}
else{
	alert("O valor é menor que 10");
}

//QUESTAO 5

var $altura=prompt("(QUESTÃO 5) Entre com a sua altura");
var $sexo=prompt("Digite 1 se você for mulher ou 0 se for homem");

if($sexo==0){
	$pesoideal=(72.7*$altura)-58;
	alert("O peso ideal é: "+$pesoideal);
}
else if($sexo==1){
	$pesoideal2=(62.1*$altura)-44.7;
	alert("O peso ideal é: "+$pesoideal2);
}
else{
	alert("Entre APENAS com 0 ou 1!");
}
