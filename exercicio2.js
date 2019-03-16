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
confirm("tem certeza que vai salvar isso ai querido?");
var $n1=parseInt(prompt("Entre com numero 1"));
var $n2=parseInt(prompt("Entre com n2"));
var $nsoma=$n1+$n2;
var $nproduto=$n1*$n2;
var $nquociente=$n1/$n2;
var $nsubtracao=$n1-$n2;
document.write("(1.a)A soma é\u00A0"+ $nsoma);
document.write("<br>(1.b)O produto é \u00A0"+ $nproduto);
document.write("<br>(1.c)O quociente é\u00A0" +$nquociente);
document.write("<br>(1.d)A diferença é\u00A0" +$nsubtracao);

var $n3=parseInt(prompt("Entre com a primeira nota"));
var $n4=parseInt(prompt("Entre com a segunda nota"));
var $nmedia=($n3+$n4)/2;
document.write("<br>(2)A média das duas notas é\u00A0:"+ $nmedia);
