document.addEventListener('DOMContentLoaded', function () {
    let burger = document.querySelector('.js-burg');
    let menu = document.querySelector('.header__nav');
    let header = document.querySelector('.header');
    let form = document.querySelector('.form');

    burger.addEventListener('click', function () {
        this.classList.toggle('active')
        menu.classList.toggle('active')
    })

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let message = document.querySelector('.form__message')
        message.classList.add('show')
        
        setTimeout(() => {
            message.classList.remove('show');
            form.reset();
        }, 3000)
    })

    window.addEventListener('scroll', function () {
        let offsetY = window.pageYOffset

        if (offsetY > header.clientHeight) {
            header.classList.add('fixed', 'is-show')
        } else {
            header.classList.remove('fixed', 'is-show')
        }
    })
})