/*
Tu desafío de hoy es crear los destinos posibles de un juego, en el que el usuario pueda elegir:

Si quiere seguir hacia el área de Front-End o seguir hacia el área de Back-End. 

Si está en el área de Front-End, si quiere aprender React o aprender Vue. Si está en el área de Back-End, podrá aprender C# o aprender Java.

Después, independientemente de las elecciones anteriores, el usuario podrá elegir entre seguir especializándose en el área elegida o desarrollarse para convertirse en Fullstack. Debes mostrar en pantalla un mensaje específico para cada elección.

Finalmente, pregunta en qué tecnologías le gustaría a la persona especializarse o conocer. Aquí, la persona puede responder N tecnologías, una a la vez. Entonces, mientras continúe respondiendo **ok** a la pregunta: "¿Hay alguna otra tecnología que te gustaría aprender?", sigue presentando el Prompt, para que complete el nombre de la tecnología en cuestión. Y, justo después, presenta un mensaje comentando algo sobre la tecnología ingresada.
 
Lo importante es que la persona que esté jugando siempre pueda elegir qué decisión tomar para aprender y desarrollarse en el área de programación.

Además, también es esencial que, al final del juego, pueda ingresar tantas tecnologías como desee en la lista de aprendizaje.
*/
let frontBack, front, back, fullStack, seguir, frontBackLetra;
let cent = 1;
let centF = 1;
let centB = 1;
let centFS = 1;
let cont = 1;
let i = 0;
let tecnology = [];
console.log("comenzamos");
alert("Bienvenido a el ejecicio del Day3 de 7DaysOfCode")


//Front o back???
while (cent == 1){
    frontBack = prompt('Si quireres ser FrontEnd ingresa "1", si quieres ser BackEnd ingresa "2".');
    if (frontBack == 1){
        alert("Excelente elección ser FontEnd.");

        //React o Veu
        while (centF == 1){
            front = prompt('Como elegiste FontEnd, si quieres aprender "React" ingresa "1" y si quieres aprender "Vue" ingresa "2".');
            if (front == 1){
            alert("React es muy buena elección.");
            centF = 0;
            } else if (front == 2){
                alert("Vue es muy buen elección.");
                centF = 0;
            } else {
                alert(`Debes ingresar "1" o "2" e ingresaste ${front}. Vuelve a intentarlo.`);
            }
        }

        cent = 0;
    } else if (frontBack == 2){
        alert("Excelente elección ser BackEnd.");

        //React o Veu

        while (centB == 1){
            back = prompt('Como elegiste BackEnd, si quieres aprender C# ingresa "1" y si quieres aprender Java ingresa "2".');
            if (back == 1){
            alert("C# es muy buena elección.");
            centB = 0;
            } else if (back == 2){
                alert("Java es muy buena elección.");
                centB = 0;
            } else {
                alert(`Debes ingresar "1" o "2" e ingresaste ${back}. Vuelve a intentarlo.`);
            }
        }
        cent = 0;
    } else {
        alert(`Debes ingresar "1" o "2" e ingresaste ${frontBack}. Vuelve a intentarlo.`);
    }

}

while (centFS == 1) {
    if (frontBack==1) {
        frontBackLetra =  "FrontEnd";
    }else{
        frontBackLetra = "BackEnd"
    }

    fullStack = prompt(`Si quieres continuar con tu elección de ser ${frontBackLetra}, ingresa "1" y si deseas seguir estudiando para ser "FullStack" ingresa "2".`);

    if (fullStack == 1) {
        alert("A veces es mejor especializarse profundamente en una sola área.");
        centFS = 0;
    } else if (fullStack == 2){
        alert("Siempre es buena opción ser integro y convertirte en FullStack te haría más íntegro.");
        centFS = 0;
    }else {
        alert(`Debes ingresar "1" o "2" e ingresaste ${fullStack}. Vuelve a intentarlo.`);
    }
    }
        

/*
Finalmente, pregunta en qué tecnologías le gustaría a la persona especializarse o conocer. Aquí, la persona puede responder N tecnologías, una a la vez. Entonces, mientras continúe respondiendo **ok** a la pregunta: "¿Hay alguna otra tecnología que te gustaría aprender?", sigue presentando el Prompt, para que complete el nombre de la tecnología en cuestión. Y, justo después, presenta un mensaje comentando algo sobre la tecnología ingresada.
*/

while (cont == 1) {
    seguir = prompt('¿Hay alguna otra tecnología que te gustaría aprender? Responder "ok" si es afirmativa tu respuesta, de lo contrario cualquier cosa.');
    if (seguir.toUpperCase() !== "OK" ){
        cont=0;
        break;
    }

    tecnology.push(prompt("Ingresa la tecnología que deseas aprender."));
    alert(`Me parece buena idea que desees aprender sobre ${tecnology[i]}`)
    i++;
}

if (tecnology.length>0){
    alert("Estas son las tecnologías que deseas aprender: " + tecnology);
} else{
    alert("Aprender de otras tecnologías es fundamental para un buen programador, deberías tomarlo en cuenta.")
}


alert("Finalizamos, gracias por visitarnos");



