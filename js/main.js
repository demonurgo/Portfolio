window.onload = function () {
    let menuAtivo = false;

    window.addEventListener("scroll", function (e) {

        if (window.pageYOffset > 100) {
            this.document.querySelector("header").classList.add('is-scrolling');

        } else {
            this.document.querySelector("header").classList.remove('is-scrolling');
        }
    });

    const menu_btn = document.querySelector(".hamburger");
    const mobile_menu = document.querySelector(".mobile-nav");
    const black_box = document.querySelector(".black-box");

    menu_btn.addEventListener("click", function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');

        menuAtivo = !menuAtivo;

        if (menuAtivo) {
            black_box.classList.add('is-active'); // Ativa o fade in
            black_box.classList.remove('fadeout');
        } else {
            black_box.classList.remove('is-active'); // Remove o fade in
            black_box.classList.add('fadeout');
        }
    });

}

function projetos() {
    window.scrollTo({
        top:1000,
        left: 0,
        behavior: 'smooth',
    });

}

function sobre() {
    window.scrollTo({
        top:0,
        left: 0,
        behavior: 'smooth',
    });

}