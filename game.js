console.log('Hello');

let a = Math.floor(Math.random()*100)+1;

console.log(a);

const myForm = document.querySelector('#my-form');
const msg = document.querySelector('.msg');
const usedNum = document.querySelector('#usedNumber');
let li = [a];
li.pop();
let life = 10;
let end = 0;

function restart(){
    location.reload();
}

function onSubmit(){
    const numInput = document.getElementById("number");


        if(numInput.value === '' || numInput.value > 100 || numInput.value < 1){
            msg.classList.add('error');
            msg.innerHTML = 'Please enter answer';
            setTimeout( () => {
                msg.classList.toggle('error');
                msg.innerHTML = ''
            }, 3000);    // remove msg in 3 seconds
            numInput.focus();
            numInput.value = '';
        }else {
            li.push(numInput.value);
            life--;
            console.log(life);
            console.log(li);
            if (numInput.value > a) {
                msg.classList.add('error');
                msg.innerHTML = 'Too High!';
                setTimeout( () => {
                    msg.classList.toggle('error');
                    msg.innerHTML = ''
                }, 3000);    // remove msg in 3 seconds
            } else if (numInput.value < a) {
                msg.classList.add('error');
                msg.innerHTML = 'Too Low!';
                setTimeout( () => {
                    msg.classList.toggle('error');
                    msg.innerHTML = ''
                }, 3000);    // remove msg in 3 seconds
            } else {
                msg.classList.add('error');
                msg.innerHTML = 'Correct!!!';
                setTimeout( () => {
                    msg.classList.toggle('error');
                    msg.innerHTML = ''
                }, 3000);    // remove msg in 3 seconds
                end = 1;
            }
            document.getElementById("usedNumber").innerHTML = "Used Number : " + li.join("   ");
            numInput.value = '';
            numInput.focus();
        }
    
        if (life == 0){
            document.getElementById("stat").innerHTML = "Game Over";
            document.getElementById("stat").style("background-color: red;")
            document.getElementById("rebut").hidden = false;
            numInput.disabled = true;
        }
        
        if (end) {
            document.getElementById("stat").innerHTML = "Congratulation You Win!!";
            document.getElementById("rebut").hidden = false;
            numInput.disabled = true;
        }


}