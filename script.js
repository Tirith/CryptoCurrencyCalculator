const urlLtc = 'https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD,PLN,EUR';
const urlBtc = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,PLN,EUR';
const urlEth = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,PLN,EUR';
const urlBcc = 'https://min-api.cryptocompare.com/data/price?fsym=BCC&tsyms=USD,PLN,EUR';



var btcPrice, ltcPrice, ethPrice, bccPrice;
var btcPriceUSD, ltcPriceUSD, ethPriceUSD, bccPriceUSD;
var btcPriceEUR, ltcPriceEUR, ethPriceEUR, bccPriceEUR;

function getPrice(url, selector) {
    $.getJSON(url, function (data) {
        if (selector == '.btc>h3') {
            btcPrice = data.PLN
            btcPriceUSD = data.USD
            btcPriceEUR = data.EUR
        }

        if (selector == '.ltc>h3') {
            ltcPrice = data.PLN
            ltcPriceUSD = data.USD
            ltcPriceEUR = data.EUR
        }
        if (selector == '.eth>h3') {
            ethPrice = data.PLN
            ethPriceUSD = data.USD
            ethPriceEUR = data.EUR
        }

        if (selector == '.bcc>h3') {
            bccPrice = data.PLN
            bccPriceUSD = data.USD
            bccPriceEUR = data.EUR
        }

        var text = `Dolar: ${data.USD.toFixed(2)}<br>
                            PLN: ${data.PLN.toFixed(2)}<br>
                            Euro: ${data.EUR.toFixed(2)}`


        $(selector).html(text);
        sumPrice();
    });
}

function sumPrice() {
    let btcInputValue = $('.btcInput').val()
    let ltcInputValue = $('.ltcInput').val()
    let ethInputValue = $('.ethInput').val()
    let bccInputValue = $('.bccInput').val()



    var sumPLN = (btcPrice * btcInputValue) + (ltcPrice * ltcInputValue) + (ethPrice * ethInputValue) + (bccPrice * bccInputValue);
    var sumUSD = (btcPriceUSD * btcInputValue) + (ltcPriceUSD * ltcInputValue) + (ethPriceUSD * ethInputValue) + (bccPriceUSD * bccInputValue);
    var sumEUR = (btcPriceEUR * btcInputValue) + (ltcPriceEUR * ltcInputValue) + (ethPriceEUR * ethInputValue) + (bccPriceEUR * bccInputValue);

    if (!isNaN(sumPLN)) {
        $('.result').html(`<div class="label">You have coins worth</div><br><span class="sum"> ${sumPLN.toFixed(2)} PLN</span><br><span class="sum"> ${sumUSD.toFixed(2)} USD</span><br><span class="sum"> ${sumEUR.toFixed(2)} EUR</span>`);
    } else {
        $('.result').html(`Enter correct value`);
    }

}

setInterval(function () {
    getPrice(urlLtc, '.ltc>h3');
    getPrice(urlBtc, '.btc>h3');
    getPrice(urlEth, '.eth>h3');
    getPrice(urlBcc, '.bcc>h3');
}, 1000);

$("input").bind('input', function () {
    sumPrice();
    console.log('dd');
});