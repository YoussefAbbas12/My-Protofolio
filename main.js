let menuIcon = document.querySelector('#menu-Icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () =>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
})



let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        console.log(height)
        console.log(offset)

        if(top >= offset - 150 && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active')
            })
        }
    })


    let header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


let darkModeIcon = document.querySelector('#darkMode-Icon');

darkModeIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeIcon.classList.toggle('bx-sun');
})


ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});


ScrollReveal().reveal('.home-content , .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img , .services-container , .projects-box , .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1 , .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3 , .home-content p , .about-content', { origin: 'right' });




// ===================================================================
// لفتع النافذه
let btn = document.querySelector('.open');

btn.addEventListener('click', () => {
    let cont = document.querySelector('.theme-content');
    cont.style.display = 'block';
})


// لغلق النافذه
let btn2 = document.querySelector('.close');

btn2.addEventListener('click', () => {
    let cont = document.querySelector('.theme-content');
    cont.style.display = 'none';
})

// غلق لنافذه عن عمل scroll

addEventListener('scroll', () => {
    if (document.querySelector('.theme-content')) {
        document.querySelector('.theme-content').style.display = 'none';
    }
})
// ===================================================================