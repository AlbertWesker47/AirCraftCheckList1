import {beforeStart, engineManagement, afterTakeOff, afterStart} from "./AirbusA320.js";


const pro1 = beforeStart();

console.log(pro1);



const pro2 = engineManagement();
const pro3 = afterStart();
const pro4 = afterTakeOff();

let procedures = [pro1, pro2, pro3, pro4];

for(let i=0; i < procedures.length;i++)
{
    console.log(procedures[i]);
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

let maintitle = document.querySelector("h1");
let conteneur = document.createElement("table");
conteneur.setAttribute("class", "table procedure");
let conteneurTitre = document.createElement("thead");
let titre = document.createElement("th");
titre.innerText = "BEFORE START";
//maintitle.appendChild(conteneur);
insertAfter(maintitle,conteneur);
conteneur.appendChild(conteneurTitre);
conteneurTitre.appendChild(titre);

let proceduresBody = document.createElement("tbody");
conteneur.appendChild(proceduresBody);


for (const [key, value] of pro1) {
    let procedureLine = document.createElement("tr");
    let procedureConstruct = document.createElement("td");
    procedureConstruct.innerText = key+"  ..................  "+value;
    proceduresBody.appendChild(procedureLine);
    procedureLine.appendChild(procedureConstruct);
    console.log(`${key} = ${value}`);
}
