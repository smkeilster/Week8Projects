// rAspDFczow00oI8K5loQF0TMrOFm0S9srtSdwwn3


// https://api.nal.usda.gov/ndb/reports/?ndbno=01009&type=b&format=json&api_key=rAspDFczow00oI8K5loQF0TMrOFm0S9srtSdwwn3

let xhr = new XMLHttpRequest();

function findFacts()
{
    let ndbno = document.getElementById("cheeseType").value;

    getCheese(ndbno)
}

function getCheese(ndbno)
{
xhr.open('GET', "https://api.nal.usda.gov/ndb/reports/?ndbno="+ndbno+"&type=b&format=json&api_key=rAspDFczow00oI8K5loQF0TMrOFm0S9srtSdwwn3", true);
xhr.send();
xhr.addEventListener("readystatechange", processRequest, false);
}

function processRequest(e)
{   
    document.getElementById("answer").innerHTML = "";
    if (xhr.readyState == 4 && xhr.status == 200) {
    let response = JSON.parse(xhr.responseText);


    console.log(response)  
    document.getElementById("answer").innerHTML = "Name: "+response.report.food.name+
    "<br>Energy: "+response.report.food.nutrients[1].value+" "+response.report.food.nutrients[1].unit+
    "<br>Protein: "+response.report.food.nutrients[2].value+" "+response.report.food.nutrients[2].unit+
    "<br>Total Fat: "+response.report.food.nutrients[3].value+" "+response.report.food.nutrients[3].unit+
    "<br>Carbohydrates: "+response.report.food.nutrients[4].value+" "+response.report.food.nutrients[4].unit;

  
}}