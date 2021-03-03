var objeto1 = "Piedra";
var objeto2 = "Papel";
var objeto3 = "Tijera";

var resultado = function miFuncion(usuario, maquina) {
    if (usuario != maquina){
        if (usuario === objeto1 && maquina === objeto3){
            console.log("Gana Usuario")
        } else if (usuario === objeto2 && maquina === objeto1){
            console.log("Gana Usuario")
        } else if (usuario === objeto3 && maquina === objeto2){
            console.log(" Gana Usuario")
        } else {
            console.log("Gano la Máquina")
        }
    }else if ( usuario === maquina){
        console.log("hay Empate")
    }
};

resultado(objeto1, objeto2)



//switch

var pregunta = prompt("Ingresa tu opción: piedra, papel o tijera "); 
var user = pregunta.toLowerCase();
var options = ["piedra", "papel", "tijera"];
var machine = options[Math.floor(Math.random() * 3)];


// let numero = 'a';
//con true los casos van a pasar 
switch (true) {
    case (user === machine):
        console.log('es un empate');
        break;
    case (machine === 'piedra' && user === 'papel'):
        console.log('Ganaste')
        break;
    case (machine === 'papel'  && user === 'tijera'):
        console.log('Ganaste')
        break;
    case (machine === 'tijera' && user === 'piedra'):
        console.log('Ganaste')
        break;
    default:
        console.log('¡Perdiste!');       
}