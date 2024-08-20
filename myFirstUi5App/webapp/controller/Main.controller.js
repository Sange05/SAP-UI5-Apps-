sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller, factory) {
    'use strict';

    return Controller.extend("ui5.apps.controller.Main",{

        pressButton: function(){

            alert("The button is pressed");


        }

    });




    
});