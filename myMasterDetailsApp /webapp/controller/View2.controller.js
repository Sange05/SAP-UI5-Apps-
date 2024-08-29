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

        onReject: function(){

        }

    });
    
});
