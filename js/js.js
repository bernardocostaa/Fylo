const btns = document.querySelectorAll(".btn");

function addErro(input,msg){
  const div = input.parentElement
  const inputSelect = div.querySelector('input')
  const spanElement = document.createElement('span')
  const span = div.querySelector('.erroText');
  if(span){
    return
  }
    spanElement.innerText = msg
    spanElement.classList.add('erroText')
    if(div.dataset.js === 'input-header'){
      spanElement.classList.add('absoluteItem')
      div.insertAdjacentElement('beforeend',spanElement)
      return
    }
    inputSelect.insertAdjacentElement('afterend',spanElement)
}

function removeMensagemErro(){
  const hasErro = document.querySelector('.erroText')
  if(hasErro){
      hasErro.remove()
  }
}


btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    const conteinerForm = event.currentTarget.parentElement
    const input = conteinerForm.querySelector('input')
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmpty = input.value.trim();
    const isValidEmail = emailRegex.test(input.value.trim());

    if (isValidEmail && isEmpty) {
        input.classList.remove("error");
        removeMensagemErro()
    } else {
        input.classList.add("error");
        addErro(input,'Please check your email')
    }
  });
});
