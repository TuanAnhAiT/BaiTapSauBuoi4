let btnStart = document.getElementById('btn-start');
let btnClear = document.getElementById('btn-clear');
let time = 0;
let msTime = 0;
let stopWatch;
let setMs;
let h = document.getElementById('hours');
let m = document.getElementById('minutes');
let s = document.getElementById('seconds');
let ms = document.getElementById('micro-seconds');

function displayStopWatch() {
    h.innerHTML = (Math.floor(time / 3600) < 10) ? ("0" + Math.floor(time / 3600)) : (Math.floor(time / 3600) + "");
    s.innerHTML = (time % 60 < 10) ? ("0" + time % 60) : (time % 60 + "");
    m.innerHTML = Math.floor((time - parseInt(h.innerHTML * 3600) - parseInt(s.innerHTML)) / 60);
    m.innerHTML = (parseInt(m.innerHTML) < 10) ? "0" + m.innerHTML : m.innerHTML;
}

btnStart.addEventListener('click', () => {
    if (btnStart.innerHTML == 'Start') {
        btnStart.innerHTML = 'Pause';
        stopWatch = setInterval(() => {
            time++;
            displayStopWatch();
        }, 1000);
        setMs = setInterval(() => {
            msTime++;
            msTime = (msTime > 999) ? 0 : msTime + 1;
            if (msTime < 10)
                ms.innerHTML = "00" + msTime;
            else if (msTime < 100)
                ms.innerHTML = "0" + msTime;
            else
                ms.innerHTML = msTime;
        }, 1)
    }
    else if (btnStart.innerHTML == 'Pause') {
        btnStart.innerHTML = 'Continue';
        clearInterval(setMs);
        clearInterval(stopWatch);
        btnStart.classList.remove('green');
        btnStart.classList.add('blue');
    }
    else if (btnStart.innerHTML == 'Continue') {
        btnStart.innerHTML = 'Pause';
        btnStart.classList.remove('blue');
        btnStart.classList.add('green');
        stopWatch = setInterval(() => {
            time++;
            displayStopWatch();
        }, 1000);
        setMs = setInterval(() => {
            msTime++;
            msTime = (msTime > 999) ? 0 : msTime + 1;
            if (msTime < 10)
                ms.innerHTML = "00" + msTime;
            else if (msTime < 100)
                ms.innerHTML = "0" + msTime;
            else
                ms.innerHTML = msTime;
        }, 1)
    }
});
btnClear.addEventListener('click', () => {
    time = 0;
    msTime = 0;
    ms.innerHTML = "000";
    btnStart.innerHTML = 'Start';
    clearInterval(stopWatch);
    clearInterval(setMs);
    displayStopWatch();
    btnStart.classList.remove('blue');
    btnStart.classList.add('green');
});