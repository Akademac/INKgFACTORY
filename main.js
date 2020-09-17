//scroll
let progress = document.querySelector('#scrollpath');

let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
    let progressHeight = (window.pageYOffset/totalHeight) * 100;
    progress.style.height = progressHeight + '%';
}

//nav bar 

window.addEventListener('scroll', () => {
    let header = document.querySelector('.header');
    let main_logo_text = document.querySelector('.main_logo_text');
    let video = document.querySelector('#video');
    header.classList.toggle('sticky', window.scrollY > 0);
    header.classList.toggle('sticky_2', window.scrollY > 10);
    main_logo_text.classList.toggle('logo_up', window.scrollY > 0);
    video.play();
})



let gallery_h2 = document.querySelector('#gallery_h2');

gallery_h2.addEventListener('click', () => {
    window.open('gallery.html', '_self');
})