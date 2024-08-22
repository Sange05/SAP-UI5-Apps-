sap.ui.jsview("ui5.apps.view.Login",{

    getControllerName: function() {
		return "ui5.apps.controller.Login";
	},

    createContent: function(oController) {

        var oLabelName = new sap.m.Label({
            text:"User Name"
        });

        var oName = new sap.m.Input("idName",{
            type:"Text"
        });

        var oLabelPwd = new sap.m.Label({
            text:"Password"
        });

        var oPwd = new sap.m.Input("idPwd",{
            type:"Password"
        });

        var oBtn = new sap.m.Button("idBtn",{
            text:"Click Me!",
            type:"Accept",
            icon:"sap-icon://paper-plane",
            press:[oController.onValidate, oController]
        });

        var oForm = new sap.ui.layout.form.SimpleForm("idForm",{

            content:[oLabelName, oName, oLabelPwd, oPwd]
        });

        oBtn.setText("Login In");
        //oBtn.bindProperty("icon","sap-icon://paper-plane");
        
        oForm.addContent(oBtn);

        return oForm;

    }

});
