const app = new Vue({
  el: '#app',
  data: {
    emails: [],
  },
  created() {
    this.generazioneMail();
  },
  methods: {
    generazioneMail() {
      this.emails=[];
      let numMail=10;
      for (let i = 0; i < numMail; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
             .then(response => {
              this.emails.push(response.data.response)
              console.log(response);
              })

      }
    }
  },
});
