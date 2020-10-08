let machine = document.querySelector('.machine');

let go_m = 2;
let mt = 2;
let interval;

window.addEventListener('load', () => {
    interval = setInterval(() => {
        machine.style.marginLeft = go_m + 'rem';
        go_m = go_m+1;

        if(go_m > 75) {
            mt = mt+2.8;
            machine.style.marginTop = mt +'rem';
            go_m = 2;
        }
 
        if(mt > 20) {
            clearInterval(interval);
        }

    }, 50)
})


let about_txt = document.querySelector('.about_txt');
let i=0;

let txt = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo at iusto nesciunt porro suscipit impedit earum velit ullam obcaecati ipsam, totam, quibusdam debitis dolorem, aut voluptate nisi! Sequi, eligendi quod!
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, praesentium? Numquam fuga esse magni at incidunt
enim. Eaque, provident quisquam, dolorem natus quae quos vitae suscipit, explicabo velit beatae cum!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iusto iure ullam laborum, quisquam error
sint quam molestias fugiat assumenda ipsam dolores quaerat minus, unde, veniam debitis tempora numquam corporis!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quibusdam ab inventore veniam blanditiis quisquam
 pariatur ullam adipisci! Cumque veniam est explicabo eveniet deserunt, sunt!`

 let typing = () => {
    if(i < txt.length) {
        about_txt.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typing, 30); 
    }
 };

 typing();

 let windowWidth = window.innerWidth


if(windowWidth < 1250 || windowWidth > 1500) {
    machine.style.display = 'none';
    clearInterval(interval);
}





