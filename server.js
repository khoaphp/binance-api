// 0aZ2deTnrM0KyiwQZcmwilBch0UuJVfJuRgbpUtupnApmjJPEOw2oNeq4noTQcK1
// jXA8Hk0Y04B5umaFYOl4eI0wEN1dhnWkza7TokB6Q4KDbRmX0Ieg087tJzt7VvME
const Binance = require('node-binance-api');
const binance = new Binance().options({
  APIKEY: '---',
  APISECRET: '---'
});
//binance.futuresMiniTickerStream( 'BTCUSDT', console.log );
//binance.futuresBalance().then((data)=>{console.log(data);});
let orders = [
    {
    symbol:"ALICEUSDT",
    side: "BUY",
    type: "MARKET",
    quantity: "1",
    }
  ];

binance.futuresMiniTickerStream( 'BTCUSDT', console.log );
  
//binance.marketBuy("ALICEUSDT", 1).then(function(data){console.log(data)}).catch(function(e){console.log(e)});
/*  let quantity = 5, price = 0.00402030;
binance.sell("ALICEUSDT", 1, 20.65, {type:'LIMIT'}, (error, response) => {
  console.info("Limit Buy response", response);
  console.info("order id: " + response.orderId);
}); */ 