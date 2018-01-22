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

   socket.on('connect', function(){
      console.log('Connected from Client')
   });

   socket.on('bitcoin', function(data){
      console.log(data);

      Table.clearRows();
      Table.insert([[data["id"], data["buy_order_id"], data["sell_order_id"], data["currency"], data["amount"], data["price"], new Date(data["timestamp"])]]);
   });

   let Table = new Barge.Dom.Table(Bd.getEl(".data-table"), { stickOnScroll : false }),
       jx    = new Barge.Ajax();
   //console.log(Table);
/*
* amount: 0.0462
buy_order_id: 811204896
currency: "USD"
id: 48675703
price: 11609.52
provider: "BitStamp"
sell_order_id: 811204889
timestamp: "1516597021"*/




}(window, io));