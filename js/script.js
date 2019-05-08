let timeout = document.querySelector(".timeout");
console.log(timeout.innerText.split(":"));

let data = {
    minute: Number(timeout.innerText.split(":")[0]),
    second: Number(timeout.innerText.split(":")[1])

}
console.log(data.minute, data.second);

let interv = setInterval(() => {
    data.second--;
    if(data.second==-1){
        data.minute--;
        data.second=59;
    }
    if(data.minute==-1){
        data.minute=0;
        data.second=0;
        
        clearInterval(interv);
        alert("Vaxtiniz bitti");
       
    }

    timeout.innerText=formatTime(data.minute, data.second);
    
}, 300);


function formatTime(min, sec) {
    let r = "";
    if (min < 10) {
        r += "0" + min;
    } else {
        r += min;
    }
    r += ":"
    if (sec < 10) {
        r += "0" + sec;
    } else {
        r += sec;
    }
    return r;
}