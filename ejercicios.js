//Ejercicios
// 1.  Hacer un programa que reciba 2 números del usuario y los sume.(Secuencia)

/* let num1= prompt("Ingrese el segundo numero");
 let num2= prompt("Ingrese el primer numero");
 let suma = parseFloat(num1) + parseFloat(num2);

 alert("El resultado de la suma de : " + num1 + " + " + num2 + " es " + suma);*/

//---------------------Fin ejercicio 1----------------------------------------

//2. Hacer un programa que reciba un nombre por parte del usuario, si se recibió nombre por parte del usuario, saludarlo con nombre, si no, sólo decir 'Hola' (Condicional)

/*let nombre = prompt("Ingrese su Nombre");

if(nombre){
 alert("¡Hola " + nombre + "!");
     console.log("Se cumple la condición");
}

else{
    alert("¡Hola!");
    console.log("No se cumple la condición");
}*/

//--------------------------Fin ejercicio 2------------------------------------------

//3. Hacer un programa que pida al usuario un número entero y muestre los valores desde cero hasta el número ingresado.(Ciclos)

/* let num = parseInt(prompt("Ingresa un numero entero"));


for(let i = 0; i <= num; i++){
    alert(i);
}*/

//--------------------------Fin ejercicio 3------------------------------------------

//4. Hacer un programa que solicite al usuario un texto, si el usuario no ingresa nada seguir solicitando hasta que lo haga.

/*let text= "";

while (true) {
    let texto = prompt("Ingrese un texto");
    if (texto) {
        alert("¡Gracias!");
        break;
    } else {
        alert("Ingresa un texto válido");
    }
}*/


//--------------------------Fin ejercicio 4------------------------------------------

//5. Hacer un programa que muestre los días de la semana.

/*let diaSemana=["lunes", "martes", "miercoles", "jueves", "viernes", "sabad","domingo"];

 //Optimizacion de ciclos
diaSemana.forEach(
    (dia) => {
    console.log(dia);
    }
)*/

//--------------------------Fin ejercicio 5------------------------------------------

//6. Hacer un programa que pida al usuario dos números, mostrar la suma y la resta del primer número y el segundo número.

/*let num1= parseFloat(prompt("Ingrese el primer numero"))
let num2= parseFloat(prompt("Ingrese el segundo numero"))

let suma= num1 + num2
let resta= num1 - num2

alert("El resultado de " + num1 + " + " + num2 + " = " + suma + "\n" + 
    "El resultado de " + num1 + " - " + num2 + " = " + resta);*/

//--------------------------Fin ejercicio 6------------------------------------------

