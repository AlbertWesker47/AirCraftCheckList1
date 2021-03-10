import {beforeStartingEngines, startingEngines, beforeTaxi, taxi,beforeTakeOff,lineUp,takeOff, afterTakeOff,cruise } from "./C130-Hercules.js";

const pro1 = beforeStartingEngines();
const pro2 = startingEngines();
const pro3 = beforeTaxi();
const pro4 = taxi();
const pro5 = beforeTakeOff();
const pro6 = lineUp();
const pro7 = takeOff();
const pro8 = afterTakeOff();
const pro9 = cruise();

let procedures = [pro1, pro2, pro3, pro4, pro5, pro6, pro7, pro8, pro9];

if (!String.prototype.contains) {
    String.prototype.contains = function(s) {
        return this.indexOf(s) > -1
    }
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}



//PROCEDURE 1
let maintitle = document.querySelector("h1");
let conteneur = document.createElement("table");
conteneur.setAttribute("class", "table procedure");
let conteneurTitre = document.createElement("thead");
let titre = document.createElement("th");
titre.innerText = "BEFORE STARTING ENGINES";insertAfter(maintitle,conteneur);
conteneur.appendChild(conteneurTitre);
conteneurTitre.appendChild(titre);
let proceduresBody = document.createElement("tbody");
conteneur.appendChild(proceduresBody);

for (const [key, value] of Object.keys(pro1))
{
    let procedureLine = document.createElement("tr");
    let procedureConstruct = document.createElement("td");
    procedureConstruct.innerText = key+"  ..................  ";
    proceduresBody.appendChild(procedureLine);
    let buttonRow = document.createElement("td");

    if (value.contains("(BOTH)"))
    {
        let tournevisSpatial = value.split('(');
        let displayText = tournevisSpatial[0];
        let pilot1button = document.createElement("input");
        pilot1button.setAttribute("class","button");
        pilot1button.setAttribute("type","button");
        pilot1button.setAttribute("value",displayText);
        let pilot2button = document.createElement("input");
        pilot2button.setAttribute("class","button");
        pilot2button.setAttribute("type","button");
        pilot2button.setAttribute("value",displayText);
        buttonRow.appendChild(pilot1button);
        buttonRow.appendChild(pilot2button);
        procedureLine.appendChild(procedureConstruct);
        procedureLine.appendChild(buttonRow);
    }

    else if (value.contains("__"))
    {

    }
    else if (value.contains(","))
    {

    }
    else
    {
        let procedureButton = document.createElement("input");
        procedureButton.setAttribute("class","button");
        procedureButton.setAttribute("type","button");
        procedureButton.setAttribute("value",value);
        buttonRow.appendChild(procedureButton);
        procedureLine.appendChild(procedureConstruct);
        procedureLine.appendChild(buttonRow);
    }
}



//PROCEDURE 2
maintitle = document.querySelector("table");
conteneur = document.createElement("table");
conteneur.setAttribute("class", "table procedure");
conteneurTitre = document.createElement("thead");
titre = document.createElement("th");
titre.innerText = "STARTING ENGINES";
insertAfter(maintitle,conteneur);
conteneur.appendChild(conteneurTitre);
conteneurTitre.appendChild(titre);
let proceduresBody = document.createElement("tbody");
conteneur.appendChild(proceduresBody);

for (const [key, value] of pro2)

{
    let procedureLine = document.createElement("tr");
    let procedureConstruct = document.createElement("td");
    procedureConstruct.innerText = key+"  ..................  ";
    proceduresBody.appendChild(procedureLine);
    let buttonRow = document.createElement("td");

    if (value.contains("(BOTH)"))
    {
        let tournevisSpatial = value.split('(');
        let displayText = tournevisSpatial[0];
        let pilot1button = document.createElement("input");
        pilot1button.setAttribute("class","button");
        pilot1button.setAttribute("type","button");
        pilot1button.setAttribute("value",displayText);
        let pilot2button = document.createElement("input");
        pilot2button.setAttribute("class","button");
        pilot2button.setAttribute("type","button");
        pilot2button.setAttribute("value",displayText);
        buttonRow.appendChild(pilot1button);
        buttonRow.appendChild(pilot2button);
        procedureLine.appendChild(procedureConstruct);
        procedureLine.appendChild(buttonRow);
    }

    else if (value.contains("__"))
    {

    }
    else if (value.contains(","))
    {

    }
    else
    {
        let procedureButton = document.createElement("input");
        procedureButton.setAttribute("class","button");
        procedureButton.setAttribute("type","button");
        procedureButton.setAttribute("value",value);
        buttonRow.appendChild(procedureButton);
        procedureLine.appendChild(procedureConstruct);
        procedureLine.appendChild(buttonRow);
    }
}



//PROCEDURE 3
maintitle = document.querySelector("table:last-of-type");
conteneur = document.createElement("table");
conteneur.setAttribute("class", "table procedure");
conteneurTitre = document.createElement("thead");
titre = document.createElement("th");
titre.innerText = "BEFORE TAXI";
insertAfter(maintitle,conteneur);
conteneur.appendChild(conteneurTitre);
conteneurTitre.appendChild(titre);
let proceduresBody = document.createElement("tbody");
conteneur.appendChild(proceduresBody);

for (const [key, value] of pro3)
{
    let procedureLine = document.createElement("tr");
    let procedureConstruct = document.createElement("td");
    procedureConstruct.innerText = key+"  ..................  ";
    proceduresBody.appendChild(procedureLine);
    let buttonRow = document.createElement("td");

    if (value.contains("(BOTH)"))
    {
        let tournevisSpatial = value.split('(');
        let displayText = tournevisSpatial[0];
        let pilot1button = document.createElement("input");
        pilot1button.setAttribute("class","button");
        pilot1button.setAttribute("type","button");
        pilot1button.setAttribute("value",displayText);
        let pilot2button = document.createElement("input");
        pilot2button.setAttribute("class","button");
        pilot2button.setAttribute("type","button");
        pilot2button.setAttribute("value",displayText);
        buttonRow.appendChild(pilot1button);
        buttonRow.appendChild(pilot2button);
        procedureLine.appendChild(procedureConstruct);
        procedureLine.appendChild(buttonRow);
    }

    else if (value.contains("__"))
    {

    }
    else if (value.contains(","))
    {

    }
    else
    {
        let procedureButton = document.createElement("input");
        procedureButton.setAttribute("class","button");
        procedureButton.setAttribute("type","button");
        procedureButton.setAttribute("value",value);
        buttonRow.appendChild(procedureButton);
        procedureLine.appendChild(procedureConstruct);
        procedureLine.appendChild(buttonRow);
    }
}


//PROCEDURE 4
maintitle = document.querySelector("table:last-of-type");
conteneur = document.createElement("table");
conteneur.setAttribute("class", "table procedure");
conteneurTitre = document.createElement("thead");
titre = document.createElement("th");
titre.innerText = "TAXI";
insertAfter(maintitle,conteneur);
conteneur.appendChild(conteneurTitre);
conteneurTitre.appendChild(titre);
proceduresBody = document.createElement("tbody");
conteneur.appendChild(proceduresBody);

for (const [key, value] of pro4)
{
    let procedureLine = document.createElement("tr");
    let procedureConstruct = document.createElement("td");
    procedureConstruct.innerText = key+"  ..................  ";
    proceduresBody.appendChild(procedureLine);
    let buttonRow = document.createElement("td");

    if (value.contains("(BOTH)"))
    {
        let tournevisSpatial = value.split('(');
        let displayText = tournevisSpatial[0];
        let pilot1button = document.createElement("input");
        pilot1button.setAttribute("class","button");
        pilot1button.setAttribute("type","button");
        pilot1button.setAttribute("value",displayText);
        let pilot2button = document.createElement("input");
        pilot2button.setAttribute("class","button");
        pilot2button.setAttribute("type","button");
        pilot2button.setAttribute("value",displayText);
        buttonRow.appendChild(pilot1button);
        buttonRow.appendChild(pilot2button);
        procedureLine.appendChild(procedureConstruct);
        procedureLine.appendChild(buttonRow);
    }

    else if (value.contains("__"))
    {

    }
    else if (value.contains(","))
    {

    }
    else
    {
        let procedureButton = document.createElement("input");
        procedureButton.setAttribute("class","button");
        procedureButton.setAttribute("type","button");
        procedureButton.setAttribute("value",value);
        buttonRow.appendChild(procedureButton);
        procedureLine.appendChild(procedureConstruct);
        procedureLine.appendChild(buttonRow);
    }
}



//PROCEDURE 5
maintitle = document.querySelector("table:last-of-type");
conteneur = document.createElement("table");
conteneur.setAttribute("class", "table procedure");
conteneurTitre = document.createElement("thead");
titre = document.createElement("th");
titre.innerText = "BEFORE TAKEOFF";
insertAfter(maintitle,conteneur);
conteneur.appendChild(conteneurTitre);
conteneurTitre.appendChild(titre);
proceduresBody = document.createElement("tbody");
conteneur.appendChild(proceduresBody);

for (const [key, value] of pro5)
{
    let procedureLine = document.createElement("tr");
    let procedureConstruct = document.createElement("td");
    procedureConstruct.innerText = key+"  ..................  ";
    proceduresBody.appendChild(procedureLine);
    let buttonRow = document.createElement("td");

    if (value.contains("(BOTH)"))
    {
        let tournevisSpatial = value.split('(');
        let displayText = tournevisSpatial[0];
        let pilot1button = document.createElement("input");
        pilot1button.setAttribute("class","button");
        pilot1button.setAttribute("type","button");
        pilot1button.setAttribute("value",displayText);
        let pilot2button = document.createElement("input");
        pilot2button.setAttribute("class","button");
        pilot2button.setAttribute("type","button");
        pilot2button.setAttribute("value",displayText);
        buttonRow.appendChild(pilot1button);
        buttonRow.appendChild(pilot2button);
        procedureLine.appendChild(procedureConstruct);
        procedureLine.appendChild(buttonRow);
    }

    else if (value.contains("__"))
    {

    }
    else if (value.contains(","))
    {

    }
    else
    {
        let procedureButton = document.createElement("input");
        procedureButton.setAttribute("class","button");
        procedureButton.setAttribute("type","button");
        procedureButton.setAttribute("value",value);
        buttonRow.appendChild(procedureButton);
        procedureLine.appendChild(procedureConstruct);
        procedureLine.appendChild(buttonRow);
    }
}



//PROCEDURE 6
maintitle = document.querySelector("table:last-of-type");
conteneur = document.createElement("table");
conteneur.setAttribute("class", "table procedure");
conteneurTitre = document.createElement("thead");
titre = document.createElement("th");
titre.innerText = "LINEUP";
insertAfter(maintitle,conteneur);
conteneur.appendChild(conteneurTitre);
conteneurTitre.appendChild(titre);
proceduresBody = document.createElement("tbody");
conteneur.appendChild(proceduresBody);

for (const [key, value] of pro6)
{
    let procedureLine = document.createElement("tr");
    let procedureConstruct = document.createElement("td");
    procedureConstruct.innerText = key+"  ..................  ";
    proceduresBody.appendChild(procedureLine);
    let buttonRow = document.createElement("td");

    if (value.contains("(BOTH)"))
    {
        let tournevisSpatial = value.split('(');
        let displayText = tournevisSpatial[0];
        let pilot1button = document.createElement("input");
        pilot1button.setAttribute("class","button");
        pilot1button.setAttribute("type","button");
        pilot1button.setAttribute("value",displayText);
        let pilot2button = document.createElement("input");
        pilot2button.setAttribute("class","button");
        pilot2button.setAttribute("type","button");
        pilot2button.setAttribute("value",displayText);
        buttonRow.appendChild(pilot1button);
        buttonRow.appendChild(pilot2button);
        procedureLine.appendChild(procedureConstruct);
        procedureLine.appendChild(buttonRow);
    }

    else if (value.contains("__"))
    {

    }
    else if (value.contains(","))
    {

    }
    else
    {
        let procedureButton = document.createElement("input");
        procedureButton.setAttribute("class","button");
        procedureButton.setAttribute("type","button");
        procedureButton.setAttribute("value",value);
        buttonRow.appendChild(procedureButton);
        procedureLine.appendChild(procedureConstruct);
        procedureLine.appendChild(buttonRow);
    }
}


//PROCEDURE 7
maintitle = document.querySelector("table:last-of-type");
conteneur = document.createElement("table");
conteneur.setAttribute("class", "table procedure");
conteneurTitre = document.createElement("thead");
titre = document.createElement("th");
titre.innerText = "TAKEOFF";
insertAfter(maintitle,conteneur);
conteneur.appendChild(conteneurTitre);
conteneurTitre.appendChild(titre);
proceduresBody = document.createElement("tbody");
conteneur.appendChild(proceduresBody);

for (const [key, value] of pro7)
{
    let procedureLine = document.createElement("tr");
    let procedureConstruct = document.createElement("td");
    procedureConstruct.innerText = key+"  ..................  ";
    proceduresBody.appendChild(procedureLine);
    let buttonRow = document.createElement("td");

    if (value.contains("(BOTH)"))
    {
        let tournevisSpatial = value.split('(');
        let displayText = tournevisSpatial[0];
        let pilot1button = document.createElement("input");
        pilot1button.setAttribute("class","button");
        pilot1button.setAttribute("type","button");
        pilot1button.setAttribute("value",displayText);
        let pilot2button = document.createElement("input");
        pilot2button.setAttribute("class","button");
        pilot2button.setAttribute("type","button");
        pilot2button.setAttribute("value",displayText);
        buttonRow.appendChild(pilot1button);
        buttonRow.appendChild(pilot2button);
        procedureLine.appendChild(procedureConstruct);
        procedureLine.appendChild(buttonRow);
    }

    else if (value.contains("__"))
    {

    }
    else if (value.contains(","))
    {

    }
    else
    {
        let procedureButton = document.createElement("input");
        procedureButton.setAttribute("class","button");
        procedureButton.setAttribute("type","button");
        procedureButton.setAttribute("value",value);
        buttonRow.appendChild(procedureButton);
        procedureLine.appendChild(procedureConstruct);
        procedureLine.appendChild(buttonRow);
    }
}

//PROCEDURE 8
maintitle = document.querySelector("table:last-of-type");
conteneur = document.createElement("table");
conteneur.setAttribute("class", "table procedure");
conteneurTitre = document.createElement("thead");
titre = document.createElement("th");
titre.innerText = "TAKEOFF";
insertAfter(maintitle,conteneur);
conteneur.appendChild(conteneurTitre);
conteneurTitre.appendChild(titre);
proceduresBody = document.createElement("tbody");
conteneur.appendChild(proceduresBody);

for (const [key, value] of pro8)
{
    let procedureLine = document.createElement("tr");
    let procedureConstruct = document.createElement("td");
    procedureConstruct.innerText = key+"  ..................  ";
    proceduresBody.appendChild(procedureLine);
    let buttonRow = document.createElement("td");

    if (value.contains("(BOTH)"))
    {
        let tournevisSpatial = value.split('(');
        let displayText = tournevisSpatial[0];
        let pilot1button = document.createElement("input");
        pilot1button.setAttribute("class","button");
        pilot1button.setAttribute("type","button");
        pilot1button.setAttribute("value",displayText);
        let pilot2button = document.createElement("input");
        pilot2button.setAttribute("class","button");
        pilot2button.setAttribute("type","button");
        pilot2button.setAttribute("value",displayText);
        buttonRow.appendChild(pilot1button);
        buttonRow.appendChild(pilot2button);
        procedureLine.appendChild(procedureConstruct);
        procedureLine.appendChild(buttonRow);
    }

    else if (value.contains("__"))
    {

    }
    else if (value.contains(","))
    {

    }
    else
    {
        let procedureButton = document.createElement("input");
        procedureButton.setAttribute("class","button");
        procedureButton.setAttribute("type","button");
        procedureButton.setAttribute("value",value);
        buttonRow.appendChild(procedureButton);
        procedureLine.appendChild(procedureConstruct);
        procedureLine.appendChild(buttonRow);
    }
}

//PROCEDURE 9
maintitle = document.querySelector("table:last-of-type");
conteneur = document.createElement("table");
conteneur.setAttribute("class", "table procedure");
conteneurTitre = document.createElement("thead");
titre = document.createElement("th");
titre.innerText = "TAKEOFF";
insertAfter(maintitle,conteneur);
conteneur.appendChild(conteneurTitre);
conteneurTitre.appendChild(titre);
proceduresBody = document.createElement("tbody");
conteneur.appendChild(proceduresBody);

for (const [key, value] of pro9)
{
    let procedureLine = document.createElement("tr");
    let procedureConstruct = document.createElement("td");
    procedureConstruct.innerText = key+"  ..................  ";
    proceduresBody.appendChild(procedureLine);
    let buttonRow = document.createElement("td");

    if (value.contains("(BOTH)"))
    {
        let tournevisSpatial = value.split('(');
        let displayText = tournevisSpatial[0];
        let pilot1button = document.createElement("input");
        pilot1button.setAttribute("class","button");
        pilot1button.setAttribute("type","button");
        pilot1button.setAttribute("value",displayText);
        let pilot2button = document.createElement("input");
        pilot2button.setAttribute("class","button");
        pilot2button.setAttribute("type","button");
        pilot2button.setAttribute("value",displayText);
        buttonRow.appendChild(pilot1button);
        buttonRow.appendChild(pilot2button);
        procedureLine.appendChild(procedureConstruct);
        procedureLine.appendChild(buttonRow);
    }

    else if (value.contains("__"))
    {

    }
    else if (value.contains(","))
    {

    }
    else
    {
        let procedureButton = document.createElement("input");
        procedureButton.setAttribute("class","button");
        procedureButton.setAttribute("type","button");
        procedureButton.setAttribute("value",value);
        buttonRow.appendChild(procedureButton);
        procedureLine.appendChild(procedureConstruct);
        procedureLine.appendChild(buttonRow);
    }



}
