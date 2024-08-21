sap.ui.define([
    'sap/ui/core/mvc/Controller',
], function(Controller) {
    'use strict';

    return Controller.extend("ui5.apps.loginPage.controller.BaseController"),{

        onValidate: function(){

            oCore = sap.ui.getCore();

            oName = oCore.byId("idName");

            oPwd = oCore.byId("idPwd");

            if(this.validateCredentials(oName.getValue(),oPwd.getValue()) == true){

                alert("Login Successful Dude!");
            }
            else{
                alert("Login Failed Dude!");
            }


    
        },

        validateCredentials: function(UserName, Password){

                var oPwdNew = UserName + "@1234";

                if(oPwdNew === Password){
                    return true;
                }
                else{
                    return false;
                }


        }




    }



    
});