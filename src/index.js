import 'bootstrap/dist/css/bootstrap.min.css';
import showMessage from './messager';

const messageEl = document.createElement('div');
messageEl.classList.add('text-success', 'fw-bolder')
messageEl.textContent = 'I was put here by JavaScript!';
document.body.appendChild(messageEl);

showMessage('This is a sample ass shii')