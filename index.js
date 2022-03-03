const axios = require('axios');

const config = require('./config'); // firebase config
const api = require('./api'); // connection string



var main = async function() {
    axios.get(api)
  .then(response => response.data.forEach(element => {
    config.doc(element.id).set(element);
  }));
}


setInterval(main, 1000); // every 1 minute


// example of how to use the api
/*obj = {
  id: 'BTC',
  currency: 'BTC',
  symbol: 'BTC',
  name: 'Bitcoin',
  logo_url: 'https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg',
  status: 'active',
  price: '44152.95680795',
  price_date: '2022-02-08T00:00:00Z',
  price_timestamp: '2022-02-08T22:28:00Z',
  circulating_supply: '18952487',
  max_supply: '21000000',
  market_cap: '836808339914',
  market_cap_dominance: '0.4048',
  num_exchanges: '408',
  num_pairs: '85077',
  num_pairs_unmapped: '6800',
  first_candle: '2011-08-18T00:00:00Z',
  first_trade: '2011-08-18T00:00:00Z',
  first_order_book: '2017-01-06T00:00:00Z',
  rank: '1',
  high: '67600.75636603',
  high_timestamp: '2021-11-08T00:00:00Z',
  '1h': {
    volume: '1423578610.45',
    price_change: '-54.16967504',
    price_change_pct: '-0.0012',
    volume_change: '-1441347928.34',
    volume_change_pct: '-0.5031',
    market_cap_change: '-1026384819.18',
    market_cap_change_pct: '-0.0012'
  },
  '7d': {
    volume: '206585384864.84',
    price_change: '5397.83886122',
    price_change_pct: '0.1393',
    volume_change: '5658725264.27',
    volume_change_pct: '0.0282',
    market_cap_change: '102544690332.61',
    market_cap_change_pct: '0.1397'
  }
}*/
