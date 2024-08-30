sap.ui.define([
    'ui5/apps/controller/BaseController',
    'sap/m/MessageBox',
    'sap/m/MessageToast' ],

function(Controller, MessageBox, StatusMessage) {
    'use strict';

    return Controller.extend("ui5.apps.controller.View2",{

        onBack: function(){

            this.getAppObject().to("idView1");

        },

        popClose: function(choice){

            if(choice === 'OK'){

                var oClose = this.getView().byId("idMoreInfo");
                oClose.setVisible(false);

                StatusMessage.show("Your Request has been approved successfully!");

            }
        },

        onAccept: function(){
            MessageBox.confirm("Would like to approve?",{
                title:"Confirm Action",
                // onClose: [this.popClose, this]
                onClose: this.popClose.bind(this)

            });
             
        },

        cityPopup:null,
        countryPopup:null,
        inputFieldValue:null,

        onCityConfirm: function(oEvent){

            var oSelected = oEvent.getParameter("selectedItem");

            sap.ui.getCore().byId(this.inputFieldValue).setValue(oSelected.getTitle());
             

        },

        onF4Help: function(oEvent){

            this.inputFieldValue = oEvent.getSource().getId();

            // StatusMessage.show("This page is under construction");
            this.cityPopup = new sap.ui.xmlfragment("ui5.apps.fragments.Popup", this);

            this.getView().addDependent(this.cityPopup);

            this.cityPopup.bindAggregation("items",{
                path:"/cities",
                template: new sap.m.StandardListItem({

                    title:"{city}",
                    description:"{state}"
                })
            
            });

            this.cityPopup.attachConfirm(this.onCityConfirm, this);
            this.cityPopup.open();

        },

        onFilter: function(){

            // StatusMessage.show("This page is under construction");
            this.countryPopup = new sap.ui.xmlfragment("ui5.apps.fragments.Popup", this);

            this.getView().addDependent(this.countryPopup);

            this.countryPopup.bindAggregation("items",{
                path:"/countries",
                template: new sap.m.StandardListItem({

                    title:"{name}",
                    description:"{code}"
                })
            
            });



            this.countryPopup.open();


        },

        onReject: function(){

        }

    });
    
});
