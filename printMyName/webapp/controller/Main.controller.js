sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
    'use strict';
    
    return Controller.extend("ui5.apps.controller.Main",{


        printMyName: function(){

            var oField = this.getView().byId("idSuperman");

            var oText = oField.getValue();

            var oLabel = this.getView().byId("idSpiderman");

            oLabel.setText(null);

            oLabel.setText (oText);

        }


    });
});

