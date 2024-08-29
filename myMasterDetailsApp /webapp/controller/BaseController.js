sap.ui.define([
    'sap/ui/core/mvc/Controller'], 
    
    function(Controller) {
    'use strict';

        return Controller.extend("ui5.apps.controller.BaseController",{

            getAppObject: function(){

                // return sap.ui.getCore().byId("idAppView--myApp");

                return this.getView().getParent().getParent();

            }

     

        });


  
    
});