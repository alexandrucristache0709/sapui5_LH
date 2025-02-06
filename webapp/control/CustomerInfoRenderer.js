
sap.ui.define([
    "sap/ui/core/Renderer"
],

    function (Renderer) {
        "use strict";

        var CustomerInfoRenderer = Renderer.extend("sap.training.exc.control.CustomerInfoRenderer");
        CustomerInfoRenderer.apiVersion = 2;

        CustomerInfoRenderer.render = function (oRm, oControl) {
            oRm.openStart("div", oControl);
            oRm.openEnd();
            oRm.openStart("table");
            oRm.attr("align", "center");
            oRm.openEnd();
            oRm.openStart("tr");
            oRm.openEnd();
            oRm.openStart("td");
            oRm.openEnd();
            oRm.text(" " + oControl.getEmail());
            oRm.close("td");
            oRm.close("tr");
            oRm.openStart("tr");
            oRm.openEnd();
            oRm.openStart("td");
            oRm.openEnd();
            oRm.text(" " + oControl.getPhone());
            oRm.close("td");
            oRm.close("tr");
            oRm.close("table");
            oRm.close("div");

        }

        return CustomerInfoRenderer;
    }
);