sap.ui.define([
    'ui5/apps/controller/BaseController'],

function(Controller) {
    'use strict';

    return Controller.extend("ui5.apps.controller.View1",{


        onNext: function(){

            var oApp = this.getAppObject();

            oApp.to("idView2");

        },

        onItemPress: function (oEvent){

            var oItem = oEvent.getParameter("listItem");

            //Concept which gives you the address of the element is Context
            
            var sPath = oItem.getBindingContextPath();

            var oApp = this.getAppObject();

            var oView2 = oApp.getDetailPages()[0]; //Since there are 2 views so we are getting 2nd object of the array

            oView2.bindElement(sPath);

            this.onNext(); //Method to navigate to View 2

        },

        onSearch: function(oEvent){

            var queryString = oEvent.getParameter("query");
            

            if(!queryString){

                queryString = oEvent.getParameter("newValue");
            }

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
