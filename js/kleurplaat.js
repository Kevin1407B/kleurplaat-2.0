"use strict";

class Kleurplaat {
    #rijen;
    #kolommen;
    #kleurplaat = [];
    constructor(rijen, kolommen) {
        this.#rijen = rijen;
        this.#kolommen = kolommen;
    }
    maakKleurplaat() {
        const tbody = document.querySelector("tbody");

        for (let rij = 0; rij < this.#rijen; rij ++) {
            const tr = tbody.insertRow();
            this.#kleurplaat[rij] = [];
            for (let kolom = 0; kolom < this.#kolommen; kolom ++) {
                const td = tr.insertCell();
                this.#kleurplaat[rij][kolom] = "W";
            }
        }
    }
    getKleurplaat() {
        return this.#kleurplaat;
    }
}