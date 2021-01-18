// Exercicis Lletres repetides

// L'exercici consisteix en mostrar per consola quantes vegades apareix cada lletra del teu nom i cognoms am diferents variants (fases).

// 1 - Crea un array amb el teu nom on cada posició correspongui a una lletra.
// Fes un bucle que recorri aquest array i mostri per consola cadascuna de les lletres.

function primer() {
    let nom = "CESAR"
    let array = [];
    //Introduce en la array los carácteres del string 1 a 1.
    array = nom.split("");
    let i;
    //Recorre el array y lo muestra por consola.
    for (i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

// 2 - Al bucle, si la lletra és una vocal imprimeix a la consola: ‘He trobat la VOCAL: __’. Sinó, imprimeix: ‘He trobat la CONSONTANT: __’.
//Si trobes un número, mostra per pantalla: ‘Els noms de persones no contenen el número:

function segon() {
    let nom = "CESAR";
    let array = [];
    let lletra;
    let vocal;
    //Introduce en la array los carácteres del string 1 a 1.
    array = nom.split("");
    let i;
    //Recorre el array 
    for (i = 0; i < array.length; i++) {
        lletra = array[i];
        //Comprueba si el elemento es un número.
        if (isNaN(lletra)) {
            //Si no es un número buscamos el patrón de vocales en el elemento.
            vocal = lletra.search(/[aeiou]/ig);
            
            //Comprueba si es vocal o consonante.
            if (vocal) {
                console.log(`He trobat la consonat: ${lletra}`);
            } else { console.log(`He trobat la vocal: ${lletra}`); }

            //Si es número se lo indicamos al usuario.
        } else { console.log(`Els noms de persona no contenen el número ${lletra}`); }
    }
}

// 3 - Emmagatzemar en un Map les lletres de l'array y el nombre de vegades que apareixen.

function tercer() {
    let nom = "CESAR";
    let array = [];
    let contador;
    // Creamos el objeto map.
    let aMap = new Map();
    //Introduce en la array los carácteres del string 1 a 1.
    array = nom.split("");
    let i;
    let j;
    //Recorre el array con 
    for (i = 0; i < array.length; i++) {
        //Inicializa contador.
        contador = 0;
        //Comparamos si los elementos del array se repiten.
        for (j=0; j < array.length; j++) {
           //Si el elemento se repite incrementamos contador.
            if (array[j]==array[i]) {
                contador++
            }
            //Guardamos el elemento y el n veces que se repite en el map.
            aMap.set(array[i],contador);
        }
    
    }
    console.log(aMap);
}



// 4 - Crea una altra array amb el teu cognom on cada posició correspongui a una lletra.
//Fusiona els dos arrays en un. A més, afegeix una posició amb un espai buit entre la primera i la segona. És a dir, partim de 'array name i surname i al acabar l’execució només tindrem una que es dirà fullName.
function cuart() {
    let name = ["C","E","S","A","R"];
    let surname = ["G","U","T","I","E","R","R","E","Z"];
    let fullname = [];
    //Añadimos un espacio al final del array nombre
    name.push (" ");
    //Concatenamos los arrays name y surname
    fullname = name.concat(surname);
    console.log(fullname);




    
}

// Nivell 2 // 
//Crea una funció que retorni un array amb tots els email (sense repetir) del següent text:

function cinque() {
    const str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email'; 
    let array=[];
    //Asignamos al array todos los emails encontrados en el string con el método match que coincidan con el patrón.
    array = str.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
    //Llamamos a la función uniq para que nos devuelva una array sin elementos repetidos.
    console.log(JSON.stringify(uniq(array)));
    
}
//funcion que usando el método Set devuelve un array sin elementos repetidos.
function uniq(a) {
    return Array.from(new Set(a));
 }
