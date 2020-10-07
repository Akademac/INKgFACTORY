//gallery_h2

let left_arrow = document.querySelector('#left_arrow');
let right_arrow = document.querySelector('#right_arrow');
let container = document.querySelector('#container');
let rx = 0;
right_arrow.addEventListener('click', () => {
    rx -= 100;
    left_arrow.style.display = 'inline';
    container.style.left = `${rx}vw`;
    if(rx < -800) {
        right_arrow.style.display = 'none';
    }
    console.log(rx);
})

left_arrow.addEventListener('click', () => {
    rx += 100;
    right_arrow.style.display = 'inline';
    container.style.left = `${rx}vw`;
    console.log(rx);
    
if(rx === 0) {
    left_arrow.style.display = 'none';
}

})

let go_back = document.querySelector('#go_back');
go_back.addEventListener('click', () => {
    window.open('index.html', '_self');
})