sap.ui.define(
    ["sap/ui/core/format/NumberFormat"], function(NumberFormat){

    return {

        getMeName: function(inp){

            if(inp)
                {
                    return inp.toUpperCase();

                }
        },

        getFormattedCurrency: function (num, numUnit){


            var oCurrencyFormat = NumberFormat.getCurrencyInstance({
                currencyCode: false
            });

           

            var result = oCurrencyFormat.format(num, numUnit);

            return result;
            

        }
       




    }

});

