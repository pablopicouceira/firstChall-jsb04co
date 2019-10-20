/*  -----------------------------------------------------------------------------------------------------------------------
    -----------------------------------------------------------------------------------------------------------------------


    * * * * * * * * * * * * * * * *
    *  1. C A L C U L A D O R A   *
    * * * * * * * * * * * * * * * *
    
    Crea un programa que permita realizar sumas, restas, multiplicaciones y divisiones. 

        - El programa debe recibir dos números (n1, n2).

        - Debe existir una variable que permita seleccionar de alguna forma el tipo de operación (suma, resta, multiplicación 
          o división).

        - Opcional: agrega una operación que permita elevar n1 a la potencia n2.


    -----------------------------------------------------------------------------------------------------------------------
    -----------------------------------------------------------------------------------------------------------------------
*/

function calculadora(n1, n2) {
  let operacion = prompt(
    'Introducir: "+" para sumar, "-" para restar, "*" para multiplicar, "/" para dividir y "**" para elevar a la potencia'
  );
  switch (operacion) {
    case "+":
      return +n1 + +n2;
      break;
    case "-":
      return +n1 - +n2;
      break;
    case "*":
      return +n1 * +n2;
      break;
    case "/":
      return +n1 / +n2;
      break;
    case "**":
      return Math.pow(+n1, +n2);
      break;
  }
}

console.log(calculadora(prompt("n1"), prompt("n2")));

/*    * * * * * * * * * * * * * * * * * * * * *
    *  2. D A D O   E L E C T R Ó N I C O   *
    * * * * * * * * * * * * * * * * * * * * *
     
    Simula el uso de un dado electrónico cuyos valores al azar irán del 1 al 6. 
    
        - Crea una variable "totalScore" en la que se irá almacenando la puntuación total tras cada una de las tiradas. 

        - Una vez alcanzados los 50 puntos el programa se detendrá y se mostrará un mensaje que indique el fin de la partida.

        - Debes mostrar por pantalla los distintos valores que nos devuelva el dado (números del 1 al 6) así como el valor de la
          variable "totalScore" tras cada una de las tiradas. 


    -----------------------------------------------------------------------------------------------------------------------
    -----------------------------------------------------------------------------------------------------------------------
*/

function dadoElectronico() {
  let totalScore = 0;
  while (totalScore < 50) {
    let tirada = prompt("Pulsa OK para tirar el dado"); //Uso el prompt para simular el acto de tirar el dado
    tirada = Math.ceil(Math.random() * 6);
    totalScore = totalScore + tirada;
    console.log(
      `Puntuación tirada: ${tirada} - Puntuación acumulada: ${totalScore}`
    );
  }
  return alert("Fin de la partida");
}
dadoElectronico();

/*    * * * * * * * * * * * * * * * * * * * * * * *
    *  3. R E G I S T R O   A C A D É M I C O   *
    * * * * * * * * * * * * * * * * * * * * * * *

    En este último ejercicio vamos a asignar una serie de alumnos a distintos profesores.

        - Crea la clase "Person" que incluya las propiedades "name", "age" y "gender", y un método que muestre por pantalla las
          propiedades de una persona. 

        - Crea la clase "Student". Esta clase debe heredar de "Person", y debe incluír, a mayores, las propiedades: "subject"
          y "group", y un método que permita registrar una lista de estudiantes.

        - Crea la clase "Teacher". Esta clase debe heredar de "Person", y debe incluír, a mayores, las propiedades: "subject", "group"
          y "studentsList". Esta última propiedad será un array. Crea un método que permita asignar alumnos al profesor. Esta asignación 
          se almacenará en "studentList". Solo los alumnos cuya propiedad "subject" y "group" coincida con la del profesor serán almace-
          nados en la propiedad "studentList" de cada profesor.
          
        - El objetivo final es mostrar por pantalla la lista de profesores junto a todas sus propiedades, entre ellas, los alu-
          mnos que tiene asignados.

        - Deben figurar un mínimo de tres profesores. 
                                    

    -----------------------------------------------------------------------------------------------------------------------
    -----------------------------------------------------------------------------------------------------------------------

*/

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

class Student extends Person {
  constructor(name, age, gender, subject, group, studentsList) {
    super(name);
    super(age);
    super(gender);
    this.subject = subject;
    this.group = group;
    this.studentsList = studentList;
  }
}
