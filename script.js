
        const urlLtc = 'https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD,PLN,EUR';
        const urlBtc = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,PLN,EUR';
        const urlEth = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,PLN,EUR';
        const urlBcc = 'https://min-api.cryptocompare.com/data/price?fsym=BCC&tsyms=USD,PLN,EUR';

        function getPrice(url, selector) {
            $.getJSON(url, function (data) {

                var text = `Dolar: ${data.USD}<br>
                            PLN: ${data.PLN}<br>
                            Euro: ${data.EUR}`


                $(selector).html(text);
            });
        }

        setInterval(function(){ 
            
            getPrice(urlLtc,'.ltc>h3');
            getPrice(urlBtc,'.btc>h3');
            getPrice(urlEth,'.eth>h3');
            getPrice(urlBcc,'.bcc>h3');



         }, 1000);

        
   