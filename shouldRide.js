async function weabo() {
    async function wee(long, lat, index) {
        console.log(long + " " + lat);
        return fetch(`https://api.weather.gov/points/${lat},${long}`)
            .then(value => value.json())
            .then(value => value.properties.forecast)
            .then(forecastURL => fetch(forecastURL))
            .then(weatherResponse => weatherResponse.json())
            .then(weatherResponse => weatherResponse.properties.periods)
            .then(fillIn);


    }
    function fillIn(input) {
        var yee = new stringOutput();
        for (let x = 0; x < 7; x++) {

            document.getElementById("date" + x).innerText = yee.toDateString(x);
            document.getElementById("data" + x).innerText = yee.toString(input[x*2].shortForecast.toLowerCase());
            document.getElementById("date" + x).style.gridArea = "date" + x;
            document.getElementById("data" + x).style.gridArea = "data" + x;

        }
    }
    if (navigator.geolocation != null) {
        var location = navigator.geolocation.getCurrentPosition((position) => { wee(Math.round(position.coords.longitude * 10000) / 10000, Math.round(position.coords.latitude * 10000) / 10000) }, (error) => { if (error.PERMISSION_DENIED) { document.getElementById("info1").innerText = "user has denied" } });
    }
}
window.addEventListener('load', weabo);
class stringOutput {
    constructor() {
        this.daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        this.months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        this.today = new Date(Date.now());

    }
dayOfWeek(offset) {
    return this.daysOfWeek[(this.today.getDay()+offset)%7]
}
getDayofMonth(offset) {
let offsetday = new Date(Date.now()+86400000*offset);
return offsetday.getDay();
}
getMonth(offset) {
    let offsetday = new Date(Date.now()+86400000*offset);
    return this.months[offsetday.getMonth()];
    }
toDateString(offset) {
    return this.dayOfWeek(offset)+"-"+this.getDayofMonth(offset)+"-"+this.getMonth(offset);
}
toString(input) {
    if(input.toString().includes("snow")){
        return "Eh it is probably going to snow probably better not.";
    }
    else if(input.toString().includes("rain")||input.toString().includes("storm")||input.toString().includes("shower")){
        return "Tut tut looks like rain";
    }
    else if(input.toString().includes("wind")){
        return "A little windy but still get out there!"
    }
    else if(input.toString().includes("sun")){
        return "Seems like a great day for a ride!";
    }
    else if(input.toString().includes("cloud")){
        return "A couple of clouds never hurt nobody"
    }
    else {
        return input;
    }
}
}