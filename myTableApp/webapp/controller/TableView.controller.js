sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
], function(Controller,JSONModel) {
    'use strict';

    return Controller.extend("ui5.apps.controller.TableView",{


        onInit: function(){

            var oModel = new JSONModel();

            oModel.loadData("model/data/mockData.json");

            sap.ui.getCore().setModel(oModel);

        },

        addDetails: function(){




        },

        editDetails: function(){

            

        }





    });
    
});