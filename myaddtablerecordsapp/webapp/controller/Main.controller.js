sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "ui5/apps/myaddtablerecordsapp/lifesaver"
  
],
function (Controller, JSONModel, lifeSaver) {
    "use strict";

    return Controller.extend("ui5.apps.myaddtablerecordsapp.controller.Main", {

        formatter: lifeSaver,

        onInit: function () {

            var oModel = new JSONModel();

            oModel.loadData("model/data/mockData.json");

            this.getView().setModel(oModel);


        },

        addRecord: function() {

            var oModel = this.getView().getModel();

            var empStr = oModel.getProperty("/empStr");

            var itab  = oModel.getProperty("/empTab");

            itab.push(empStr);

            oModel.setProperty("/empTab",itab);


        }
    });
});
