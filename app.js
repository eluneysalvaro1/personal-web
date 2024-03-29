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
let heightWindow = 3649


let $paragraph = d.getElementById("paragraph_change")
let $buttonContact = d.querySelectorAll('#button_contact')
let $closeDialog = d.querySelector('.menu_dialog')
let $dialog = d.getElementById('dialog')
let $body = d.getElementById('body')
let $buttonTop = d.querySelectorAll('.button_top')
let $dinamicContent = d.getElementById('dinamic_content')
let $buttonDownloadCv = d.querySelector('.button_download_cv')
let $github = d.getElementById('github')
let $linkedin = d.getElementById('linkedin')


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
    if (target === $buttonContact[0] || target === $buttonContact[1]) {
        w.scrollTo({ top: heightWindow, right: 0, behavior: 'smooth' })
    }
    if (target == $buttonTop[0] || target == $buttonTop[1]) {
        w.scrollTo({ top: 0, right: 0, behavior: 'smooth' })
    }
    if (target == $buttonDownloadCv) {
        w.open('/helpers/files/CV.pdf', '_blank')
    }
    if (target == $linkedin) {
        w.open('https://www.linkedin.com/in/eluney-salvaro-5448071b9/', '_blank')
    }
    if (target == $github) {
        w.open('https://github.com/eluneysalvaro1', '_blank')
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