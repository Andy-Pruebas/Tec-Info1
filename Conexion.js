var http= require ('http');
var fs=require('fs');

http.createServer(function(solicitud,respuesta){
	var url = solicitud.url;
	if(url=='/'){
		fs.readFile('./Index.html',function(error,html){
			respuesta.write(html);
			respuesta.end();
	});}
	if(url=='/pais'){
		fs.readFile('./pais.html',function(error,html){
			respuesta.write(html);
			respuesta.end();
	});}
	if(url=='/causas'){
		fs.readFile('./causas.html',function(error,html){
			respuesta.write(html);
			respuesta.end();
	});}
	if (url=='/sintomas'){
		fs.readFile('./sintomas.html',function(error,html){
			respuesta.write(html);
			respuesta.end();
	});}
	if (url=='/afectados'){
		fs.readFile('./afectados.html',function(error,html){
			respuesta.write(html);
			respuesta.end();
	});}
}).listen(8080);

console.log('Servidor Activo'); 
