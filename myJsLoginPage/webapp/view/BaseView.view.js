sap.ui.jsview("ui5.apps.loginPage.view.BaseView",{


    getControllerName: function(){

        return "ui5.apps.loginPage.controller.BaseController";
    },


    createContent: function(oController){

        
        var oLabelName = new sap.m.Label({
            text:"User Name"

        });

        var oInpName = new sap.m.Input("idName",{
            type:"text",
        });

        var oLabelPwd = new sap.m.Label({
            text:"Password"
        });

        var oInpPwd = new sap.m.Input("idPwd", {
            type:"Password"
         });

         var oBtn = new sap.m.Button("idBtn",{
            text:"Click Me",
            type: sap.m.ButtonType.Accept,
            press: [oController.onValidate, oController]

         });

         var oForm = new sap.ui.layout.SimpleForm ({
            content: [oLabelName, oInpName, oLabelPwd, oInpPwd]
         });

         oBtn.setText("Login");
         //oBtn.bindProperty("icon", "sap-icon://paper-plane");

         oForm.addContent("oBtn");

        return [oForm];

    }

});