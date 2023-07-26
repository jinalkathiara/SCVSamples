({
    onLoginSuccess : function(cmp, event, helper) {
        var urlToLogin = "https://salesforce.com";
        window.open(urlToLogin, '_blank');
    },

    onInit : function(cmp, event, helper) {
        var omniToolkit = cmp.find('omniToolkit');
        var fnToInit = function() {
            omniToolkit.login({statusId: "0N5R000000000u5"});
        }
        window.setTimeout(fnToInit.bind(cmp), 2000);
    }
})