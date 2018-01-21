(function (w, io)
{
   'use strict';
   //localise Static Objects from base.js
   let Bu = Barge.utils,
       Ba = Barge.Array,
       Bs = Barge.String, //NIU atm
       Bm = Barge.Math,
       Bd = Barge.Dom;



   //let socket = io.connect('http://localhost:3000');
   //
   //socket.on('connect', function(){
   //   console.log('Connected from Client')
   //});
   //
   //socket.on('bitcoin', function(data){
   //   console.log(data)
   //});

   let Table = new Barge.Dom.Table(Bd.getEl(".data-table"), { stickOnScroll : false }),
       jx    = new Barge.Ajax();
   //console.log(Table);

   /*Table.insert([[1, 2, 3, 4],
                 [5, 6, 7, 8],
                 ["i", "so", "gr", "am"]]);*/


}(window, io));