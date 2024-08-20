sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(controller) {
    'use strict';

    return controller.extend("ui5.apps.controller.Main",{

        
        buttonPress: function(){

            $("#myButton").fadeOut(3000);
            console.log("Wow, the button got disappeared!");

        }


    });


});