import geraSenha from "./geradores";

const senhaGerada = document.querySelector(".resultado");
const inputLen = document.querySelector(".inputLen")
const inputNumeros = document.querySelector(".inputNum");
const inputMaior = document.querySelector(".inputUpper");
const inputMenor = document.querySelector(".inputLower");
const inputSimbolo = document.querySelector(".inputSymbol")
const enviar = document.querySelector(".botao");

export default () => {
	enviar.addEventListener("click", () => {
		let result = geraSenha(
			inputLen.value,
			inputMaior.checked,
			inputMenor.checked,
			inputNumeros.checked,
			inputSimbolo.checked
		)
	senhaGerada.innerHTML = result;
	})
};
