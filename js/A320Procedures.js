import {beforeStart, engineManagement, afterTakeOff, afterStart} from "./AirbusA320";


const pro1 = beforeStart();

console.log(pro1);

for (const [key, value] of pro1) {
    console.log(`${key} = ${value}`);
}

const pro2 = engineManagement();
const pro3 = afterStart();
const pro4 = afterTakeOff();

let procedures = [pro1, pro2, pro3, pro4];

for(let i=0; i < procedures.length;i++)
{
    console.log(procedures[i]);
}
