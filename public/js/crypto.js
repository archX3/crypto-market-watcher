(function (w, io)
{
   'use strict';
   //localise Static Objects from base.js
   let Bu = Barge.utils,
       Ba = Barge.Array,
       Bs = Barge.String, //NIU atm
       Bm = Barge.Math,
       Bd = Barge.Dom;

   let socket = io.connect('http://localhost:3000');

   let Table = new Barge.Dom.Table(Bd.getEl(".data-table"), { stickOnScroll : false }),
       jx    = new Barge.Ajax();

   socket.on('connect', function ()
   {
      console.log('Connected from Client')
   });

   socket.on('bitcoin', function (data)
   {
      console.log(data);

      Table.clearRows();

      Table.insert([
                      [
                         data["bitstamp"],
                         data["gdax"],
                         data["bitMex"],
                         data["bittrex"],
                         data["bitfinex"],
                         data["cex"],
                         data["okcoin"],
                         data["poloniex"],
                         data["gemini"]
                      ]
                   ]);
   });

   //Table.insert([["id", "buy_order_id", "sell_order_id", "currency", "amount", "price", "timestamp"]]);

   /*
   let app = new Vue({
                        el      : "#cryptos-container",
                        data    : {
                           title      : "Nana is coming",
                           author     : "Nana",
                           src        : "my_loc",
                           name       : "didn't ask",
                           websiteTag : "<a href='demo.html'>Demo Vue</a>",
                           age        : 24
                        },
                        methods : {}})*/

}(window, io));