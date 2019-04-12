//Operador this - traz o titulo da página

alert(this.document.title);

//delete - para remover um elemento

Pessoa={
	nome:"Thereza",
	email:"thereza@gmail.com",
	endereço:"Rua a 90"
		}
		alert("O nome é "+(Pessoa.nome));
		delete Pessoa.nome;
		alert("O email é "+(Pessoa.email));

//Operador in- para verificar se a propriedade existe

alert("nome" in Pessoa);
alert("endereço" in Pessoa);

//Condição while - enquanto for verdadeiro executa

var i=0;
while(i<3){
	alert(i);
	i++;
}

var texto="";
var i=0;
while(i<=3){
	texto=texto+i;
	i++;
}
alert(texto);

var texto="";
var i=3;
while(i>=0){
	texto=texto+i;
	i--;
}
alert(texto);

//switch

var tecnologia=prompt("Entre com a tecnologia");
switch(tecnologia){
	case "JavaScript":
	case "C++":
	case "C":
	alert("Linguagem de Programação");
	break;
	case "MySql":
	case "Oracle":
	case "SQL Server":
	alert("Banco de Dados");
	break;
	default:
	alert("Tecnologia desconhecida");
}

//Estrutura de Repetiçao for

for(var i=0; i<10; i++){
	alert(i);
}

var texto="";
for(var i=0; i<10; i++){
	texto=texto+i+",";
}
alert(texto);

// para tirar a virgula depois do 9

var texto="";
for(var i=0; i<10; i++){
	if(i==9){
		texto=texto+i;
}
else{
	texto=texto+i+",";
}
}
alert(texto);

//verificar se os numeros são pares 1 a 20

var texto="";
for(var i=0; i<=20; i++){
	if(i%2==0){
		if(i==20){
		texto=texto+i	
}
else{
	texto=texto+i+",";
}
}
}
alert(texto);
