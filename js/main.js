"use strict";

const knopNieuw = document.getElementById("nieuw");
const rijen = 4;
const kolommen = 4;
const kleurplaat = new Kleurplaat(rijen, kolommen);

knopNieuw.addEventListener("click", () => {
    kleurplaat.maakKleurplaat();
    console.log(kleurplaat.getKleurplaat());
});