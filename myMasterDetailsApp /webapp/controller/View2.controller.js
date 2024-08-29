sap.ui.define([
    'ui5/apps/controller/BaseController'],

function(Controller) {
    'use strict';

    return Controller.extend("ui5.apps.controller.View2",{

        onBack: function(){

            this.getAppObject().to("idView1");

         

        }

    });
    
});
