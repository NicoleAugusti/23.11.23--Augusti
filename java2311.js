
/*
Creare un programma che offre una interfaccia di comando all’utente (clicca 1 fai questo, clicca 2 fai questo
     … etc … clicca 0 per chiudere)
Il programma permette all’utente di creare una lista e offre queste funzionalità:

-Aggiungi un elemento alla lista
-Elimina un elemento dalla lista
-Ordina la lista in ordine alfabetico
-Modifica un elemento della lista
-Elimina l’intera lista
-Visualizza la lista

Segui un approccio modulare, e crea tu stesso le rispettive funzioni per realizzare le funzionalità. Bilancia l’uso di funzioni preimpostate da quelle che crei tu stesso.

Nota: rendi il programma reattivo, quindi ogni passo segue un feedback da parte dell’interfaccia, di corretta/incorretta esecuzione dell’operazione
*/

let programmaAttivo = true;

while (programmaAttivo) {
    let rispostaUtente = prompt("Cosa desidera fare?\n"
        + "1. Creare una lista della spesa:\n"
        + "2. Elimina un elemento dalla lista:\n"
        + "3. Ordina la lista in ordine alfabetico:\n"
        + "4. Modifica un elemento della lista:\n"
        + "5. Elimina l'intera lista: \n"
        + "6. Visualizza la lista:\n")

    if (rispostaUtente == 1) {
        console.log("sono dentro a if 1");
    }

    else if (rispostaUtente == 2) {
        console.log("sono dentro a if 2");
    }
    else if (rispostaUtente == 3) {
        prompt("sono dentro a if 3");
    }
    else if (rispostaUtente == 4) {
        console.log("sono dentro a if 4");
    }
    else if (rispostaUtente == 5) {
        console.log("sono dentro a if 5");
    }
    else if (rispostaUtente == 6) {
        console.log("sono dentro a if 6");
    }
    else if (rispostaUtente == "Fine") {
        console.log("programma finito");
        programmaAttivo = false;
    }
    else {
        prompt("Valore non valido ripartiamo");
    }
}
/*
let ListaSpesa = ["Pane", "Prosciutto", "Uova", "Acqua", "Bistecche"];

console.log("Questa è la lista della spesa:" + ListaSpesa);

ListaSpesa.push("Latte");

console.log("Ho aggiunto un elemento:" + ListaSpesa[5]);

ListaSpesa.splice(2, 1);
//Expected result: -uova 
*/
