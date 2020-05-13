import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
        currencies: [],
        currencyName: []
    },
    computed:{
        convertedCurrency: function(){
        },
        convertedCurrencyName: function(){
        },
        initialCurrencyAmount: function(){
            return this.currencies.USD;
        }
    },
    mounted(){
      this.fetchCurrencies();
    },
    methods: {
        fetchCurrencies: function(){
            fetch("https://api.exchangeratesapi.io/latest")
            .then(response => response.json())
            .then(data => this.currencies = data)
        },

    }
  });
});