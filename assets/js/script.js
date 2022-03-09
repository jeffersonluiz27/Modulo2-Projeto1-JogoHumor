const getElementoNome = document.getElementById('humor');
const getElementoImg = document.querySelector('#imgMain');
const getElementoCor = document.querySelector('#content');
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
