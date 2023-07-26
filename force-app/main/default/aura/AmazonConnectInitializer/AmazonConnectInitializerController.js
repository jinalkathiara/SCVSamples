({
    onLoginSuccess : function(cmp, event, helper) {
        // Replace this URL with the agent's login URL which is having following format
        // [Identity Provider Url]&RelayState=https://[Amazon Connect Region].console.aws.amazon.com/connect/federate/[Amazon connect instance Id]?destination=/ccp-v2&new_domain=true
        var urlToLogin = "https://salesforce.com";
        window.open(urlToLogin, '_blank');
    },

    onInit : function(cmp, event, helper) {
        var omniToolkit = cmp.find('omniToolkit');
        var fnToInit = function() {
            // Create a custom Omni Presence status which is of type 'Busy' and added into the agent's presence configuration. Replace that presence status ID below.
            omniToolkit.login({statusId: "0N5R000000000u5"});
        }
        window.setTimeout(fnToInit.bind(cmp), 2000);
    }
})