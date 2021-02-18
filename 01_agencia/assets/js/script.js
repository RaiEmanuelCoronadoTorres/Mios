let menu = document.querySelector('#menu-li');
let menu_bar = document.querySelector('#menu-icon');

    menu_bar.addEventListener('click', function(){
        menu.classList.toggle('menu-toggle');
    })