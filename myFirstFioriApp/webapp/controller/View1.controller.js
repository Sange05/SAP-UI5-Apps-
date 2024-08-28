sap.ui.define([
    'ui5/apps/controller/BaseController'],

function(Controller) {
    'use strict';

    return Controller.extend("ui5.apps.controller.View1",{


        onNext: function(){

            var oApp = this.getAppObject();

            oApp.to("idView2");


        }

    });
    
});
