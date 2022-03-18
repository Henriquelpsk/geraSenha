const randNum = (min,max) => (Math.floor(Math.random() * (max - min) + min));
const geraNumero = () => String.fromCharCode(randNum(48,58));
const geraMaiusculo = () => String.fromCharCode(randNum(65,91));
const geraMinusculo = () => String.fromCharCode(randNum(97,123));
const simbolos = '!@#$%.,;_-*+=-';
const geraSimbolo = () => simbolos[randNum(0,(simbolos.length))];

export default function geraSenha(len, upper, lower, number, symbol) {
	if(!len) return("Insira uma Quantidade");
	if(!upper && !lower && !number && !symbol) return("Selecione uma opção")
	if(len > 20) return ("Quantidade máxima: 20");
	let contador = 0;
	let senhacompleta = []
	while(contador < len) {
		if (number){
		senhacompleta += geraNumero();
		contador++};
		if(upper){
		senhacompleta += geraMaiusculo();
		contador++};
		if(lower){
		senhacompleta += geraMinusculo();
		contador++};
		if(symbol){
		senhacompleta += geraSimbolo();
		contador++};
	}
return (senhacompleta);
}
