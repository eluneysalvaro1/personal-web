let d = document

let $sendForm = d.querySelector('.send')
let $form = d.getElementById('form')


d.addEventListener('click', e => {
    let target = e.target
    e.preventDefault()
    if (target == $sendForm) {
        let $name = d.getElementById('name')
        let $email = d.getElementById('email')
        let $mesage = d.getElementById('mesage')

        let valid = {
            email: false,
            name: false,
            mesage: false
        }

        if (validator.contains($email.value) && validator.isEmail($email.value)) {
            valid.email = true
            $email.style.borderBlockColor = 'green'
        } else {
            $email.setAttribute('placeholder', 'Ingrese un email valido')
            $email.style.borderBlockColor = 'red'
        }

        if (!validator.isEmpty($name.value)) {
            valid.name = true
            $name.style.borderBlockColor = 'green'
        } else {
            $name.setAttribute('placeholder', 'Ingrese un nombre')
            $name.style.borderBlockColor = 'red'
        }

        if (!validator.isEmpty($mesage.value)) {
            valid.mesage = true
            $mesage.style.borderBlockColor = 'green'
        } else {
            $mesage.setAttribute('placeholder', 'Ingrese un mensaje')
            $mesage.style.borderBlockColor = 'red'
        }

        if (valid.name == true &&
            valid.email == true &&
            valid.mesage == true) {
            $form.submit()
        }



    }
})