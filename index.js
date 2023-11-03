const image = document.querySelector('#myImage');
const text = document.querySelector('h2');

const buttonOne = document.querySelector('#one');
const buttonTwo = document.querySelector('#two');

buttonOne.addEventListener('click', neyton);
buttonTwo.addEventListener('click', kristian);

function neyton(){
    image.setAttribute('src', 'wedding.jpg');
    text.textContent = 'Они поженятся?';
    buttonOne.textContent = 'Возможно';
    buttonTwo.textContent = 'Нет';

    buttonOne.addEventListener('click', maybe);
    buttonTwo.addEventListener('click', not);   
}

function maybe(){
    image.setAttribute('src', 'enn1.jfif');
    text.textContent = 'Поженятся спустя 7 лет. Она будет работать в газете. Одним утром Энди задумается:';
    buttonOne.textContent = 'Оставить все как есть';
    buttonTwo.textContent = 'Уйти от Нейтона';

    buttonOne.addEventListener('click', child);
    buttonTwo.addEventListener('click', leave);
}

function child(){
    image.setAttribute('src', 'endi-boy.png');
    text.textContent = 'Энди родит ребенка и будет пытаться совмещать свою работу и уход за ребенком и сводить концы с концами. Нейтон будет работать также в кафе.';
    buttonOne.style='display:none';
    buttonTwo.style='display:none';
}

function leave(){
    image.setAttribute('src', 'endi.jpeg');
    text.textContent = 'Энди решается на развод и начинает жизнь заново. Судьба вновь приводит ее в мир моды, где она делает отличную карьеру.';
    buttonOne.style='display:none';
    buttonTwo.style='display:none';
}

function not(){
    image.setAttribute('src', 'notgood.jpg');
    text.textContent = 'Спустя 5 лет упреков Энди решается уйти от Нейтона и начать все сначала.';
    buttonOne.style='display:none';
    buttonTwo.style='display:none';
}

function kristian(){
    image.setAttribute('src', 'original.jpg');
    text.textContent = 'Энди останется с Кристианом?';
    buttonOne.textContent = 'Да';
    buttonTwo.textContent = 'Нет';

    buttonOne.addEventListener('click', yeSS);
    buttonTwo.addEventListener('click', noTT);
}

function yeSS(){
    image.setAttribute('src', 'lovk.jpg');
    text.textContent = 'Кристиан помогает Энди с карьерой. О свадьбе речь не идет, но их и так устраивают эти отношения.';
    buttonOne.style='display:none';
    buttonTwo.style='display:none';
}

function noTT(){
    image.setAttribute('src', 'endyall.jpg');
    text.textContent = 'Энди решает самостоятельно построить головокружительную карьеру и благодаря наработанным связям и опыту в мире моды ей это удается.';
    buttonOne.style='display:none';
    buttonTwo.style='display:none';
}