function limpar(){
	document.getElementById('campinho').value='';
}

function preencher(valor){
	document.getElementById('campinho').value+=valor;
}

function calcular(){
	var $resultado = 0;
	$resultado = document.getElementById('campinho').value;
	document.getElementById('campinho').value='';
	document.getElementById('campinho').value=eval($resultado);
}

function calcularIM(){
	var quilo = document.getElementById('quilo').value;
	var altura = document.getElementById('altura').value;
	var quadrado = altura * altura;
	var calculoIMC = quilo/quadrado;
	document.getElementById('imc').value=calculoIMC;
}
