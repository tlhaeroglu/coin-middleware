const coin_list = ["BTC", "ETH", "XRP","ADA","BNB","BTT","XVG","TLM","RSR","BAKE","ATOM"];
const api_url = "https://api.nomics.com/v1/currencies/ticker?";
const api_key = "key=YOUR-API-KEY-HERE";
const ids = `&ids=${coin_list.join()}`;
const interval = "&interval=1h,7d"; // 1h,7d,30d,ytd


module.exports = 
   (api_url+api_key+ids+interval);
