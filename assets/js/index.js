/*
const elementoNome = document.getElementById('nome'); /* Cria a variável elementoNome e coloca o elemento com o id nome nela 
const elementoSituacao = document.querySelector('#situacao'); /* Cria a variável elementoSituacao e coloca o elemento com o id situacao nela 
const elementoImg = document.querySelector('#imagem') /* Cria a variável elementoImg e coloca o elemento com o id imagem nela 
let elementoBtn = document.querySelector('#alterar') /* Cria a variável elementoBtn e coloca o elemento com o id alterar nela 

/* Adiciona o evento de click no elementoBtn e executa a função anonima (arrow function) 
elementoBtn.addEventListener('click', () =>{
    /* Verifica se o valour do botão é 'primeiro', se for troque de humor para o Hulk 
    if(elementoBtn.value == 'primeiro'){
        elementoImg.src = './assets/img/Hulk.png' /* Troca a imagem do personagem 
        elementoNome.innerText = 'Hulk' /* Altera o texto do elemento nome 
        elementoSituacao.innerText = 'Pistola' /* Altera o texto do elemento situação 
        elementoBtn.value = 'segundo' /* Altera valor do botão 
    } else if(elementoBtn.value == 'segundo') { /* Verifica se o valour do botão é 'segundo', se for troque de humor para o Dr. Hulk 
        elementoImg.src = './assets/img/Dr. Hulk.png'  /* Troca a imagem do personagem 
        elementoNome.innerText = 'Dr. Hulk' /* Altera o texto do elemento nome 
        elementoSituacao.innerText = 'Pistola geek' /* Altera o texto do elemento situação 
        elementoBtn.value = 'terceiro'  /* Altera valor do botão 
    } else { /* Se os valores do botão não forem, 'primeiro' nem 'segundo' mude para o Dr. Banner 
        elementoImg.src = './assets/img/Dr. Banner.png' /* Troca a imagem do personagem 
        elementoNome.innerText = 'Dr. Banner' /* Altera o texto do elemento nome 
        elementoSituacao.innerText = 'Simples humano' /* Altera o texto do elemento situação 
        elementoBtn.value = 'primeiro' /* Altera valor do botão 
    }
})
*/

const getElementoNome = document.getElementById('nome');
const getElementoImg = document.querySelector('#imgMain');
const getElementoCor = document.querySelector('#corpo');
let getElementoBtn = document.querySelector('#butonChange');

getElementoBtn.addEventListener('click', () => {
	if (getElementoBtn.value == '1') {
		getElementoNome.innerText = 'Timido';
		getElementoImg.src = './assets/img/Embarrassed.png';
		getElementoCor.style.backgroundColor = '#81f298';
		getElementoBtn.value = '2';
	} else if (getElementoBtn.value == '2') {
		getElementoNome.innerText = 'Apaixonado';
		getElementoImg.src = './assets/img/InLove.png';
		getElementoCor.style.backgroundColor = '#f3b6c6';
		getElementoBtn.value = '3';
	} else if (getElementoBtn.value == '3') {
		getElementoNome.innerText = 'Divertido';
		getElementoImg.src = './assets/img/Funny.png';
		getElementoCor.style.backgroundColor = '#f79554';
		getElementoBtn.value = '4';
	} else if (getElementoBtn.value == '4') {
		getElementoNome.innerText = 'Bravo';
		getElementoImg.src = './assets/img/Angry.png';
		getElementoCor.style.backgroundColor = '#dd6070';
		getElementoBtn.value = '5';
	} else if (getElementoBtn.value == '5') {
		getElementoNome.innerText = 'Triste';
		getElementoImg.src = './assets/img/Sad.png';
		getElementoCor.style.backgroundColor = '#82c3eb';
		getElementoBtn.value = '6';
	} else {
		getElementoNome.innerText = 'Alegre';
		getElementoImg.src = './assets/img/Happy.png';
		getElementoCor.style.backgroundColor = '#fdd900';
		getElementoBtn.value = '1';
	}
});
