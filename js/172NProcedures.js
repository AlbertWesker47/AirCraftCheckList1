import {beforeStartingEngineProcedure,startingEngineProcedure,beforeTakeOffProcedure, takeOffProcedure} from "./Cessna172N.js"

const pro1 = beforeStartingEngineProcedure();
const pro2 = startingEngineProcedure();
const pro3 = beforeTakeOffProcedure();
const pro4 = takeOffProcedure();

let procedures = [pro1,pro2,pro3,pro4];

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


    let procedureButton = document.createElement("input");
    procedureButton.setAttribute("class","button");
    procedureButton.setAttribute("type","button");
    procedureButton.setAttribute("value",value);
    buttonRow.appendChild(procedureButton);
    procedureLine.appendChild(procedureConstruct);
    procedureLine.appendChild(buttonRow);

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
proceduresBody = document.createElement("tbody");
conteneur.appendChild(proceduresBody);

for (const [key, value] of pro2)

{
    let procedureLine = document.createElement("tr");
    let procedureConstruct = document.createElement("td");
    procedureConstruct.innerText = key+"  ..................  ";
    proceduresBody.appendChild(procedureLine);
    let buttonRow = document.createElement("td");


    let procedureButton = document.createElement("input");
    procedureButton.setAttribute("class","button");
    procedureButton.setAttribute("type","button");
    procedureButton.setAttribute("value",value);
    buttonRow.appendChild(procedureButton);
    procedureLine.appendChild(procedureConstruct);
    procedureLine.appendChild(buttonRow);

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
proceduresBody = document.createElement("tbody");
conteneur.appendChild(proceduresBody);

for (const [key, value] of pro3)
{
    let procedureLine = document.createElement("tr");
    let procedureConstruct = document.createElement("td");
    procedureConstruct.innerText = key+"  ..................  ";
    proceduresBody.appendChild(procedureLine);
    let buttonRow = document.createElement("td");



    let procedureButton = document.createElement("input");
    procedureButton.setAttribute("class","button");
    procedureButton.setAttribute("type","button");
    procedureButton.setAttribute("value",value);
    buttonRow.appendChild(procedureButton);
    procedureLine.appendChild(procedureConstruct);
    procedureLine.appendChild(buttonRow);

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


    let procedureButton = document.createElement("input");
    procedureButton.setAttribute("class","button");
    procedureButton.setAttribute("type","button");
    procedureButton.setAttribute("value",value);
    buttonRow.appendChild(procedureButton);
    procedureLine.appendChild(procedureConstruct);
    procedureLine.appendChild(buttonRow);

}



