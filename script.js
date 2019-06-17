$(document).ready(function () {

    const urlLtc = 'https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD,PLN,EUR';
    const urlBtc = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,PLN,EUR';
    const urlEth = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,PLN,EUR';
    const urlBcc = 'https://min-api.cryptocompare.com/data/price?fsym=BCH&tsyms=USD,PLN,EUR';
    const urlEtc = 'https://min-api.cryptocompare.com/data/price?fsym=ETC&tsyms=USD,PLN,EUR';
    const urlXrp = 'https://min-api.cryptocompare.com/data/price?fsym=XRP&tsyms=USD,PLN,EUR';
    const urlEos = 'https://min-api.cryptocompare.com/data/price?fsym=EOS&tsyms=USD,PLN,EUR';
    const urlZec = 'https://min-api.cryptocompare.com/data/price?fsym=ZEC&tsyms=USD,PLN,EUR';


    var index = 1;
    var btcPrice, ltcPrice, ethPrice, bccPrice, etcPrice, xrpPrice, eosPrice, zecPrice;
    var btcPriceUSD = 0,
        ltcPriceUSD, ethPriceUSD, bccPriceUSD, etcPriceUSD, xrpPriceUSD, eosPriceUSD, zecPriceUSD;
    var btcPriceEUR, ltcPriceEUR, ethPriceEUR, bccPriceEUR, etcPriceEUR, xrpPriceEUR, eosPriceEUR, zecPriceEUR;

    function getPrice(url, selector) {
        $.getJSON(url, function (data, status) {


            var text;
            if (status == "success") {
                text = `Dolar: ${data.USD.toFixed(3)}<br>
                            PLN: ${data.PLN.toFixed(3)}<br>
                            Euro: ${data.EUR.toFixed(3)}`

            } else {
                text = "Error";
            }

            if (index <= 8) { //amount of crypto
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

            if (selector == '.zec>h3') {

                if (zecPriceUSD != data.USD && zecPriceUSD < data.USD) {
                    let gain;
                    gain = data.USD - zecPriceUSD;
                    showPriceUp(gain);
                }

                if (zecPriceUSD != data.USD && zecPriceUSD > data.USD) {
                    let fall;
                    fall = zecPriceUSD - data.USD;
                    showPriceDown(fall);
                }
                zecPrice = data.PLN
                zecPriceUSD = data.USD
                zecPriceEUR = data.EUR
            }



            if (selector == '.eos>h3') {

                if (eosPriceUSD != data.USD && eosPriceUSD < data.USD) {
                    let gain;
                    gain = data.USD - eosPriceUSD;
                    showPriceUp(gain);
                }

                if (eosPriceUSD != data.USD && eosPriceUSD > data.USD) {
                    let fall;
                    fall = eosPriceUSD - data.USD;
                    showPriceDown(fall);
                }
                eosPrice = data.PLN
                eosPriceUSD = data.USD
                eosPriceEUR = data.EUR
            }


            if (selector == '.xrp>h3') {
                if (xrpPriceUSD != data.USD && xrpPriceUSD < data.USD) {
                    let gain;
                    gain = data.USD - xrpPriceUSD;
                    showPriceUp(gain);
                }

                if (xrpPriceUSD != data.USD && xrpPriceUSD > data.USD) {
                    let fall;
                    fall = xrpPriceUSD - data.USD;
                    showPriceDown(fall);
                }
                xrpPrice = data.PLN
                xrpPriceUSD = data.USD
                xrpPriceEUR = data.EUR
            }

            if (selector == '.etc>h3') {

                if (etcPriceUSD != data.USD && etcPriceUSD < data.USD) {
                    let gain;
                    gain = data.USD - etcPriceUSD;
                    showPriceUp(gain);
                }

                if (etcPriceUSD != data.USD && etcPriceUSD > data.USD) {
                    let fall;
                    fall = etcPriceUSD - data.USD;
                    showPriceDown(fall);
                }
                etcPrice = data.PLN
                etcPriceUSD = data.USD
                etcPriceEUR = data.EUR
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
                $(selector).html(text + "<br><span class='up'>&uarr; " + gain.toFixed(3) + " USD</span>").stop(true, true).fadeOut("fast").fadeIn("slow");
            }

            function showPriceDown(fall) {
                $(selector).html(text + "<br><span class='down'>&darr; " + fall.toFixed(3) + " USD</span>").stop(true, true).fadeOut("fast").fadeIn("slow");
            }

            function showPrice() {
                $(selector).html(text + "<br><span class=''>-</span>").stop(true, true).fadeOut("fast").fadeIn("slow");
            }
            sumPrice();
        });
    }

    function sumPrice() {
        let btcInputValue = $('.btcInput').val()
        let ltcInputValue = $('.ltcInput').val()
        let ethInputValue = $('.ethInput').val()
        let bccInputValue = $('.bccInput').val()
        let etcInputValue = $('.etcInput').val()
        let xrpInputValue = $('.xrpInput').val()
        let eosInputValue = $('.eosInput').val()
        let zecInputValue = $('.zecInput').val()


        var sumPLN = (btcPrice * btcInputValue) + (ltcPrice * ltcInputValue) + (ethPrice * ethInputValue) + (bccPrice * bccInputValue) + (etcPrice * etcInputValue) + (xrpPrice * xrpInputValue) + (eosPrice * eosInputValue) + (zecPrice * zecInputValue);
        var sumUSD = (btcPriceUSD * btcInputValue) + (ltcPriceUSD * ltcInputValue) + (ethPriceUSD * ethInputValue) + (bccPriceUSD * bccInputValue) + (etcPriceUSD * etcInputValue) + (xrpPriceUSD * xrpInputValue) + (eosPriceUSD * eosInputValue) + (zecPriceUSD * zecInputValue);
        var sumEUR = (btcPriceEUR * btcInputValue) + (ltcPriceEUR * ltcInputValue) + (ethPriceEUR * ethInputValue) + (bccPriceEUR * bccInputValue) + (etcPriceEUR * etcInputValue) + (xrpPriceEUR * xrpInputValue) + (eosPriceEUR * eosInputValue) + (zecPriceEUR * zecInputValue);

        if (!isNaN(sumPLN)) {
            $('.result').html(`<div class="label">You have coins worth</div><br><span class="sum"> ${sumUSD.toFixed(2)} USD</span><br><span class="sum"> ${sumPLN.toFixed(2)} PLN</span><br><span class="sum"> ${sumEUR.toFixed(2)} EUR</span>`);
        } else {
            $('.result').html(`<div class="error">Enter correct value</div>`);
        }

    }



    $("input").bind('input', function () {
        sumPrice();

    });

    setInterval(function () {
        getPrice(urlLtc, '.ltc>h3');
        getPrice(urlBtc, '.btc>h3');
        getPrice(urlEth, '.eth>h3');
        getPrice(urlBcc, '.bcc>h3');
        getPrice(urlEtc, '.etc>h3');
        getPrice(urlXrp, '.xrp>h3');
        getPrice(urlEos, '.eos>h3');
        getPrice(urlZec, '.zec>h3');
    }, 2000);

});