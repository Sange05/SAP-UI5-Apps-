sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller, factory) {
    'use strict';

    return Controller.extend("ui5.apps.controller.Login",{

        onValidate: function(){

            var oCore = sap.ui.getCore();

            var oName = oCore.byId("idName").getValue();

            var oPwd = oCore.byId("idPwd").getValue();

            if(this.validatePwd(oName,oPwd) == true){

                alert("Login Successful Mate!");

            }
            else{
                alert("Login Failed Mate!");
            }

        },

        validatePwd: function(userName,Pwd){

            var pwdNew = userName + "@1234";

            if(Pwd === pwdNew){
                return true;
            }
            else{
                return false;
            }

        }


    });
    
});