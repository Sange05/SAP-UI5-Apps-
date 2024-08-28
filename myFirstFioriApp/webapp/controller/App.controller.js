sap.ui.define([
    'ui5/apps/controller/BaseController',
    'ui5/apps/model/models'], 
    function(Controller, model) {
    'use strict';

    return Controller.extend("ui5.apps.controller.App",{


        onInit: function(){

            var oModel = model.createFruitModel();
            this.getView().setModel(oModel);


            //1. Get the App object

            var oApp = this.getView().byId("myApp");

            //2. Create the objects of both views

            var oView1 = new sap.ui.view({

                viewName: "ui5.apps.view.View1",
                type: sap.ui.core.mvc.ViewType.XML,
                id: "idView1"

            });

            var oView2 = new sap.ui.view({

                viewName:"ui5.apps.view.View2",
                type:sap.ui.core.mvc.ViewType.XML,
                id:"idView2"

            });

            //3. Add the views objects to the app object

            oApp.addPage(oView1);
            oApp.addPage(oView2);

            //Association method to start app from View 1
            oApp.setInitialPage(oView1);

        }


    });

     
    
});