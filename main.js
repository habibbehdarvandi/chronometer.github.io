let hr = document.querySelector('.hr')
let min = document.querySelector('.min')
let sec = document.querySelector('.sec')
const startBtn = document.querySelector('[data-event="start"]')
const stopBtn = document.querySelector('[data-event="stop"]')
const resetBtn = document.querySelector('[data-event="reset"]')

// run Event Listener for start button just once...!


var interval;

startBtn.addEventListener('click',()=>{
    interval = setInterval(changeTime,1000);
},{once:true});

stopBtn.addEventListener('click',()=>{
    clearInterval(interval);
    startBtn.innerHTML = 'Continue';
    startBtn.addEventListener('click',()=>{
        clearInterval(interval);
        interval = setInterval(changeTime,1000);
    })
})

resetBtn.addEventListener('click',()=>{
    clearInterval(interval);
    startBtn.innerHTML = 'Start';
    hour=0;
    minute=0;
    seconde=0;
    hr.innerHTML='00';
    min.innerHTML='00';
    sec.innerHTML='00';

})

hour = 0;
minute = 0;
seconde = 0;

function changeTime() { 

    seconde++;
    if(seconde < 10){
        sec.innerHTML = '0' + seconde;
    }else{
        sec.innerHTML = seconde;
    }
    if(seconde >= 59){
        minute++;
        min.innerHTML = minute;
        seconde = 0;
    }
    if(minute < 10){
        min.innerHTML = '0' + minute;
    }
    if( minute >= 59 ){
        hour++;
        hr.innerHTML = hour;
        minute = 0;
    }
    if(hour < 10){
        hr.innerHTML = '0' + hour;
    }

 }