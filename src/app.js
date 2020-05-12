import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
        currencies: [],
      
    },
    computed:{
        convertedCurrency: function(){

        },
        convertedCurrencyName: function(){

        }
    },
    mounted(){
      this.fetchCurrencies();
    },

    methods: {
        fetchCurrencies: function(){
            ("https://api.exchangeratesapi.io/latest")
        },
       
    }
    
  });
});