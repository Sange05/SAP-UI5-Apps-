sap.ui.jsview("ui5.apps.view.Main",{

    getControllerName: function(){
        
        return "ui5.apps.controller.Main";

    },

    createContent: function(oController){

        return new sap.m.Button("myButton",{

            text: "Click Me",
            press: oController.buttonPress

        });


    }

});