# Setting up 3rd party Identity Provider

Follow the instructions here: https://salesforce.quip.com/s7zFAmozU3aG
Once you install 3rd party Identity Provider, following Aura component is a workaround until Salesforce supports 3rd party Identity provider from its platform. Until then you can 
- Install this Lightning Component
- Create a presence status, say 'Not_Ready' in the Salesforce org and mark it as a 'Busy' type.
- Assign this presence status to all the agent's permission sets.
- Add `AmazonConnectInitializer` component to the Utility bar for the Salesforce lightning application which you agents are using and keep it running automatically.
- Login into Amazon Connect using 3rd party Identity Provider via launching a custom window from this component and dispose that window once you login into amazon connect.

# Assumptions
1. Customer is aware on how to use Service Cloud Voice.
2. Customer is configuring 3rd party Identity provider with Salesforce service cloud voice using Amazon Connect Telephony.
3. Customer is aware on how to use SFDX project and deploy lightning component code into the Salesforce org.
4. Customer is going to modify 
    A) `urlToLogin` variable in the `AmazonConnectInitializerController.js` which will launch a SAML SSO flow for amazon connect.
    B) `statusId` variable in the `AmazonConnectInitializerController.js` which will use customer org's Omni presence status ID to use for the Omni login.

## Configure Your Salesforce DX Project

The `sfdx-project.json` file contains useful configuration information for your project. See [Salesforce DX Project Configuration](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm) in the _Salesforce DX Developer Guide_ for details about this file.

## Read All About It

- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)
