

sap.ui.define([
  "sap/ui/core/Control",
  "sap/training/exc/control/CustomerInfoRenderer"
],

  function (Control, CustomerInfoRenderer) {
    "use strict";

    return Control.extend("sap.training.exc.control.CustomerInfo", {

      metadata: {
        properties: {
          "email": {
            type: "string"
          },
          "phone": {
            type: "string"
          }
        }
      },

      renderer: CustomerInfoRenderer
    });
  }
);
