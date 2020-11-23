const app = new Vue({
  el: '#app',
  data: {
    emails: [],
  },
  created() {
    this.generazioneMail();//richiamo funz di generazione con this funzionante in vue all'interno del created
  },
  methods: {
    //funzione di generazione di 10 mail num impostato dall variabile num mail
    generazioneMail() {
      this.emails=[];
      let numMail=10;
      for (let i = 0; i < numMail; i++) {//ciclo for x10
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')//link per richiamo mail random
             .then(response => {
              this.emails.push(response.data.response)//push delle mail nel pacchetto all'interno del array mails
              console.log(response);//console log per controllo pacchetti
              })

      }
    }
  },
});
