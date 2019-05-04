//metodo get do Date
var $data = new Date();  
alert($data.getDay()); //se for Sexta, por exemplo, mostra 5. Pois domingo = 0, seg = 1.... etc
alert($data.getMonth());
alert($data.getFullYear());

//outra maneira de mostrar
var $hoje = new Date();
alert("O ano atual é: "+$hoje.getFullYear());

//pra mostrar o dia escrito e não através de numeros
var $data = new Date();
var $dias=["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
alert($dias[$data.getDay()]);

//pra mostrar o mes escrito e nao atraves de numeros
var $data = new Date();
var $meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto"];
alert($meses[$data.getMonth()]);

//GMTString - para definir o fuso horario internacional
var $data=new Date();
alert($data.toGMTString());

//LocaleString - para definir o fuso horario local (Brasilia)
var $data = new Date();
alert($data.toLocaleString());

//getHours - retornar a HORA (nao retorna minutos nem segundos)
var $data = new Date();
alert($data.getHours());

//getUTCHours - recuperar a hora internacional
var $data = new Date();
alert($data.getUTCHours());

//getSeconds - retorna os segundos
var $data = new Date();
alert($data.getSeconds());

//getTime - retorna os milisegundos
var $data = new Date();
alert($data.getTime());
