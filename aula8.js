function changeText(id){
	id.innerHTML="mibr";
}

function displayDate(){
	document.getElementById("demo").innerHTML=Date();
}

function mOver(obj){
	obj.innerHTML="boa noite";
}

function mOut(obj){
	obj.innerHTML="boa tarde";
}

function mDown(ob){
	ob.style.backgroundColor="#DDA0DD";
	ob.innerHTML="fala ae";
}

function mUp(ob){
	ob.style.backgroundColor="#FFAA00";
	ob.innerHTML="afdafawe";
}

var nome;
var email;
var num=0;

function escrever(aff){
	info="Usuário numero:"+(++num)+"\n";
	info+="Nome:"+nome+"\n";
	info+="Email:"+email+"\n";
	aff.value+=info;
}

function mudaCor(cor){
	document.bgColor=cor;
}
