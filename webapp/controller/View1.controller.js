sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("DemoCAIwithSCP.DemoCAIwithSCP.controller.View1", {
		onAfterRendering: function () {
			//call first
			this.renderRecastChatBot();
			this.getView().byId("image0").addStyleClass("myimage");
		},
		
		//Conversational AI at the left side bottom
		renderRecastChatBot: function () {
			if (!document.getElementById("cai-webchat")) {
				var s = document.createElement("script");
				s.setAttribute("src", "https://cdn.cai.tools.sap/webchat/webchat.js");
				s.setAttribute("id", "cai-webchat");
				s.setAttribute("token", "YOUR TOKEN");
				s.setAttribute("channelId", "YOUR CHANNEL ID");
				document.body.appendChild(s);
			}
		}
	});
});