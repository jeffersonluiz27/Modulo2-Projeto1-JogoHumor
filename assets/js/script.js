const getElementoNome = document.getElementById('humor');
const getElementoImg = document.getElementById('imgMain');
const getElementoCor = document.getElementById('content');
let getElementoBtn = document.querySelector('#butonChange');

getElementoBtn.addEventListener('click', () => {
	if (getElementoBtn.value == '1') {
		mudaAtrub('Timido','./assets/img/Embarrassed.png','#81f298','2');
	} else if (getElementoBtn.value == '2') {
		mudaAtrub('Apaixonado','./assets/img/InLove.png','#f3b6c6','3');
	} else if (getElementoBtn.value == '3') {
		mudaAtrub('Divertido','./assets/img/Funny.png','#f79554','4');
	} else if (getElementoBtn.value == '4') {
		mudaAtrub('Bravo','./assets/img/Angry.png','#dd6070','5');
	} else if (getElementoBtn.value == '5') {
		mudaAtrub('Triste','./assets/img/Sad.png','#82c3eb','6');
	} else {
		mudaAtrub('Alegre','./assets/img/Happy.png','#fdd900','1');
	}
});

function mudaAtrub(humor, image,color,valor){
	getElementoNome.innerText = humor;
	getElementoImg.src = image;
	getElementoCor.style.backgroundColor = color;
	getElementoBtn.value = valor;
}