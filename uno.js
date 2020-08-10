/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let peso;
	let sexo;
	let edad;
	let contadorMujeres = 0;
	let edadTotal = 0;
	let promedio;
	let hombrePesado;
	let primerHombre = false;


	for(let i = 0; i < 5; i++) {
		nombre = prompt('Ingrese su nombre:');
		while(!isNaN(nombre)) {
			nombre = prompt('Error. Ingrese su nombre:');
		}

		peso = parseInt(prompt('Ingrese su peso: '));
		while(peso < 1 || isNaN(peso)) {
			peso = prompt('Error. Ingrese su peso: ');

		}

		sexo = prompt('Ingrese su sexo. "f" o "m"');
		sexo = sexo.toLowerCase();
		while(sexo != 'f' && sexo != 'm') {
			sexo = prompt('Error. Ingrese su sexo. "f" o "m"');
		}

		edad = parseInt(prompt('Ingrese su edad: '));
		while(edad < 1 || isNaN(edad)) {
			edad = prompt('Error. Ingrese su edad: ');
		}

		if(sexo == 'f') {
			contadorMujeres++;
		}

		if(primerHombre == false && sexo == 'm'){
			hombrePesado = peso;
			primerHombre = true;
		} else if (peso > hombrePesado && sexo == 'm') {
			hombrePesado = peso;
		}
		
		edadTotal += edad;
		
		
	}
	promedio = edadTotal/5;
	
	console.log(`A. Cantidad de mujeres: ${contadorMujeres}\nB. Edad promedio: ${promedio}\nC. Hombre mas pesado: ${hombrePesado}`);


}
