//Variables
let d = document
let w = window
let words = ["Analizo", "Aprendo", "Indago", "Escucho"]
let data = [{
        name: "html",
        url: "./helpers/img/html.svg"
    },
    {
        name: "css",
        url: "./helpers/img/css.svg"
    },
    {
        name: "js",
        url: "./helpers/img/js.svg"
    },
    {
        name: "bootstrap",
        url: "./helpers/img/bootstrap.svg"
    },
    {
        name: "firebase",
        url: "./helpers/img/firebase.svg"
    },
    {
        name: "php",
        url: "./helpers/img/php.svg"
    },
    {
        name: "mysql",
        url: "./helpers/img/mysql.svg"
    },
    {
        name: "react",
        url: "./helpers/img/react.svg"
    },
    {
        name: "sass",
        url: "./helpers/img/sass.svg"
    }
]

let $paragraph = d.getElementById("paragraph_change")
let $buttonContact = d.querySelector('#button_contact')
let $closeDialog = d.querySelector('.menu_dialog')
let $dialog = d.getElementById('dialog')
let $body = d.getElementById('body')
let $buttonTop = d.querySelectorAll('.button_top')
let $dinamicContent = d.getElementById('dinamic_content')
let $buttonDownloadCv = d.getElementById('download_cv')


const changeParagraph = () => {
    let i = 0
    let interval = setInterval(() => {
        if (i > 2) {
            i = 0
            $paragraph.textContent = words[i]
        } else {
            $paragraph.textContent = words[i]
        }
        i++
    }, 2500);
}

function dinamism(data, container) {
    data.forEach(el => {
        container.innerHTML += `<img class="dinamic_img" src="${el.url}" alt="${el.name}" /> `
    });
}



d.addEventListener('click', e => {
    let target = e.target
    e.preventDefault()
    if (target === $buttonContact) {
        $dialog.classList.remove('disabled')
        $dialog.classList.add('active')
    }
    if (target == $closeDialog) {
        $dialog.classList.remove('active')
        $dialog.classList.add('disabled')
    }
    if (target == $buttonTop[0] || target == $buttonTop[1]) {
        console.log('hola soy', $buttonTop)
        w.scrollTo({ top: 0, right: 0, behavior: 'smooth' })
    }
    if (target == $buttonDownloadCv) {

        console.log('buenas')


    }
})

console.log($buttonTop)

w.addEventListener('scroll', e => {
    if (w.scrollY >= 0 && w.scrollY <= 350) {
        $buttonTop[0].classList.remove('active')
        $buttonTop[0].classList.add('disabled')
    } else if (w.scrollY > 350) {
        $buttonTop[0].classList.remove('disabled')
        $buttonTop[0].classList.add('active')

    }
})






dinamism(data, $dinamicContent)
changeParagraph()