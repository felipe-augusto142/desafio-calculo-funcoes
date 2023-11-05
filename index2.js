//Switch implementation
function subtraction(wins,losses){
    return wins-losses
}

let wins = 100
let losses = 54
let winDifference = subtraction(wins,losses)
let title

switch(true){
    case winDifference < 10:
    title="Pedra"
    break
    case winDifference < 20:
    title="Ferro"
    break
    case winDifference < 30:
    title="Cobre"
    break
    case winDifference < 40:
    title="Bronze"
    break
    case winDifference < 50:
    title="Prata"
    break
    case winDifference < 60:
    title="Ouro"
    break
    case winDifference < 70:
    title="Platina"
    break
    case winDifference < 80:
    title="Diamante"
    break
    case winDifference < 90:
    title="Ascendente"
    break
    case winDifference < 100:
    title="Imortal"
    break
    case winDifference >= 100:
    title="Radiante"
}

console.log("O heroi tem saldo de "+winDifference+" e está no nível "+title)
