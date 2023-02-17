// Encontrar puntos totales en un juego de basketball 
// Hay valores de 2 puntos por canasta y 3 por canasta  // 


const basketball = (puntosa, puntosb) =>   2 * puntosa + 3 * puntosb;

console.log(basketball(20,40));




// Encontrar cuantas patas de animales hay en total 
// gallinas = 2 // vacas = 4 // cabras = 4  

function calcularNumeroPatas(gallinas, vacas, cabras) {
    const patasGallinas = gallinas * 2;
    const patasVacas = vacas * 4;
    const patasCabras = cabras * 4;
    const totalPatas = patasGallinas + patasVacas + patasCabras;
    return totalPatas;
}

console.log(calcularNumeroPatas(14,15,20));    


// Encontrar cantidad de FPS dados minutos  
//1seg = 60 fps

function calcularCantidadFPS(minutos) {
    const fpsPorSegundo = 60; // 1 minuto = 60 segundos
    const segundos = minutos * 60;
    const cantidadFPS = segundos * fpsPorSegundo;
    return cantidadFPS;
  }

  console.log(calcularCantidadFPS(360));

// escribir una funcion que acepte un angulo en radianes y retorne un angulo en grados

function convertirRadianesAGrados(anguloEnRadianes) {
    const anguloEnGrados = anguloEnRadianes * (180 / Math.PI);
    return anguloEnGrados;
  }

  console.log(convertirRadianesAGrados(90))

// Encontrar la poblacion de la tierra en 3 decadas a partir de cantidad de personas
// poblacion(3248, 6) -> 5408

const calcPobl = (poblacionInicial, tasaCrecimientoAnual) => (30 * 12 * tasaCrecimientoAnual) + poblacionInicial;  

console.log(calcPobl(3248,6));

// Conviertan un Array de caracteres en String
// ['z','a','b','d','i','e','l'] -> 'Zabdiel'

function convertirArrayAString(arrayCaracteres) {
    const stringResultado = arrayCaracteres.join('');
    return stringResultado;
  }

  const nombre= ['H','u','g','o',' ','M','o','r','a','l','e','s']
  console.log(convertirArrayAString(nombre));


// Dado el radio de un circulo y el area de un cuadrado regresar true / falso si la circunferencia del circulo es // mayor o menor que el perimetro del cuadrado // biggerCircle(16, 625) -> True // Pi = 3.14

  function biggerCircle(radio, areaCuadrado) {
    const pi = 3.14;
    const circunferencia = 2 * pi * radio;
    const ladoCuadrado = Math.sqrt(areaCuadrado);
    const perimetroCuadrado = 4 * ladoCuadrado;
  
    if (circunferencia > perimetroCuadrado) {
      return true;
    } else {
      return false;
    }
  }

  console.log(biggerCircle(35,12));