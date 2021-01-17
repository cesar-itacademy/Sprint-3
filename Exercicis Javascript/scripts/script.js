// Exercicis JS Basic


// 1 - Mostrar Hola mundo per console log
function primer() {
    console.log("Hola mundo");
}

// 2 - Crea un alert que mostri el teu nom
function segon() {
    alert("Cèsar és el meu nom!");
}

// 3 - Crea una variable que contingui el teu nom i un altre que contingui el teu cognom.
function tercer() {
    let nom = 'Cesar';
    let cognom = 'Gutierrez';
    console.log("El meu nom es: "+ nom+" "+cognom);
}

// 4 - Crea dos variables amb dos números i fes una suma entre ells.
function cuart() {
    let numA = 55;
    let numB = 33;
    let resultat = parseInt(numA + numB);
    console.log("La suma entre "+numA+" i "+numB+" es igual a "+ resultat);
}

// 5 - Crea una variable nota_examen juntament amb un alert que ens digui si l’examen ha estat aprovat o no juntament amb la nota. (caldrà utilitzar un condicional IF)
function cinque() {
    let nota_examen = 4.6;
    let resultat = "Ohhh has suspendido";
    if (nota_examen >= 5) {
        resultat = "Genial!!! has aprobado";
    }
    alert(resultat+", el exámen con un "+nota_examen);
}

// 6 - Reemplaça la paraula blau per la paraula verd del següent text Tinc un cotxe de color blau. Després intenta fer-ho remplaçant les o per les u.
function sise() {
    let frase = "Tinc un cotxe de color blau";
    let canviParaula = frase.replace('blau','verd');
    console.log(canviParaula);
    let canviLletra = frase.replace(/o/g,'u');
    console.log(canviLletra);
}

// 7 - Donat el seguit llistat d'objectes 'taula', 'cadira', 'ordinador', 'libreta', per un bucle que mostri per pantalla cada objecte i la seva posició al llistat.
function sete() {
    let llistat = ['taula', 'cadira', 'ordinador', 'llibreta'];
    let i;
    for (i = 0; i < llistat.length; i++) {
        console.log(`L'objecte ${llistat[i]} està a la poisició ${i}`);
    }
}

// 8 - Crea una funció anomenada calculadora que tingui com a entrada els següents paràmetres: operador, valor1 i valor2. 
//Estructura de la funció que faci sumes, restes i multiplicacions. El resultat haurà de ser mostrar per pantalla.
function vuite() {
    let numA = parseInt(document.getElementById('numA').value);
    let numB = parseInt(document.getElementById('numB').value);
    let operador = (document.getElementById('operador').value);
    document.getElementById("resultatCalc").innerHTML ="RESULTAT = " + calculadora(numA, numB, operador);
}

function calculadora(numA, numB, operador) {
    let resultatCalc; 
    switch (operador) {
        case "+":
            resultatCalc = (numA + numB);
            break;
        case "-":
            resultatCalc = (numA - numB);
            break;
        case "*":
            resultatCalc = (numA * numB);
            break;
        case "/":
            if (numB == 0) {
                resultatCalc = 'No es pot dividir per 0';
            } else { resultatCalc = (numA / numB); }
            break;
        default: 
            resultatCalc ='No ha introuït un operador válid';
    }
    return resultatCalc; 
}