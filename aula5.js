//método construtor

var $frutas=new Array("Maça","Banana","Pera","Maça","Abacaxi");
document.write("Metodo construtor: "+$frutas);
//mostra o elemento em uma determinada posição
document.write("<hr>O elemento [1] é: "+$frutas[1]);

//Arrays indexados
//funçao length

document.write("<hr>A quantidade de elementos é: "+$frutas.length);

//função indexOf - para identificar qual a posição do elemento
document.write("<hr>A posição do elemento é: "+$frutas.indexOf("Abacaxi"));

//funçao lastIndexOf só irá mostrar o ultimo elemento declarado se houver repetiçao
document.write("<hr>A posição do ultimo elemento é: </font>"+$frutas.lastIndexOf("Maça"));

//Método literal []

var $frutas=["Maça","Banana","Pera","Abacaxi"];
document.write("<hr>Metodo literal: "+$frutas);

//uma string também é um array

var $s="Açai";
document.write("<hr>A quantidade de elementos (letras) do array 'Açai' é: "+$s.length);

//criando array com indice

var $frutas=new Array();
$frutas[0]="Maça";
$frutas[1]="Banana";
$frutas[2]="Pera";
$frutas[3]="Abacaxi";
document.write("<hr>Usando indice: "+$frutas);

//funçao de ordenação
//tras pra frente - REVERSE

document.write("<hr>De trás pra frente: "+$frutas.reverse())

//SORT - ordem alfabetica

document.write("<hr>Ordem alfabética: "+$frutas.sort());

//Cortes e Emendas
//metodo JOIN - para alternar o separador dos elementos
var $frutas=["Maça","Banana","Abacaxi","Morango"];
document.write("<hr>"+$frutas.join("-"));
document.write("<hr>"+$frutas.join(";"));
document.write("<hr>"+$frutas.join("♥"));

//concat - para inserir elementos no array

var $frutas=["Maça","Banana","Pera","Abacaxi"];
document.write("<hr>"+$frutas.concat("Uva,Morango"));

//slice - retorna o elemento a partir de onde foi definido
document.write("<hr>SLICE - "+$frutas.slice(2));

//splice - é utilizado para remover elementos do array e incluir novos elementos

var $frutas=["Maça","Banana","Abacaxi","Morango"];
document.write("<hr>SPLICE - "+$frutas.splice(1,2,"Açai","Manga"));
/*o primeiro valor é a posição, o segundo valor é a quantidade de elementos que vou excluir*/
document.write("<hr>"+$frutas);

//Fila Fifo (first in first out) - o primeiro elemento a entrar e o primeiro a sair

//método push - adiciona elemento no final da fila

var $aluno=["Lhais","Mariana","Lorena","Thais","Juliana"];
document.write("<hr>O novo aluno é: "+$aluno.push("Carol"));
document.write("<hr>A nova lista de aluno é: "+$aluno.join(", "));

//metodo shift - apaga o primeiro elemento da fila
document.write("<hr>O (primeiro) aluno excluido é: "+$aluno.shift());
document.write("<hr>A nova lista de aluno é: "+$aluno.join("☻"));

//metodo pop - apaga o ultimo elemento da fila
document.write("<hr>O (ultimo) aluno excluido é: "+$aluno.pop());
document.write("<hr>A nova lista de aluno é: "+$aluno.join(", "));

//metodo unshift - adiciona elemento no inicio da fila
var $aluno=["Lhais","Mariana","Lorena","Thais","Juliana"];
document.write("<hr>O aluno excluido é: "+$aluno.unshift("Julia"));
document.write("<hr>A nova lista é: "+$aluno.join(", "));



/*Desafio - Criar um vetor com 20 elementos inteiros. Imprimir o maior e o menor valor, sem ordenar, o percentua de numeros pares e
a media dos elementos do vetor.*/

for (i=0; i<5; i++){
	var elemento=prompt(("Entre com o numero"));
}

var $n1=(prompt("Entre com o n1 a ser analisado"));
var $n2=(prompt("Entre com o n2 a ser analisado"));
var $n3=(prompt("Entre com o n3 a ser analisado"));
var $n4=(prompt("Entre com o n4 a ser analisado"));
var $n5=(prompt("Entre com o n5 a ser analisado"));
var $maior=Math.max($n1,$n2,$n3,$n4,$n5);
var $menor=Math.min($n1,$n2,$n3,$n4,$n5);
document.write("<hr>O maior valor é "+$maior);
document.write("<hr>O menor valor é "+$menor);
