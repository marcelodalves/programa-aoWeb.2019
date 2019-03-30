/*1. Construir um programa em JS que leia uma informação compreendida entre 1 e 12 e imprima o mês correspondente.
Caso seja digitada uma informação inválida, imprimir uma mensagem esclarecedora */

var $mes=prompt("Entre com o numero (1-12) correspondente ao mês");
switch($mes){
	case "1":
	alert("Janeiro");
	break;
	
	case "2":
	alert("Fevereiro");
	break;
	
	case "3":
	alert("Março");
	break;
	
	case "4":
	alert("Abril");
	break;
	
	case "5":
	alert("Maio");
	break;
	
	case "6":
	alert("Junho");
	break;
	
	case "7":
	alert("Julho");
	break;
	
	case "8":
	alert("Agosto");
	break;
	
	case "9":
	alert("Setembro");
	break;
	
	case "10":
	alert("Outubro");
	break;
	
	case "11":
	alert("Novembro");
	break;
	
	case "12":
	alert("Dezembro");
	break;
	
	default:
	alert("Numero nao corresponde a mês!");
	break;
}

/*2. Calcular a quantidade de dinheiro gasta por um fumante.
Dados: o número de anos que ele fuma, o número de cigarros fumados por dia e o preço de uma carteira. */

var $ano=prompt("A quantos anos você fuma?"); 
var $anoparadias=$ano*365;						
var $cig=prompt("Quantos cigarros você fuma por dia?");      
var $carteira=prompt("Qual é o preço da carteira de cigarro que você compra?");   
var $formula = ($carteira/20)*$cig;
var $formula1 = $formula*$anoparadias;
alert("Voce gastou " +$formula1 + " reais");



/*3. Sabendo que Amália tem x anos e Joaquim y anos, fazer um programa JS que verifique a idade dos 2 amigos e exiba o nome do mais velho na tela.*/

var $amalia=prompt("Entre com a idade de Amalia");
var $joaquim=prompt("Entre com a idade de Joaquim");

if ($amalia>$joaquim){
	alert("Amália é mais velha!");
}
else{
	alert("Joaquim é mais velho!");
}


/*4 Faça uma página JS que sorteie um número aleatório entre 1 e 14 e verifique se ele é múltiplo de 3 ou 5. */

var $numAleat=Math.floor(Math.random(1) * 14)
alert("O valor aleatório é:\u00A0"+ $numAleat);

var $restotres = $numAleat%3;
var $restocinco = $numAleat%5;

if ($restotres==0){
	alert("O valor aleatório "+ $numAleat +" é multiplo de 3");
}

else if ($restocinco==0){
	alert("O valor aleatório "+ $numAleat +" é multiplo de 5");
}
else{
	alert("O valor aleatorio nao é multiplo de 3 nem de 5");
}

/*5. O triângulo é uma figura geométrica composta por três retas.Ele pode ser classificado conforme sua proporcionalidade.
Equilátero
Isósceles
Escaleno
Faça um prompt no qual o usuário informará três números que representam cada um dos lados de um triângulo e determine sua classificação de proporcionalidade*/

var $n1=prompt("Entre com a medida do lado 1 do triângulo:");
var $n2=prompt("Entre com a medida do lado 2 do triângulo:");
var $n3=prompt("Entre com a medida do lado 3 do triângulo:");

if(($n1==$n2)&&($n2==$n3)){
	alert("O triângulo é EQUILÁTERO");
}
else if(($n1==$n2)||($n2==$n3)||($n2==$n3)){
	alert("O triângulo é ISÓSCELES");
}
else{
	alert("O triângulo é ESCALENO");
}
