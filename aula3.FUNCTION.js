//Função.

// S O M A
function somar($x,$y){
	document.write("A soma de x e y é igual a:\u00A0"+($x+$y));
}
somar(10,30);

// passando os valores pelo prompt
function somar($x,$y){
	document.write("<br>A soma de X e Y é igual a:\u00A0"+($x+$y));
}
var $x=parseInt(prompt("Entre com o valor de X para somar: "));
var $y=parseInt(prompt("Entre com o valor de Y para somar: "));
somar($x,$y);


// S U B T R A Ç A O
function sub($a,$b){
	document.write("<br>A subtração de a e b é igual a:\u00A0"+($a-$b));
}
sub(33,10);

// passando os valores pelo prompt
function sub($a,$b){
	document.write("<br>A subtração de a e b é:\u00A0"+($a-$b));
}
var $a=prompt("Entre com o valor de A para subtrair: ");
var $b=prompt("Entre com o valor de B subtrair: ");
sub ($a,$b);


// M U L T I P L I C A Ç Ã O

function mult($p,$q){
	document.write("<br>A multiplicação de p e q é:\u00A0"+($p*$q));
}
mult(10,5);

// passando os valores pelo prompt
function mult($p,$q){
	document.write("<br>A multiplicação de p e q pelo prompt é:\u00A0"+($p*$q));
}
var $p=prompt("Entre com o valor de P para multiplicar:");
var $q=prompt("Entre com o valor de Q para multiplicar:");
mult ($p,$q);

// D I V I S Ã O

function div($d,$v){
	document.write("<br>A divisão de D e V é:\u00A0"+($d/$v));
}
div(50,10);

//passando os valores pelo mprompt
function div($d,$v){
	document.write("<br>A divisão de D e V pelo prompt é:\u00A0"+($d/$v));
}
var $d=prompt("Entre com o valor de D para dividir:");
var $v=prompt("Entre com o valor de V para dividir:");
div($d,$v);

//function return divisão

function divz($g,$h){
return $g/$h
}
var $g=prompt("Entre com o valor de g:");
var $h=prompt("Entre com o valor de h:");
document.write("<br>A divisão de G e H é:\u00A0"+divz($g,$h));

//function return soma
function somarz($m,$n){
	return $m+$n
}
var $m=parseInt(prompt("Entre com o valor de M:"));
var $n=parseInt(prompt("Entre com o valor de N:"));
document.write("<br>A soma de M e N é:\u00A0"+somarz($m,$n));

//function return sub
function subz($k,$l){
return $k-$l
}
var $k=prompt("Entre com o valor de K:");
var $l=prompt("Entre com o valor de L:");
document.write("<br>A subtração de "+$k+ "e" +$l+" é:\u00A0"+subz($k,$l));


//Condicional IF

var $idade=10;
if($idade<=12){
	document.write("<br>criança");
}

//entrando com os valores pelo prompt
var $idade=prompt("Entre com a sua idade:");
if($idade<=12){
	document.write("<br>criança");
}
else if($idade>12 && $idade<=16){
	document.write("<br>adolescente");
}
else{
	document.write("<br>adulto");
}
