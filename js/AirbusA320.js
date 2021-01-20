import Avion from "./Avion.js";

 export const AirbusA320 = new Avion("Airbus","A320",
     "2 turbofan engines","42600","6112",
     "images/Airbus/face.jpg","A320.html");


AirbusA320.createCard();

export function beforeStart () {
 AirbusA320.procedureBeforeStart = new Map();
 AirbusA320.procedureBeforeStart.set("COCKPIT PREP", "COMPLET(BOTH)");
 AirbusA320.procedureBeforeStart.set("PINS AND COVERS", "PINS AND COVERS");
 AirbusA320.procedureBeforeStart.set("SIGNS", "ON/AUTO");
 AirbusA320.procedureBeforeStart.set("ADIRS", "NAV");
 AirbusA320.procedureBeforeStart.set("FUEL QUANTITY", "______KG");
 AirbusA320.procedureBeforeStart.set("TO DATA/V.BUGS", "SET(BOTH)");
 AirbusA320.procedureBeforeStart.set("BARO REF", "SET(BOTH)");
 AirbusA320.procedureBeforeStart.set("MOBILE PHONES", "OFF");
 AirbusA320.procedureBeforeStart.set("A/SKID & N/W STEERING", "AS RQRD");
 AirbusA320.procedureBeforeStart.set("WINDOWS/DOORS", "CLOSED(BOTH)");
 AirbusA320.procedureBeforeStart.set("BEACON", "ON/AUTO");
 AirbusA320.procedureBeforeStart.set("THR LEVERS", "IDLE");
 AirbusA320.procedureBeforeStart.set("PARKING BRAKE", "AS RQRD");
};

export function engineManagement () {
 AirbusA320.procedureEngineManagement = new Map();
 AirbusA320.procedureEngineManagement.set("ENGINE MASTER SWITCH", "OFF");
 AirbusA320.procedureEngineManagement.set("ENGINE START SELECTOR", "NORM");
 AirbusA320.procedureEngineManagement.set("ENGINE MANUAL START PB", "OFF");
 AirbusA320.procedureEngineManagement.set("CHECK ECAM OIL", "10 QTS ++");
 AirbusA320.procedureEngineManagement.set("ENGINE START SELECTOR", "IGN/START");
 AirbusA320.procedureEngineManagement.set("ENGINE 1 MASTER SWITCH", "ON");
 AirbusA320.procedureEngineManagement.set("ENGINE 2 MASTER SWITCH", "ON");
};

export function afterStart () {
 AirbusA320.procedureAfterStart = new Map();
 AirbusA320.procedureAfterStart.set("FLIGHT CONTROLS", "CHECKED(BOTH)");
 AirbusA320.procedureAfterStart.set("FLT INST", "CHECKED(BOTH)");
 AirbusA320.procedureAfterStart.set("BRIEFING", "CONFIRMING");
 AirbusA320.procedureAfterStart.set("FLAP SETTING", "CONF_____(BOTH)");
 AirbusA320.procedureAfterStart.set("V1. VR. V1/FLEX TEMP", "___(BOTH)");
 AirbusA320.procedureAfterStart.set("BUMP/DE-RATE", "SET(BOTH)");
 AirbusA320.procedureAfterStart.set("ATC+TCAS", "SET");
 AirbusA320.procedureAfterStart.set("RADAR+PWS", "SECURED FOR TO");
 AirbusA320.procedureAfterStart.set("CABIN", "TO NO BLUE");
 var ecamMemo = [];
 ecamMemo.push("AUTO BRK MAX");
 ecamMemo.push("SIGNS ON");
 ecamMemo.push("SPLRS ARM");
 ecamMemo.push("FLAPS TO");
 ecamMemo.push("TO CONFIG NORM");
 AirbusA320.procedureAfterStart.set("ECAM MEMO", ecamMemo);
 AirbusA320.procedureAfterStart.set("LAPTOP", "STOWED");
 AirbusA320.procedureAfterStart.set("STROBELIGHTS", "AS RQRD");
 AirbusA320.procedureAfterStart.set("CABIN CREW", "ADVISED");
 AirbusA320.procedureAfterStart.set("ENG MODE SEL", "AS RQRD");
 AirbusA320.procedureAfterStart.set("PACKS", "AS RQRD");
};

export function afterTakeOff () {
 AirbusA320.procedureAfterTakeOff = new Map();
 AirbusA320.procedureAfterTakeOff.set("LDG GEAR", "UP");
 AirbusA320.procedureAfterTakeOff.set("FLAPS", "ZERO");
 AirbusA320.procedureAfterTakeOff.set("PACKS", "ON");
 AirbusA320.procedureAfterTakeOff.set("BARO REF", "SET(BOTH)");
};