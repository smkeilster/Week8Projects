// let state = "";
// let city = "";
// let xhr = new XMLHttpRequest();




// function getCityState()
// {
// state = prompt("Enter your state:");
// city = prompt("Enter your city:");
// sendCityState(state,city)
// }

// function sendCityState()
// {
// xhr.open('GET', "http://api.wunderground.com/api/a6216ea356048dea/conditions/q/"+state+"/"+city+".json", true);
// xhr.send(state, city);
// xhr.addEventListener("readystatechange", processRequest, false);
// }


// function processRequest(e) {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         let response = JSON.parse(xhr.responseText);
//         console.log(response)
//         alert("Temp: "+response.current_observation.temp_f+
//         "\nHumidity: "+response.current_observation.relative_humidity+
//         "\nCardinal Wind Direction: "+response.current_observation.wind_dir+
//         "\nWind Speed: "+response.current_observation.wind_mph);
//     }
// }


let xhr = new XMLHttpRequest();
let answer = true;

function getCityState()
{
    let state = document.getElementById("state").value;
    let city = document.getElementById("city").value;
    sendCityState(state,city)
}

function sendCityState(state,city)
{
xhr.open('GET', "http://api.wunderground.com/api/a6216ea356048dea/conditions/q/"+state+"/"+city+".json", true);
xhr.send();
xhr.addEventListener("readystatechange", processRequest, false);
}

function processRequest(e)
{
    if (xhr.readyState == 4 && xhr.status == 200) {
    let response = JSON.parse(xhr.responseText);


    console.log(response)  

    document.getElementById("answer").innerHTML = "Temp: "+response.current_observation.temp_f+
    "<br>Humidity: "+response.current_observation.relative_humidity+
    "<br>Cardinal Wind Direction: "+response.current_observation.wind_dir+
    "<br>Wind Speed: "+response.current_observation.wind_mph;

    if(answer === false)
    {
    document.getElementById("answer").style.visibility = "hidden";
    answer = true;


    }
    else
    {
    document.getElementById("answer").style.visibility = "visible";
    answer = false;

    }
    if(response.response.error.description === "No cities match your search query")
    {
        alert("No cities match your search query");
    }
}}








// old code for SanFran
// let xhr = new XMLHttpRequest();
// xhr.open('GET', "http://api.wunderground.com/api/a6216ea356048dea/conditions/q/CA/San_Francisco.json", true);
// xhr.send();
// xhr.addEventListener("readystatechange", processRequest, false);
// function processRequest(e) {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         let response = JSON.parse(xhr.responseText);
//         alert("Temp"+response.current_observation.temp_f+"Humidity"+response.current_observation.relative_humidity);
//     }
// }
// Armed with this knowledge create a webpage that takes in city and state names for 
// a location then display the Current temperature, humidity, cardinal wind direction 
// and wind speed for that location