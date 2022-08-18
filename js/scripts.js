// Crie uma nova página HTML e adicione via JavaScript os seguintes elementos:

// 1. Crie um formulário com campos de input e botões de submit e reset.

const nameInput = document.createElement('input');
const nameDiv = document.querySelector('.name');

const emailInput = document.createElement('input');
const emailDiv = document.querySelector('.email');

const passwordInput = document.createElement('input');
const passwordDiv = document.querySelector('.password');

const resetBtn = document.createElement('button');
const registerBtn = document.createElement('button');
const formBtn = document.querySelector('.formButtons');

nameDiv.appendChild(nameInput);
emailDiv.appendChild(emailInput);
passwordDiv.appendChild(passwordInput);

formBtn.appendChild(resetBtn);
formBtn.appendChild(registerBtn);

registerBtn.textContent = 'Registrar';
resetBtn.textContent = 'Limpar';

let setAttributes = (el, attrs) => {
    for (let key in attrs) {
        el.setAttribute(key, attrs[key]);
    };
};

setAttributes(nameInput, { 'type': 'text', 'name': 'name', 'id': 'name', 'placeholder': 'Nome e Sobrenome', 'enabled': '' });
setAttributes(emailInput, { 'type': 'email', 'name': 'email', 'id': 'email', 'placeholder': 'E-mail', 'enabled': '' });
setAttributes(passwordInput, { 'type': 'password', 'name': 'password', 'id': 'password', 'placeholder': 'Senha', 'enabled': '' });
setAttributes(resetBtn, { 'type': 'reset', 'class': 'reset' });
setAttributes(registerBtn, { 'class': 'register' });

// 2. Previna a página de ser recarregada quando houver o submit utilizando preventDefault().

registerBtn.addEventListener('click', e => {
    e.preventDefault();
});

// 3. Mostre um alerta na página quando a tela terminar de ser carregada.

addEventListener("load", () => alert('Página Carregada'));

//4 . Adicione uma cor a um texto quando o mouse ficar acima do mesmo e outra cor quando ele sair do mesmo.

nameInput.addEventListener('mouseover', () => {
    nameInput.classList.add('mouseover');
});

nameInput.addEventListener('mouseout', () => {
    nameInput.removeAttribute('class', 'mouseover');
});

emailInput.addEventListener('mouseover', () => {
    emailInput.classList.add('mouseover');
});

emailInput.addEventListener('mouseout', () => {
    emailInput.removeAttribute('class', 'mouseover');
});

passwordInput.addEventListener('mouseover', () => {
    passwordInput.classList.add('mouseover');
});

passwordInput.addEventListener('mouseout', () => {
    passwordInput.removeAttribute('class', 'mouseover');
});

// 5. Faça um trecho de código que utilize algum evento de teclado, esse evento irá escrever o conteúdo do input em uma tag <p> e logo abaixo o número de vezes que esse evento foi chamado. Exemplo: <p>futebol</p> <p>7</p>

const nameContent = document.querySelector('#nameContent span');
const nameCounter = document.querySelector('#nameCounter span');
const emailContent = document.querySelector('#emailContent span');
const emailCounter = document.querySelector('#emailCounter span');
const passwordContent = document.querySelector('#passwordContent span');
const passwordCounter = document.querySelector('#passwordCounter span');

let countName = 1;
nameInput.addEventListener('keyup', e => {
    nameContent.textContent = e.target.value;
    nameCounter.textContent = countName++;
});

let countEmail = 1;
emailInput.addEventListener('keyup', e => {
    emailContent.textContent = e.target.value;
    emailCounter.textContent = countEmail++;
});

let countPassword = 1;
passwordInput.addEventListener('keyup', e => {
    passwordContent.textContent = e.target.value;
    passwordCounter.textContent = countPassword++;
});

// nameDiv.addEventListener("mouseover", () => {
//     if (nameInput.value.length > 0) {
//         nameInput.removeAttribute('disabled', '');
//         nameInput.setAttribute('enabled', '');
//     };
// });

// nameDiv.addEventListener('mouseleave', () => {
//     if (nameInput.value.length > 0) {
//         nameInput.removeAttribute('enabled', '');
//         nameInput.setAttribute('disabled', '');
//     };
// });

// emailDiv.addEventListener("mouseover", () => {
//     if (emailInput.value.length > 0) {
//         emailInput.removeAttribute('disabled', '');
//         emailInput.setAttribute('enabled', '');
//     };
// });

// emailDiv.addEventListener('mouseleave', () => {
//     if (emailInput.value.length > 0) {
//         emailInput.removeAttribute('enabled', '');
//         emailInput.setAttribute('disabled', '');
//     };
// });

// passwordDiv.addEventListener("mouseover", () => {
//     if (passwordInput.value.length > 0) {
//         passwordInput.removeAttribute('disabled', '');
//         passwordInput.setAttribute('enabled', '');
//     };
// });

// passwordDiv.addEventListener('mouseleave', () => {
//     if (passwordInput.value.length > 0) {
//         passwordInput.removeAttribute('enabled', '');
//         passwordInput.setAttribute('disabled', '');
//     };
// });
