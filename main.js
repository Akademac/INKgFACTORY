//scroll
let progress = document.querySelector('#scrollpath');

let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
    let progressHeight = (window.pageYOffset/totalHeight) * 100;
    progress.style.height = progressHeight + '%';
}

//nav bar 

let video = document.querySelector('#video');

window.addEventListener('scroll', () => {
    let header = document.querySelector('.header');
    let main_logo_text = document.querySelector('.main_logo_text');
    header.classList.toggle('sticky', window.scrollY > 0);
    header.classList.toggle('sticky_2', window.scrollY > 10);
    main_logo_text.classList.toggle('logo_up', window.scrollY > 0); //interesting
})

//Reload  Home

let home_btn = document.querySelectorAll('.home_btn');

home_btn.forEach(e => {
    e.addEventListener('click', () => {
        location.reload();
    })
});

let windowWidth = window.innerWidth;
let play = document.querySelector('.fa-play');

if(windowWidth > 500) {
    play.style.display = 'none';
    video.setAttribute('autoplay', true)
}

play.addEventListener('click', () => {
    video.play();
    console.log('asdss');
    play.style.display = 'none';        
})


//Go to Gallery

let gallery = document.querySelectorAll('.gallery_btn');

gallery.forEach(e => {
    e.addEventListener('click', () => {
        window.open('gallery.html', '_self');
    })
});

//Go to About
let about_btn = document.querySelector('#about_btn');

about_btn.addEventListener('click', () => {
    window.open('about.html', '_self');
});

