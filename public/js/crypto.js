(function (w)
{
   //localise Static Objects from base.js
   let Bu = Barge.utils,
       Ba = Barge.Array,
       Bs = Barge.String, //NIU atm
       Bm = Barge.Math,
       Bd = Barge.Dom;

   let Table = new Barge.Dom.Table(Bd.getEl(".data-table"), { stickOnScroll : false }),
       jx    = new Barge.Ajax();
   //console.log(Table);

   /*Table.insert([[1, 2, 3, 4],
                 [5, 6, 7, 8],
                 ["i", "so", "gr", "am"]]);*/

   /*jx.send({
              method  : "GET",
              url     : "https://api.coinmarketcap.com/v1/ticker/",
              timeout : 30000,
              headers : { "Access-Control-Allow-Origin" : "localhost:3000" },
              abort   : function (response)
              {
                 console.log("Request aborted");
              }
           }, function (response)
           {
              console.log(response.responseURL);
           });*/

   /**
    * Our Vue.js application.
    *
    * This manages the entire front-end website.
    */

       // The API we're using for grabbing metadata about each cryptocurrency
       // (including logo images). The service can be found at:
       // https://www.cryptocompare.com/api/

   const CRYPTOCOMPARE_API_URI = "https://www.cryptocompare.com";

// The API we're using for grabbing cryptocurrency prices.  The service can be
// found at: https://coinmarketcap.com/api/

   const COINMARKETCAP_API_URI = "https://api.coinmarketcap.com";

// The amount of milliseconds (ms) after which we should update our currency
// charts.

   const UPDATE_INTERVAL = 60 * 1000;

   let app = new Vue({
                        el      : "#cryptos-container",
                        data    : {
                           coins    : [],
                           coinData : {}
                        },
                        methods : {

                           /**
                            * Load up all cryptocurrency data.  This data is used to find what logos
                            * each currency has, so we can display things in a friendly way.
                            */
                           getCoinData : function ()
                           {
                              let self = this;

                              axios.get(CRYPTOCOMPARE_API_URI + "/api/data/coinlist")
                                   .then((resp) =>
                                         {
                                            this.coinData = resp.data.Data;
                                            this.getCoins();
                                         })

                                   .catch((err) =>
                                          {
                                             this.getCoins();
                                             console.error(err);
                                          });
                           },

                           /**
                            * Get the top 10 cryptocurrencies by value.  This data is refreshed each 5
                            * minutes by the backing API service.
                            */
                           getCoins : function ()
                           {
                              let self = this;

                              axios.get(COINMARKETCAP_API_URI + "/v1/ticker/?limit=10")
                                   .then((resp) =>
                                         {
                                            this.coins = resp.data;
                                         })
                                   .catch((err) =>
                                          {
                                             console.error(err);
                                          });
                           },

                           /**
                            * Given a cryptocurrency ticket symbol, return the currency's logo
                            * image.
                            */
                           getCoinImage : function (symbol)
                           {
                              return CRYPTOCOMPARE_API_URI + this.coinData[symbol].ImageUrl;
                           },

                           /**
                            * Return a CSS color (either red or green) depending on whether or
                            * not the value passed in is negative or positive.
                            */
                           getColor: (num) => {
                              return num > 0 ? "color:green" : "color:red";
                           },
                           created: function() {

                              this.getCoinData();

                           }
                        }
                     });

   /**

    * Once the page has been loaded and all of our app stuff is working, we'll

    * start polling for new cryptocurrency data every minute.

    */
console.log(app.data.coinData);
   setInterval(() => {

      app.getCoins();

   }, UPDATE_INTERVAL);
}(window));