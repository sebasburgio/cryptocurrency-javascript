let calcular = document.getElementById('calcular');
let btc = document.getElementById('btc');
let eth = document.getElementById('eth');
let usdInput = document.getElementById('usdInput');

let criptos = [];

fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true')
  .then(data => {
    return data.json();
  })

  .catch(err => {
    console.warn('Ha ocurrido un error: ' + err);
  })

  .then(result => {
    criptos = result;
    //console.log(criptos);

    let cantBtc = criptos.bitcoin.usd;
    let cantEth = criptos.ethereum.usd;

    calcular.addEventListener('click',()=>{
      let cantUsd = parseInt(usdInput.value);
      //console.log(cantUsd);

      let usdToBtc = cantUsd / cantBtc;
        //console.log(usdToBtc);
      let usdToEth = cantUsd / cantEth;
        //console.log(usdToEth);

      btc.innerHTML = `$${cantUsd} USD son ` + usdToBtc.toFixed(8) + ' Bitcoin';
      eth.innerHTML = `$${cantUsd} USD son ` + usdToEth.toFixed(8) + ' Ethereum';
    });

  });