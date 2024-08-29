sap.ui.define([
    'sap/ui/model/json/JSONModel',
], function(JSONModel) {
    'use strict';
    
    return {

        createFruitModel: function(){

            var oModel = new JSONModel();

            oModel.loadData("model/data/fruit.json");

            return oModel;
        }
    }
});