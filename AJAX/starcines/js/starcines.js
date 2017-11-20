var http_request = false;

function makeRequest(url) {


    http_request = false;

    if (window.XMLHttpRequest) { // Mozilla, Safari,...
        http_request = new XMLHttpRequest();
        if (http_request.overrideMimeType) {
            http_request.overrideMimeType('application/json');
            // Ver nota sobre esta linea al final
        }
    } else if (window.ActiveXObject) { // IE
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }
    }

    if (!http_request) {
        alert('Falla :( No es posible crear una instancia XMLHTTP');
        return false;
    }
    http_request.onreadystatechange = alertContents;
    http_request.open('GET', url, true);
    http_request.send(null);

}

function alertContents() {
    if (http_request.readyState == 4) {
        if (http_request.status == 200) {
            /*Aquí deben procesar el JSON y mostrar la respuesta en el HTML
            Utilice JSON.parse() para convertir la respuesta en un objeto
            */
              var funcion=JSON.parse(http_request.response);
              console.log(funcion); 
    
                
               /* var tbody=document.getElementById("cuerpotabla-disponibilidad");
                for(var cont=0;cont<funcion.length;cont++){
                var newTr=document.createElement("tr");
                var num=document.createElement("th");
                num.appendChild(document.createTextNode(cont));
                var hora=document.createElement("th");
                hora.appendChild(document.createTextNode(funcion[cont].hora));
                var tipo=document.createElement("th");
                tipo.appendChild(document.createTextNode(funcion[cont].tipo));
                var idioma=document.createElement("th");
                idioma.appendChild(document.createTextNode(funcion[cont].idioma));
                newTr.appendChild(num);
                newTr.appendChild(hora);
                newTr.appendChild(tipo);
                newTr.appendChild(idioma);
                tbody.appendChild(newTr);

    }*/
        } else {
            alert('Hubo problemas con la petición.');
        }
    }
}

window.onload = function() {
	

		    /*
		- Listener: Al terminar la carga de la página

		Agregar la redirección el contenido a wikipedia: https://es.wikipedia.org/wiki/Asesinato_en_el_Orient_Express
		al evento click del botón "Ver página de wikipedia"
		*/
	var link = document.getElementById('wikipedia');
    link.onclick = function() {
       window.location.href="https://es.wikipedia.org/wiki/Asesinato_en_el_Orient_Express";
    }
}
    
      // makeRequest('../../data/horarios.json');
       
    

/*
- Listener: Al terminar la carga de la página

Agregar la redirección el contenido a wikipedia: https://es.wikipedia.org/wiki/Asesinato_en_el_Orient_Express
al evento click del botón "Ver página de wikipedia"
*/

/*
- Listener: Al terminar la carga de la página

Agregar el contenido del archivo horarios.js
*/

/*
- Como atributo de una etiqueta

Al pasar el mouse sobre el contenido, 
mostrar la cantidad de puestos disponibles 
en el archivo puestos.xml

Cambiar la visibilidad de la tabla 
*/