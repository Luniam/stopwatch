var stopWatchSwitch;
var resetSwitch;
var timeout;
var milsec = 0;
var sec = 0;
var minute = 0;
var hour = 0;

window.onload = function() {
    stopWatchSwitch = document.getElementById("checkbox1");
    resetSwitch = document.getElementById("checkbox3");
    stopWatchSwitch.addEventListener("click", stopWatchToggle);
    resetSwitch.addEventListener("click", resetWatch);
}

function resetWatch() {
    clearTimeout(timeout);
    var milsec = 0;
    var sec = 0;
    var minute = 0;
    var hour = 0;
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("mn").innerHTML = "00";
    document.getElementById("sc").innerHTML = "00";
    document.getElementById("milsc").innerHTML = "0";
    stopWatchSwitch.checked = false;
    setTimeout(switchResetAnim, 400);
}

function switchResetAnim() {
    resetSwitch.checked = false;
}


function stopWatchToggle() {
    if (stopWatchSwitch.checked == true) {
        resetSwitch.checked = false;
        timeout = setInterval(function() {
            startTimer(++milsec)
        }, 100);
    }

    else {
        resetSwitch.checked = false;
        clearTimeout(timeout);
    }
}

function startTimer(milsecond) {

    if (milsecond < 10) {
        document.getElementById("milsc").innerHTML =  milsecond;
    }

    else if (milsecond == 10) {
        sec++;

        if (sec == 60) {
            sec = 0;
            minute++;

            if (minute == 60) {
                minute = 0;
                hour++;
                if (hour < 10) {
                    document.getElementById("hr").innerHTML = "0" + hour;
                }

                else {
                    document.getElementById("hr").innerHTML = "0" + hour;
                }
            }



            if (minute < 10) {
                document.getElementById("mn").innerHTML = "0" + minute; 
            }

            else {
                document.getElementById("mn").innerHTML = minute;
            }
        }


        milsec = 0;
        milsecond = 0;
        document.getElementById("milsc").innerHTML = milsecond;
        if (sec < 10) {
            document.getElementById("sc").innerHTML = "0" + sec;
        }

        else {
            document.getElementById("sc").innerHTML = sec;
        }
    }
}