const urlLtc = 'https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD,PLN,EUR';
const urlBtc = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,PLN,EUR';
const urlEth = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,PLN,EUR';
const urlBcc = 'https://min-api.cryptocompare.com/data/price?fsym=BCH&tsyms=USD,PLN,EUR';


var index = 1;
var btcPrice, ltcPrice, ethPrice, bccPrice;
var btcPriceUSD = 0,
    ltcPriceUSD, ethPriceUSD, bccPriceUSD;
var btcPriceEUR, ltcPriceEUR, ethPriceEUR, bccPriceEUR;

function getPrice(url, selector) {
    $.getJSON(url, function (data) {

        var text = `Dolar: ${data.USD.toFixed(2)}<br>
                            PLN: ${data.PLN.toFixed(2)}<br>
                            Euro: ${data.EUR.toFixed(2)}`

        if (index <= 4) {
            showPrice();
            index++;

        }
        if (selector == '.btc>h3') {

            if (btcPriceUSD != data.USD && btcPriceUSD < data.USD) {
                let gain;
                gain = data.USD - btcPriceUSD;
                showPriceUp(gain);


            }

            if (btcPriceUSD != data.USD && btcPriceUSD > data.USD) {
                let fall;
                fall = btcPriceUSD - data.USD;
                showPriceDown(fall);
            }
            btcPrice = data.PLN
            btcPriceUSD = data.USD
            btcPriceEUR = data.EUR


        }

        if (selector == '.ltc>h3') {
            if (ltcPriceUSD != data.USD && ltcPriceUSD < data.USD) {
                let gain;
                gain = data.USD - ltcPriceUSD;
                showPriceUp(gain);
            }

            if (ltcPriceUSD != data.USD && ltcPriceUSD > data.USD) {
                let fall;
                fall = ltcPriceUSD - data.USD;
                showPriceDown(fall);
            }


            ltcPrice = data.PLN
            ltcPriceUSD = data.USD
            ltcPriceEUR = data.EUR
        }
        if (selector == '.eth>h3') {
            if (ethPriceUSD != data.USD && ethPriceUSD < data.USD) {
                let gain;
                gain = data.USD - ethPriceUSD;
                showPriceUp(gain);
            }

            if (ethPriceUSD != data.USD && ethPriceUSD > data.USD) {
                let fall;
                fall = ethPriceUSD - data.USD;
                showPriceDown(fall);
            }
            ethPrice = data.PLN
            ethPriceUSD = data.USD
            ethPriceEUR = data.EUR
        }

        if (selector == '.bcc>h3') {
            if (bccPriceUSD != data.USD && bccPriceUSD < data.USD) {
                let gain;
                gain = data.USD - bccPriceUSD;
                showPriceUp(gain);
            }

            if (bccPriceUSD != data.USD && bccPriceUSD > data.USD) {
                let fall;
                fall = bccPriceUSD - data.USD;
                showPriceDown(fall);
            }
            bccPrice = data.PLN
            bccPriceUSD = data.USD
            bccPriceEUR = data.EUR
        }

        function showPriceUp(gain) {

            $(selector).html(text + "<br><span class='up'>&uarr; " + gain.toFixed(2) + " USD</span>").stop(true, true).fadeOut("fast").fadeIn("slow");
        }

        function showPriceDown(fall) {

            $(selector).html(text + "<br><span class='down'>&darr; " + fall.toFixed(2) + " USD</span>").stop(true, true).fadeOut("fast").fadeIn("slow");
        }

        function showPrice() {

            $(selector).html(text + "<br><span class=''>!</span>").stop(true, true).fadeOut("fast").fadeIn("slow");
        }

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
        $('.result').html(`<div class="error">Enter correct value</div>`);
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