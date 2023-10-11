; (function () {
    'strict mode'
    const form = document.querySelector('#form')
    const email = document.querySelector('#email')
    const name = document.querySelector('#name')
    const message = document.querySelector('#message')
    const formControl = document.querySelectorAll('#form .form-control')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        checkInputs()
    })

    function checkInputs() {
        const emailValue = email.value.trim().toLowerCase()

        if (emailValue === '') {
            // mostrar erro
            // add classe
            setErrorFor('Empty Field')
            email.focus()
        } else if (!checkEmail(emailValue)) {
            setErrorFor('Sorry, invalid format')
            email.focus()
        } else {
            // adicionar a classe de sucesso
            setSuccessFor()
        }
    }

    function setErrorFor(message) {
        const small = formControl[1].querySelector('small')
        formControl[1].className = 'form-control error'
        small.innerText = message
        console.log('error')
    }

    function setSuccessFor() {
        for (let i = 0; i <= 2; i++) {
            formControl[i].className = 'form-control success'
        }
    }

    // REGEX
    function checkEmail(email) {
        let re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
})()