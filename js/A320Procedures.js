import {beforeStart, engineManagement, afterTakeOff, afterStart} from "./AirbusA320.js";


const pro1 = beforeStart();
const pro2 = engineManagement();
const pro3 = afterStart();
const pro4 = afterTakeOff();

let procedures = [pro1, pro2, pro3, pro4];

if (!String.prototype.contains) {
    String.prototype.contains = function(s) {
        return this.indexOf(s) > -1
    }
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

let maintitle = document.querySelector("h1");
let conteneur = document.createElement("table");
conteneur.setAttribute("class", "table procedure table-striped table-bordered table-sm");
let conteneurTitre = document.createElement("thead");
let titre = document.createElement("th");
titre.setAttribute("class", "th-sm")
titre.setAttribute("colspan", "2")
titre.setAttribute('style', 'font-size: 20px; cursor: pointer; text-align: center');
titre.innerText = "BEFORE START";
insertAfter(maintitle,conteneur);
conteneur.appendChild(conteneurTitre);
conteneurTitre.appendChild(titre);

let proceduresBody = document.createElement("tbody");
conteneur.appendChild(proceduresBody);


for (const [key, value] of pro1)
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

maintitle = document.querySelector("table");
conteneur = document.createElement("table");
conteneur.setAttribute("class", "table procedure table-striped table-bordered table-sm");
conteneurTitre = document.createElement("thead");
titre = document.createElement("th");
titre.innerText = "ENGINES MANAGEMENT";
titre.setAttribute("colspan", "2")
titre.setAttribute('style', 'font-size: 20px; cursor: pointer; text-align: center');
insertAfter(maintitle,conteneur);
conteneur.appendChild(conteneurTitre);
conteneurTitre.appendChild(titre);
proceduresBody = document.createElement("tbody");
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

maintitle = document.querySelector("table:last-of-type");
conteneur = document.createElement("table");
conteneur.setAttribute("class", "table procedure table-striped table-bordered table-sm");
conteneurTitre = document.createElement("thead");
titre = document.createElement("th");
titre.innerText = "AFTER START";
titre.setAttribute("colspan", "2")
titre.setAttribute('style', 'font-size: 20px; cursor: pointer; text-align: center');
insertAfter(maintitle,conteneur);
conteneur.appendChild(conteneurTitre);
conteneurTitre.appendChild(titre);
proceduresBody = document.createElement("tbody");
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



maintitle = document.querySelector("table:last-of-type");
conteneur = document.createElement("table");
conteneur.setAttribute("class", "table procedure table-striped table-bordered table-sm");
conteneurTitre = document.createElement("thead");
titre = document.createElement("th");
titre.innerText = "AFTER TAKEOFF / CLIMB";
titre.setAttribute("colspan", "2")
titre.setAttribute('style', 'font-size: 20px; cursor: pointer; text-align: center');
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
