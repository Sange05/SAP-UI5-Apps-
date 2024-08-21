sap.ui.define([
    'sap/ui/core/mvc/Controller',
], function(Controller) {
    'use strict';

    
    return Controller.extend("ui5.apps.loginPage.controller.Main",{


        onValidate: function(){

            // var oCore       = sap.ui.getCore();

            var oUserName   = this.getView().byId("name").getValue();
            
            var oPwd        = this.getView().byId("pwd").getValue();

            if (oUserName === oPwd) {

                alert("Login Successful Mate!");
            }
            else{
                alert("Login Failed Mate");
            }
            
        
        }



    });

  


    
});