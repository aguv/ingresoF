/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let seguir;
	let sexoTitular;
	let lugar;
	let temporada;
	let cantidadPersonas;
	let contadorBariloche = 0;
	let contadorCataratas = 0;
	let contadorSalta = 0;
	let masElegido;
	let lugarMasElegido;
	let flagSexo = false;
	let masPasajeros;
	let sexoMasPasajeros;
	let totalInvierno = 0;
	let contadorInvierno = 0;
	let promedioInvierno;


	do{
		sexoTitular = prompt('Ingrese su sexo. "f" o "m"');
		sexoTitular = sexoTitular.toLowerCase();
		while(sexoTitular != 'f' && sexoTitular != 'm') {
			sexoTitular = prompt('Error. Ingrese su sexo. "f" o "m"');
		}

		lugar = prompt('Ingrese su destino: ("bariloche", "cataratas" o "salta")');
		while(lugar != 'bariloche' && lugar != 'cataratas' && lugar != 'salta') {
			lugar = prompt('Error. Ingrese su destino: ("bariloche", "cataratas" o "salta")');
		}

		temporada = prompt('Ingrese la temporada: ("otoño", "invierno", "verano", "primavera")');
		while(temporada != 'otoño' && temporada != 'invierno' && temporada != 'verano' && temporada != 'primavera') {
			temporada = prompt('Error. Ingrese la temporada: ("otoño", "invierno", "verano", "primavera")');	
		} 

		cantidadPersonas = parseInt(prompt('Ingrese la cantidad de personas'));
		while(cantidadPersonas < 1 || isNaN(cantidadPersonas)) {
			cantidadPersonas = parseInt(prompt('Error. Ingrese la cantidad de personas'));
		}


		if(lugar == 'bariloche') {
			contadorBariloche++;
		} else if (lugar == 'cataratas') {
			contadorCataratas++;
		} else {
			contadorSalta++;
		}

		if(flagSexo == false || cantidadPersonas > masPasajeros) {
			masPasajeros = cantidadPersonas;
			sexoMasPasajeros = sexoTitular;
			flagSexo = true;
		}

		if(temporada == 'invierno') {
			contadorInvierno++;
			totalInvierno += cantidadPersonas
		}


		seguir = prompt('Desea continuar: "si" para seguir');


	}while(seguir == 'si');

	masElegido = Math.max(contadorBariloche, contadorCataratas, contadorSalta); // ENTIENDO QUE ESTA NO ES LA FORMA EN QUE LO HICIMOS, PERO A MI ME RESULTA MAS FACIL
	if(masElegido == contadorBariloche) {										// AUNQUE ES UN POCO MAS REBUSCADA. 
		lugarMasElegido = 'Bariloche';
	} else if(masElegido == contadorCataratas) {
		lugarMasElegido = 'Cataratas';
	} else {
		lugarMasElegido = 'Salta';
	}


	promedioInvierno = totalInvierno/contadorInvierno;

	console.log(`A. Lugar mas elegido: ${lugarMasElegido}\nB. Sexo del titular que lleva mas pasajeros: ${sexoMasPasajeros}\nC. Promedio de personas que viajan en invierno: ${promedioInvierno}`);
}
