const btns = document.querySelectorAll(".btn");


btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    const input = event.target.previousElementSibling.previousElementSibling;
    const spanErro = event.target.previousElementSibling
    console.log(spanErro);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmpty = input.value.trim();
    const isValidEmail = emailRegex.test(input.value.trim());

    if (isValidEmail && isEmpty) {
        input.classList.remove("error");
        spanErro.classList.add('remove')
    } else {
        input.classList.add("error");
        spanErro.classList.remove('remove')
    }
  });
});
