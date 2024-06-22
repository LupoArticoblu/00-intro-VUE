//VueJS è un framework reattivo di JS che permette di creare single page application(WEB APP utilizzabile su una singola pagina, tutto il codice viene recuperato in un singolo caricamento di pagina) e interfacce utente(UI), è open source ed è nato nel 2013.

//può essere innestato nel IDE sia tramite CDN(linkHTML), che tramite CLI(terminale) 

//fin ora abbiamo lavorato su 2 fronti: Creare una struttura di html tag da raggiungere e modificare facilmente e creare la logica che avesse un effetto specifico sul DOM. Questi 2 concetti si legano tanto bene da dover spesso creare tag dinamici nel nostro foglio di scripting:

/*
const out = document.getElementById('output');
const ciao = () => {
  return `<h1>HELLO WORLD</h1>`;
}
out.innerHTML = ciao();
*/

//VueJS opera in maniera diversa: 1. crea una struttura dati sotto forma di array e objects. 2 manipoliamo la struttura dati per riscrivere il DOM.