/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
  let marca;
  let precio;
  let pesoKg;
  let tipo;
  let seguir;
  let pesoTotal = 0;
  let flagLiquido = false;
  let flagSolido = false;
  let marcaMasCara;
  let liquidoMasCaro;
  let marcaMasBarata;
  let solidoMasBarato;

  do{
    marca = prompt('Ingrese marca: ');

    precio = parseInt(prompt('Ingrese precio: '));
    while(precio < 1 || isNaN(precio)) {
      precio = parseInt(prompt('Error. Ingrese precio: '));
    }

    pesoKg = parseInt(prompt('Ingrese el peso en KG: '));
    while(pesoKg < 1 || isNaN(pesoKg)) {
      pesoKg = parseInt(prompt('Error. Ingrese el peso en KG: '));
    }

    tipo = prompt('Ingrese el tipo(solido o liquido): ');
    while(tipo != 'solido' && tipo != 'liquido') {
      tipo = prompt('Error. Ingrese el tipo(solido o liquido): ');
    }

    pesoTotal += pesoKg;

    if(flagLiquido == false && tipo == 'liquido') {
      liquidoMasCaro = precio;
      marcaMasCara = marca;
      flagLiquido = true;
    } else if (precio > liquidoMasCaro && tipo == 'liquido') {
      liquidoMasCaro = precio;
      marcaMasCara = marca;
    }

    if(flagSolido == false && tipo == 'solido') {
      solidoMasBarato = precio;
      marcaMasBarata = marca;
      flagSolido = true;
    } else if (precio < solidoMasBarato && tipo == 'solido') {
      solidoMasBarato = precio;
      marcaMasBarata = marca;
    }

    seguir = prompt('Desea seguir? "si" para continuar.');
  }while(seguir == 'si');

  console.log(`A. Peso total de la compra: ${pesoTotal}\nB. La marca del mas caro de los liquidos: ${marcaMasCara}\nC. La marca del mas barato de los solidos: ${marcaMasBarata}`);

}
