//per cominciare, destrutturiamo l'oggetto prendendo crateapp che è un metodo di vue ATTENZIONE: è case sensitive quindi usare il camelCase o restituirà un errore bloccante
const {createApp} = Vue;
//create app restituisce tutta l'app e dice al metodo mount dove deve montarla, in un elemento HTML con id app per convenzione
createApp({
  //passiamo un oggetto come proprietà(option object: data, gli altri 2 sono DOM e Life Cyrcle Hooks)
  //options API
  data() {
    return {
      //qui inseriamo le variabili(dati che ci servono per la nostra app)
      message: 'Hello World',
      altro_message: 'Buongiorno',
      //prendo dinamicamente il valore di colText usando v-bind nel tag h2
      colText: 'blue',
      colText2: 'red',
      colText3: 'yellow',
      mioTestoHTML: 'Testo <strong>html</strong>',
      mostra: true
      //ATTENZIONE: ogni volta che il valore del dato cambia, il DOM viene riscritto e reattivamente cambia in tutti i punti del codice
    }
  },
  //altri metodi: le nostre funzioni andranno racchiuse tutte nell'oggetto methods
  methods: {
    funzioneEstesa: function() {
      console.log('funzione estesa');
    },
    funCompatta() {
      console.log('funzione compatta');
    },
    arrow: () => {
      console.log('arrow function');
    },
    testoRosso() {
      //per raggiungere un elemento del return di data bisogna usare this perchè i data sono elementi di tutto vue
      this.colText2 = 'green';
    },
    testoGiallo(colore) {
      this.colText3 = colore;
    },
    mostraTesto() {
      this.mostra = !this.mostra;
    }
  }  
}).mount('#app')
//questo può essere sia il nosto sito completo che un solo widget funzionante con vue, mentre il resto della pagina può rispondere ad altro

console.log(Vue);
console.log(createApp);

//DATA-BINDING: bidirezionalità dei dati, se uno cambia istantaneamente cambierà anche l'altro come fosse in ascolto