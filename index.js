//If and Else If implementation
function subtraction(wins,losses){
    return wins-losses
}

let wins = 143
let losses = 23
let winDifference = subtraction(wins,losses)
let level = winDifference < 10
let level2 = 10 <= winDifference && winDifference < 20
let level3 = 20 <= winDifference && winDifference < 30
let level4 = 30 <= winDifference && winDifference < 40
let level5 = 40 <= winDifference && winDifference < 50
let level6 = 50 <= winDifference && winDifference < 60
let level7 = 60 <= winDifference && winDifference < 70
let level8 = 70 <= winDifference && winDifference < 80
let level9 = 80 <= winDifference && winDifference < 90
let level10 = 90 <= winDifference && winDifference < 100
let level11 = winDifference >= 100

if(level){
    title="Pedra"
}else if(level2){
    title="Ferro"
}else if(level3){
    title="Cobre"
}else if(level4){
    title="Bronze"
}else if(level5){
    title="Prata"
}else if(level6){
    title="Ouro"
}else if(level7){
    title="Platina"
}else if(level8){
    title="Diamante"
}else if(level9){
    title="Ascendente"
}else if(level10){
    title="Imortal"
}else if(level11){
    title="Radiante"
}

console.log("O heroi tem saldo de "+winDifference+" e está no nível "+title)
