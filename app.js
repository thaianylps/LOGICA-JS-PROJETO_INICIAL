alert('Boas vindas ao meu jogo');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;
let tentativasmax = 3;
//Enquanto chute não for igual ao numero secreto.

while (chute != numeroSecreto) {
    chute = prompt('Qual o númeo do seu chute ? valor de 1 a 10');
    // se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto que é : ${numeroSecreto} e com ${tentativas} tentativas.`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1; 
        tentativas++; //incremtando o valor de tantativas
    }
}