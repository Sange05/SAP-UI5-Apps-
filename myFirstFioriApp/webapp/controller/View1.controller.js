sap.ui.define([
    'ui5/apps/controller/BaseController'],

function(Controller) {
    'use strict';

    return Controller.extend("ui5.apps.controller.View1",{


        onNext: function(){

            var oApp = this.getAppObject();

            oApp.to("idView2");

        },

        onSearch: function(oEvent){

            var queryString = oEvent.getParameter("query");

            var oFilter = new sap.ui.model.Filter("name",
                                                sap.ui.model.FilterOperator.Contains,
                                                queryString);

            var oFilter2 = new sap.ui.model.Filter("benefit",
                                                    sap.ui.model.FilterOperator.Contains,
                                                    queryString);

            var oMainFilter = new sap.ui.model.Filter({
                filters:[oFilter, oFilter2],
                and:false
            });

            var aFilter = [oMainFilter];

            var oList = this.getView().byId("idList");

            oList.getBinding("items").filter(aFilter);
            
                                

        }

    });
    
});
