let xhr = new XMLHttpRequest();

let answer = true;


function getAstro()
{
xhr.open('GET', "http://api.open-notify.org/astros.json", true);
xhr.send();
xhr.addEventListener("readystatechange", processRequest, false);
}

function processRequest(e)
{   
    document.getElementById("answer").innerHTML = "";

    if (xhr.readyState == 4 && xhr.status == 200) {
    let response = JSON.parse(xhr.responseText);
    let list = document.createElement("ul");

    console.log(response)  
    console.log(response.people.length)
    for(i=0; i<response.people.length; i++)
    {
        let name = response.people[i].name
        let item = document.createElement("li");
        let textnode = document.createTextNode(name);
        item.appendChild(textnode);
        list.appendChild(item)
    //   console.log(response.people[i].name);
      
    }
    document.getElementById("answer").appendChild(list);


}}