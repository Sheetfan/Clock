{
    let pad = (num, size) => {
        let s = "000000000" + num;
        return s.substring(s.length-size);
    }
    //to the 12-hour format
    let formatTime = (time) => {
        let hours = time.getHours();
        let mins = time.getMinutes();
        let secs = time.getSeconds();
        let ampm = hours > 12 ? "pm" : "am";
        hours = hours > 12 ? hours - 12 : hours;
        hours = hours == 0 ? 12 : hours;
        return pad(hours,2) + " : " + pad(mins,2) + " : " + pad(secs,2) + ` ${ampm}`;
    }
    //To render the time when the page load instead of waiting one second
    let time = new Date();
    let clock = document.getElementById("clock");
    clock.innerHTML = formatTime(time);

    const interval = setInterval(() => {
        time = new Date();
        clock.innerHTML = formatTime(time);
    },100);

}