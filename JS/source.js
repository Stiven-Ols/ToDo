
const btn = document.querySelector('[data-form-btn]');

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    console.log(input.value);
}
console.log(btn);

//  * addEventListener escucha eventos de los elementos
btn.addEventListener('click', createTask );