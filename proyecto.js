const precio_base = 2000;
const edad_18 = 0.1; // 10%
const edad_25 = 0.2; // 20%
const edad_50 = 0.3; // 30%
const hijos_recargo = 0.2; // 20%
const salario_recargo = 0.05; // 05%
const propiedad_recargo = 0.35; // 35%

var recargo = 0;
var recargo_total = 0;
var precio_final = 0;

var nombre = prompt("Ingrese su nombre, por favor");
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ");
if (edad <= 18) { alert("Debe ser mayor de edad para adquirir un seguro");
} else {
  var salario = prompt("Ingrese su salario en numeros");
  recargo = salario * salario_recargo;
  recargo_total = recargo_total + recargo;
  var casado = prompt("¿Está casado actualmente?", "si/no");
  var edad_conyuge;
  if ("SI" == casado.toUpperCase()) { edad_conyuge = prompt("¿Que edad tiene su esposo/a?"); }
  var hijos = prompt("¿Tiene hijos o hijas?", "si/no")
  var cantidad_hijos;
  if ("SI" == hijos.toUpperCase()) {
    cantidad_hijos = prompt("¿Cuantos hijos tiene?");
    if (cantidad_hijos > 0) {
      recargo = (precio_base * hijos_recargo) * cantidad_hijos;
      recargo_total = recargo_total + recargo;
    };
  }
  var propiedades = prompt("¿Cuenta con propiedades?", "si/no");
  var cantidad_propiedades;
  if ("SI" == propiedades.toUpperCase()) {
    cantidad_propiedades = prompt("¿Cuantas propiedades tiene?");
    if (cantidad_propiedades > 0) {
      recargo = (precio_base * propiedad_recargo) * cantidad_propiedades;
      recargo_total = recargo_total + recargo;
    };
  };

  if (edad >= 18 && edad <= 24) {
    recargo = precio_base * edad_18;
    recargo_total = recargo_total + recargo;
  } else if (edad >= 25 && edad <= 49) {
    recargo = precio_base * edad_25;
    recargo_total = recargo_total + recargo;
  } else if (edad >= 50) {
    recargo = precio_base * edad_50;
    recargo_total = recargo_total + recargo;
  };
  if (edad_conyuge >= 18 && edad_conyuge <= 24) {
    recargo = precio_base * edad_18;
    recargo_total = recargo_total + recargo;
  } else if (edad_conyuge >= 25 && edad_conyuge <= 49) {
    recargo = precio_base * edad_25;
    recargo_total = recargo_total + recargo;
  } else if (edad_conyuge >= 50) {
    recargo = precio_base * edad_50;
    recargo_total = recargo_total + recargo;
  };

  precio_final = precio_base + recargo_total;
  //Resultado
  alert("Para el asegurado " + nombre);
  alert("El recargo total sera de: " + recargo_total);
  alert("El precio sera de: " + precio_final);

};
//validadorBucle = prompt("¿Desea realizar otra cotizacion? Escriba salir para finalizar");

