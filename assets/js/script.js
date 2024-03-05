/* - Operaciones con dos números */

/* Se solicita ingresar valores al usuario */
let num1 = +prompt("Operaciones con dos números: Ingrese el primer número mayor que 0");
let num2 = +prompt("Ingrese el segundo número mayor que 0");

/* Se aplican operaciones requeridas */
let sumanum = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;
let modulo = num1 % num2;

/* Resultado de las operaciones requeridas en documento */
document.write("<strong>OPERACIONES CON DOS NÚMEROS:</strong> <br><br> El resultado de la suma es: " + sumanum + "<br>");
document.write("El resultado de la resta es: " + resta + "<br>");
document.write("El resultado de la multiplicación es: " + multiplicacion + "<br>");
document.write("El resultado de la división es: " + division + "<br>");
document.write("El resultado del módulo es: " + modulo + "<br><br><br>");


/* - Conversión de Grados Celcius a Grados Kelvin y Fahrenheit */

/* Se solicita ingresar valor temperatura en Grados Celcius al Usuario y se definen variables según fórmula de conversión */
let celsius = +prompt("Conversión: Ingrese la temperatura en Grados Celsius");
let kelvin = celsius + 273.15;
let fahrenheit = (celsius * 9) / 5 + 32;

/* Resultado Conversiones en Documento */
document.write("<strong>CONVERSIÓN DE GRADOS CELCIUS A GRADOS KELVIN Y FAHRENHEIT:</strong> <br><br> La conversión a Grados Kelvin es: " + kelvin + "<br>");
document.write("La Conversión a Grados Fahrenheit es: " + fahrenheit + "<br><br><br>");


/* - Cálculo de semanas, días y años a partir de ingreso número de días */

/* Se solicita ingresar valor de días a usuario */
let dias = +prompt("Cálculo años, semanas y días: Ingrese el número de días");

/* Se definen variables segun fórmulo, se usa función Math.floor */
let anios = Math.floor(dias / 365);
let semana = Math.floor((dias % 365) / 7);
let diasresultado = Math.floor((dias % 365) % 7);

/* Resultados en Documento */
document.write("<strong>CÁLCULO AÑOS, SEMANAS Y DÍAS:</strong> <br><br> Los años calculados son: " + anios + "<br>");
document.write("Las semanas calculadas son: " + semana + "<br>");
document.write("Los días calculados son: " + diasresultado + "<br><br><br>");


/* - 5 números solicitados al usuario con operaciones suma y promedio */

/* Se solicitan ingresar números a usuario para definir variables*/
let numero1 = +prompt("Cálculo Suma y Promedio: Ingrese el primer número");
let numero2 = +prompt("Ingrese el segundo número");
let numero3 = +prompt("Ingrese el tercer número");
let numero4 = +prompt("Ingrese el cuarto número");
let numero5 = +prompt("Ingrese el quinto número");

/* Se aplican operaciones matemáticas requeridas */
let suma = numero1 + numero2 + numero3 + numero4 + numero5;
let promedio = suma / 5;

/* Resultados en documento */
document.write("<strong>CÁLCULO SUMA Y PROMEDIO:</strong> <br><br> La suma de los números es: " + suma + "<br>");
document.write("El promedio de los números es: " + promedio + "<br>");