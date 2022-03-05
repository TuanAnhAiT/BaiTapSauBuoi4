let items = document.getElementsByClassName('item');
let timeCountDount = 10;
let globalTime = 10;
let msTime = 0;
let countDown;
let setMs;
let setTime = document.getElementById('set-time');
let btnCountDown = document.getElementById('btn-countdown');
let hc = document.getElementById('hours-c');
let mc = document.getElementById('minutes-c');
let sc = document.getElementById('seconds-c');
let msc = document.getElementById('micro-seconds-c');
for (let i = 0; i < items.length; i++) {
    var j = 1;
    if (i == 5) {
        items[i].addEventListener('click', () => {
            btnCountDown.classList.remove('hide');
            setTime.classList.add('hide');
            timeCountDount = Math.floor(timeCountDount / 10000) * 3600
                + Math.floor((timeCountDount - Math.floor(timeCountDount / 10000) * 10000) / 100) * 60 + timeCountDount % 100;
            globalTime = timeCountDount
            displayCountDown();
        })
    }
    else if (i == 11) {
        items[i].addEventListener('click', () => {
        })
    }
    else {
        items[i].addEventListener('click', () => {
            switch (j) {
                case 1:
                    timeCountDount = parseInt(items[i].innerHTML);
                    sc.innerHTML = timeCountDount + "";
                    break;
                case 2:
                    timeCountDount = timeCountDount * 10 + parseInt(items[i].innerHTML);
                    sc.innerHTML = timeCountDount + "";
                    break;
                case 3:
                    timeCountDount = timeCountDount * 10 + parseInt(items[i].innerHTML);
                    mc.innerHTML = Math.floor(timeCountDount / 100) + "";
                    sc.innerHTML = timeCountDount % 100 + "";
                    break;
                case 4:
                    timeCountDount = timeCountDount * 10 + parseInt(items[i].innerHTML);
                    mc.innerHTML = Math.floor(timeCountDount / 100) + "";
                    sc.innerHTML = timeCountDount % 100 + "";
                    break;
                case 5:
                    timeCountDount = timeCountDount * 10 + parseInt(items[i].innerHTML);
                    hc.innerHTML = Math.floor(timeCountDount / 10000) + "";
                    mc.innerHTML = Math.floor((timeCountDount - parseInt(hc.innerHTML) * 10000) / 100) + "";
                    sc.innerHTML = timeCountDount % 100 + "";
                    break;
                case 6:
                    timeCountDount = timeCountDount * 10 + parseInt(items[i].innerHTML);
                    hc.innerHTML = Math.floor(timeCountDount / 10000) + "";
                    mc.innerHTML = Math.floor((timeCountDount - parseInt(hc.innerHTML) * 10000) / 100) + "";
                    sc.innerHTML = timeCountDount % 100 + "";
                    break;
                default:
                    break;
            }
            j++;
            if (parseInt(hc.innerHTML) < 10 && hc.innerHTML != "00")
                hc.innerHTML = "0" + hc.innerHTML;
            if (parseInt(mc.innerHTML) < 10 && mc.innerHTML != "00")
                mc.innerHTML = "0" + mc.innerHTML;
            if (parseInt(sc.innerHTML) < 10 && sc.innerHTML != "00")
                sc.innerHTML = "0" + sc.innerHTML;
        })
    }
}

function displayCountDown() {
    hc.innerHTML = (Math.floor(timeCountDount / 3600) < 10) ? ("0" + Math.floor(timeCountDount / 3600)) : (Math.floor(timeCountDount / 3600) + "");
    sc.innerHTML = (timeCountDount % 60 < 10) ? ("0" + timeCountDount % 60) : (timeCountDount % 60 + "");
    mc.innerHTML = Math.floor((timeCountDount - parseInt(hc.innerHTML * 3600) - parseInt(sc.innerHTML)) / 60);
    mc.innerHTML = (parseInt(mc.innerHTML) < 10) ? "0" + mc.innerHTML : mc.innerHTML;
}
let btnStartCountDount = document.getElementById('btn-start-countdown');
let btnClearCountDount = document.getElementById('btn-clear-countdown');

btnStartCountDount.addEventListener('click', () => {
    if (btnStartCountDount.innerHTML == 'Start') {
        btnStartCountDount.innerHTML = 'Pause';
        countDown = setInterval(() => {
            timeCountDount--;
            displayCountDown();
        }, 1000);
        setMs = setInterval(() => {
            msTime++;
            msTime = (msTime > 999) ? 0 : msTime + 1;
            if (msTime < 10)
                msc.innerHTML = "00" + msTime;
            else if (msTime < 100)
                msc.innerHTML = "0" + msTime;
            else
                msc.innerHTML = msTime;
        }, 1)
    }
    else if (btnStartCountDount.innerHTML == 'Pause') {
        btnStartCountDount.innerHTML = 'Continue';
        clearInterval(countDown);
        clearInterval(setMs);
        btnStartCountDount.classList.remove('green');
        btnStartCountDount.classList.add('blue');
    }
    else if (btnStartCountDount.innerHTML == 'Continue') {
        btnStartCountDount.innerHTML = 'Pause';
        btnStartCountDount.classList.remove('blue');
        btnStartCountDount.classList.add('green');
        countDown = setInterval(() => {
            timeCountDount--;
            displayCountDown();
        }, 1000);
        setMs = setInterval(() => {
            msTime++;
            msTime = (msTime > 999) ? 0 : msTime + 1;
            if (msTime < 10)
                msc.innerHTML = "00" + msTime;
            else if (msTime < 100)
                msc.innerHTML = "0" + msTime;
            else
                msc.innerHTML = msTime;
        }, 1)
    }
});
btnClearCountDount.addEventListener('click', () => {
    timeCountDount = globalTime;
    msTime = 0;
    msc.innerHTML = "000";
    btnStartCountDount.innerHTML = 'Start';
    clearInterval(countDown);
    clearInterval(setMs);
    displayCountDown();
    btnStartCountDount.classList.remove('blue');
    btnStartCountDount.classList.add('green');
});
