//metodo de confirmaciones
confirm("tem certeza que vai salvar isso ai querido?");

// operador ternário é representado pela expressão; variavel = condiçao?verdadeiro:falso*/

var $idade=prompt("Qual a sua idade?");
var $x=($idade>=18?"maior de idade":"menor de idade");
alert("Você é \u00A0"+ $x);

//metodo Math - executa os comandos dos operadores
//abs - transforma o numero negativo em positivo

var $valor=Math.abs(-25);
alert("O resultado é:"+ $valor);
document.write("O resultado é: \u00A0"+ $valor);

//max - para mostrar o maior valor
var $valorMax=Math.max(12,36);
alert("O maior valor é:\u00A0"+ $valorMax);
document.write("<br>O maior valor é:\u00A0"+ $valorMax);

//min - para mostrar o menor valor
var $valorMin=Math.min(12,36);
alert("O menor valor é:\u00A0"+ $valorMin);
document.write("<br>O menor valor é:\u00A0"+ $valorMin)

//pow - potencia
var $valorPot=Math.pow(12,2);
alert("O valor é:\u00A0"+ $valorPot);
document.write("<br>O valor é:\u00A0"+ $valorPot);

//round - arredondar matematicamente
var $valorRound=Math.round(30.4);
alert("O valor arredondado é:\u00A0"+ $valorRound);
document.write("<br>O valor arredondado é: \u00A0"+ $valorRound);

//ceil - arredonda para cima
var $valorCeil=Math.ceil(30.1);
alert("O valor arredondado para cima é:\u00A0"+ $valorCeil);
document.write("<br>O valor arredondado é: \u00A0"+ $valorCeil);

//floor - arredonda para baixo
var $valorFloor=Math.floor(30.9);
alert("O valor arredondado para baixo é:\u00A0"+ $valorFloor);
document.write("<br>O valor arredondado para baixo é:\u00A0"+ $valorFloor);

//random - para trabalhar com valores aleatorios
var $valorAleat=Math.random();
alert("O valor aleatório é:\u00A0"+ $valorAleat);
document.write("<br>O valor aleatório é:\u00A0"+ $valorAleat);

//random - para trabalhar com valores aleatorios
var $valorAleato=Math.random()*80; //o *80 faz com q o numero aleatorio va de 0 a 80
alert("O valor aleatório é:\u00A0"+ $valorAleato);
document.write("<br>O valor aleatório é:\u00A0"+ $valorAleato);

//sqrt - raiz quadrada
var $valorRaiz=Math.sqrt(49);
alert("O valor da raiz quadrada é:\u00A0"+ $valorRaiz);
document.write("<br>O valor da raiz quadrada é:\u00A0"+ $valorRaiz); 

//cbrt - raiz cubica
var $valorCub=Math.cbrt(8);
alert("O valor da raiz cubica é:\u00A0"+ $valorCub);
document.write("<br>O valor da raiz cubica é:\u00A0"+ $valorCub);

//operadores de comparação

//operador igual = (verifica somente os dados)
var $y=6; //numero
var $k="6"; //string
alert($y==$k); //resposta true

//operador de identidade igual === (verifica se os dados e os TIPOS são iguais
var $y2=6;
var $k2="6";
alert($y2===$k2); //resposta false

//operador diferente != (verifica se os dados são diferentes)
var $j=6;
alert("O valor é igual?\u00A0"+($j!=6));

//operador identidade diferente !==
var $d=6;
alert("O valor é diferente?\u00A0"+($d!=="6"));

//operador maior >
var $c=prompt("Entre com um valor");
alert("O valor é maior q 20?"+($c>20));

//operador menor <
var $p=prompt("Enter with a number");
alert("Is the number lower than 10?"+($p<10));

//operador maior e igual >=
var $ç=prompt("Entre com um valorzito");
alert("O valor é maior ou igual a 10?"+($ç>=10));

//operador menor e igual <=
var $w=prompt("Entre com um valorzito");
alert("O valor é menor ou igual a 10?"+($ç<=10));

//operadores lógicos - and &&, or ||, not !

//exemplo &&
var $g=4;
alert("O valor é:"+(($g>=1)&&($g<=10))); 

var $gp=prompt("Entre com um valor");
alert("O valor é:"+(($gp>=1)&&($gp<=10)));

//exemplo ||
var $h=4;
alert("|||| O valor é:"+(($h>=1)||($h<=3)))

var $hp=prompt("Entre com um valor");
alert("|||||O valor é:(($hp>=1)||($hp<=5)));

/* exercice
1. Ler dois valores a partir do prompt, calcular e imprimir na tela:
a) A soma dos valores;
b) O produto delas;
c) O quociente entre eles;
d) A diferença entre eles.

2. Elabore um programa em JS que calcule a média aritmética de duas notas e exiba o resultado na tela.

3. Desenvolva um algoritmo em JS que a variável um receba o valor 5, a variável dois receba 3 e a variável três receba
o resultado da subtração de var 1 e var 2 e mostre na tela a frase "Resultado da subtração é: concatenado com o valor 
do resultado*/
