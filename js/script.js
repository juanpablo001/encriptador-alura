/* funciones lógicas del encriptador-desencriptador */

/* obtengo el estado en los textareas html identificados como clases */
const textoEntrada = document.querySelector(".entrada");
const textoSalida = document.querySelector(".salida");
/* obtengo el estado del elemento para recargar página */
const recarga = document.querySelector(".recarga");

/* Evento para recargar página a petición */
recarga.addEventListener('click', _ => { location.reload(); });

/* función para inicializar el encriptador */
function limpiar() {
	if (textoSalida.value != "") {
		document.querySelector(".advertencia").style.display = "none";
	} else {
        document.querySelector(".btncopia").style.display = "none";
    }
}
/* función para encriptar texto */
function encriptar(TextoAEncriptar) {
	let codigoEncriptacion = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

	/* toLowerCase() devuelve el valor en minúsculas de la cadena que realiza la llamada */
	TextoAEncriptar = TextoAEncriptar.toLowerCase();

	//console.log(TextoAEncriptar);

	for (let i = 0; i < codigoEncriptacion.length; i++) {
		if (TextoAEncriptar.includes(codigoEncriptacion[i][0])) {
			TextoAEncriptar = TextoAEncriptar.replaceAll(codigoEncriptacion[i][0],codigoEncriptacion[i][1]);
			//console.log(i,TextoAEncriptar);
		}
	}
	return TextoAEncriptar;
}
/* función para desencriptar texto */
function desencriptar(textoADesencriptar) {
	let codigoDesencriptar = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];

	//console.log(textoADesencriptar);

	for (let j=0; j < codigoDesencriptar.length; j++) {
		if (textoADesencriptar.includes(codigoDesencriptar[j][0])) {
			textoADesencriptar = textoADesencriptar.replaceAll(codigoDesencriptar[j][0],codigoDesencriptar[j][1]);
			//console.log(textoADesencriptar);
		}
	}
	return textoADesencriptar;
}
/* función para copiar selección en el clipboard */
function copiar() {
	let copiarTexto = document.querySelector(".salida");

	copiarTexto.select();

	navigator.clipboard.writeText(copiarTexto.value);

	return copiarTexto;
}
/* función para activar con el boton de encriptar */
function botonEncriptar() {
	if (textoEntrada.value == "") {
		//console.log("vacio");
		document.querySelector(".advertencia").style.display = "initial";
        document.querySelector(".btncopia").style.display = "none";
		textoSalida.value = "";
	} else {
		document.querySelector(".advertencia").style.display = "none";
		const textoEncriptado = encriptar(textoEntrada.value);
		textoSalida.value = textoEncriptado;
        document.querySelector(".btncopia").style.display = "initial";
	}
}
/* función para activar con el botón desencriptar */
function botonDesencriptar() {
	if (textoEntrada.value == "") {
		//console.log("vacio");
		document.querySelector(".advertencia").style.display = "initial";
        document.querySelector(".btncopia").style.display = "none";
		textoSalida.value = "";
	} else {
		document.querySelector(".advertencia").style.display = "none";
		const textoDesencriptado = desencriptar(textoEntrada.value);
		textoSalida.value = textoDesencriptado;
        document.querySelector(".btncopia").style.display = "initial";
	}
	
}
/* función para activar con el botón copiar */
function botonCopiar() {
	if (textoSalida.value == "") {

	} else {
		const textoCopiado = copiar();
		alert("Texto copiado: " + textoCopiado.value);
	}
	
}
