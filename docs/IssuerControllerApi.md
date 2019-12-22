# ApiDocumentation.IssuerControllerApi

All URIs are relative to *https://34.244.193.16:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCredSchemaUsingPUT**](IssuerControllerApi.md#createCredSchemaUsingPUT) | **PUT** /create-credential-schema | createCredSchema
[**createCredentialDefinitionUsingPUT**](IssuerControllerApi.md#createCredentialDefinitionUsingPUT) | **PUT** /create-credential-definition | createCredentialDefinition
[**createIssuerUsingPUT**](IssuerControllerApi.md#createIssuerUsingPUT) | **PUT** /create-issuer | createIssuer
[**createTicketCredSchemaUsingPUT**](IssuerControllerApi.md#createTicketCredSchemaUsingPUT) | **PUT** /create-ticket-schema | createTicketCredSchema
[**getCredentialDefinitionUsingPUT**](IssuerControllerApi.md#getCredentialDefinitionUsingPUT) | **PUT** /get-credential-definition | getCredentialDefinition
[**issuerCreateCredentialsUsingPUT**](IssuerControllerApi.md#issuerCreateCredentialsUsingPUT) | **PUT** /create | issuerCreateCredentials
[**issuerCreateTicketCredentialsUsingPUT**](IssuerControllerApi.md#issuerCreateTicketCredentialsUsingPUT) | **PUT** /create-ticket | issuerCreateTicketCredentials
[**issuerEmailCreatedCredentialsUsingPUT**](IssuerControllerApi.md#issuerEmailCreatedCredentialsUsingPUT) | **PUT** /create-email | issuerEmailCreatedCredentials


<a name="createCredSchemaUsingPUT"></a>
# **createCredSchemaUsingPUT**
> 'String' createCredSchemaUsingPUT(opts)

createCredSchema

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.IssuerControllerApi();

var opts = { 
  'defaultStewardDid': "defaultStewardDid_example", // String | defaultStewardDid
  'walletId': "walletId_example", // String | walletId
  'walletKey': "walletKey_example" // String | walletKey
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCredSchemaUsingPUT(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **defaultStewardDid** | **String**| defaultStewardDid | [optional] 
 **walletId** | **String**| walletId | [optional] 
 **walletKey** | **String**| walletKey | [optional] 

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="createCredentialDefinitionUsingPUT"></a>
# **createCredentialDefinitionUsingPUT**
> 'String' createCredentialDefinitionUsingPUT(opts)

createCredentialDefinition

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.IssuerControllerApi();

var opts = { 
  'personDid': "personDid_example", // String | personDid
  'schemaId': "schemaId_example", // String | schemaId
  'walletId': "walletId_example", // String | walletId
  'walletKey': "walletKey_example" // String | walletKey
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCredentialDefinitionUsingPUT(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personDid** | **String**| personDid | [optional] 
 **schemaId** | **String**| schemaId | [optional] 
 **walletId** | **String**| walletId | [optional] 
 **walletKey** | **String**| walletKey | [optional] 

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="createIssuerUsingPUT"></a>
# **createIssuerUsingPUT**
> 'String' createIssuerUsingPUT(opts)

createIssuer

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.IssuerControllerApi();

var opts = { 
  'walletId': "walletId_example", // String | walletId
  'walletKey': "walletKey_example" // String | walletKey
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createIssuerUsingPUT(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | **String**| walletId | [optional] 
 **walletKey** | **String**| walletKey | [optional] 

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="createTicketCredSchemaUsingPUT"></a>
# **createTicketCredSchemaUsingPUT**
> 'String' createTicketCredSchemaUsingPUT(opts)

createTicketCredSchema

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.IssuerControllerApi();

var opts = { 
  'defaultStewardDid': "defaultStewardDid_example", // String | defaultStewardDid
  'walletId': "walletId_example", // String | walletId
  'walletKey': "walletKey_example" // String | walletKey
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTicketCredSchemaUsingPUT(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **defaultStewardDid** | **String**| defaultStewardDid | [optional] 
 **walletId** | **String**| walletId | [optional] 
 **walletKey** | **String**| walletKey | [optional] 

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getCredentialDefinitionUsingPUT"></a>
# **getCredentialDefinitionUsingPUT**
> CredentialDefinition getCredentialDefinitionUsingPUT(opts)

getCredentialDefinition

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.IssuerControllerApi();

var opts = { 
  'credDefId': "credDefId_example", // String | credDefId
  'indyWalletWalletHandle': 56, // Number | 
  'masterSecretId': "masterSecretId_example", // String | 
  'name': "name_example", // String | 
  'personDid': "personDid_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCredentialDefinitionUsingPUT(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credDefId** | **String**| credDefId | [optional] 
 **indyWalletWalletHandle** | **Number**|  | [optional] 
 **masterSecretId** | **String**|  | [optional] 
 **name** | **String**|  | [optional] 
 **personDid** | **String**|  | [optional] 

### Return type

[**CredentialDefinition**](CredentialDefinition.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="issuerCreateCredentialsUsingPUT"></a>
# **issuerCreateCredentialsUsingPUT**
> EmailInfo issuerCreateCredentialsUsingPUT(opts)

issuerCreateCredentials

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.IssuerControllerApi();

var opts = { 
  'credDefId': "credDefId_example", // String | credDefId
  'dateOfBirth': "dateOfBirth_example", // String | dateOfBirth
  'issuerDid': "issuerDid_example", // String | issuerDid
  'issuerWalletId': "issuerWalletId_example", // String | issuerWalletId
  'issuerWalletKey': "issuerWalletKey_example", // String | issuerWalletKey
  'licenceLevel': "licenceLevel_example", // String | licenceLevel
  'name': "name_example", // String | name
  'proverDid': "proverDid_example", // String | proverDid
  'proverWalletId': "proverWalletId_example", // String | proverWalletId
  'proverWalletKey': "proverWalletKey_example" // String | proverWalletKey
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.issuerCreateCredentialsUsingPUT(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credDefId** | **String**| credDefId | [optional] 
 **dateOfBirth** | **String**| dateOfBirth | [optional] 
 **issuerDid** | **String**| issuerDid | [optional] 
 **issuerWalletId** | **String**| issuerWalletId | [optional] 
 **issuerWalletKey** | **String**| issuerWalletKey | [optional] 
 **licenceLevel** | **String**| licenceLevel | [optional] 
 **name** | **String**| name | [optional] 
 **proverDid** | **String**| proverDid | [optional] 
 **proverWalletId** | **String**| proverWalletId | [optional] 
 **proverWalletKey** | **String**| proverWalletKey | [optional] 

### Return type

[**EmailInfo**](EmailInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="issuerCreateTicketCredentialsUsingPUT"></a>
# **issuerCreateTicketCredentialsUsingPUT**
> EmailInfo issuerCreateTicketCredentialsUsingPUT(opts)

issuerCreateTicketCredentials

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.IssuerControllerApi();

var opts = { 
  'credDefId': "credDefId_example", // String | credDefId
  'issuerDid': "issuerDid_example", // String | issuerDid
  'issuerWalletId': "issuerWalletId_example", // String | issuerWalletId
  'issuerWalletKey': "issuerWalletKey_example", // String | issuerWalletKey
  'masterSecretId': "masterSecretId_example", // String | masterSecretId
  'name': "name_example", // String | name
  'proverDid': "proverDid_example", // String | proverDid
  'proverWalletId': "proverWalletId_example", // String | proverWalletId
  'proverWalletKey': "proverWalletKey_example", // String | proverWalletKey
  'ticketLevel': "ticketLevel_example" // String | ticketLevel
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.issuerCreateTicketCredentialsUsingPUT(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credDefId** | **String**| credDefId | [optional] 
 **issuerDid** | **String**| issuerDid | [optional] 
 **issuerWalletId** | **String**| issuerWalletId | [optional] 
 **issuerWalletKey** | **String**| issuerWalletKey | [optional] 
 **masterSecretId** | **String**| masterSecretId | [optional] 
 **name** | **String**| name | [optional] 
 **proverDid** | **String**| proverDid | [optional] 
 **proverWalletId** | **String**| proverWalletId | [optional] 
 **proverWalletKey** | **String**| proverWalletKey | [optional] 
 **ticketLevel** | **String**| ticketLevel | [optional] 

### Return type

[**EmailInfo**](EmailInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="issuerEmailCreatedCredentialsUsingPUT"></a>
# **issuerEmailCreatedCredentialsUsingPUT**
> issuerEmailCreatedCredentialsUsingPUT(opts)

issuerEmailCreatedCredentials

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.IssuerControllerApi();

var opts = { 
  'credDefId': "credDefId_example", // String | credDefId
  'dateOfBirth': "dateOfBirth_example", // String | dateOfBirth
  'email': "email_example", // String | email
  'issuerDid': "issuerDid_example", // String | issuerDid
  'issuerWalletId': "issuerWalletId_example", // String | issuerWalletId
  'issuerWalletKey': "issuerWalletKey_example", // String | issuerWalletKey
  'licenceLevel': "licenceLevel_example", // String | licenceLevel
  'name': "name_example", // String | name
  'proverDid': "proverDid_example", // String | proverDid
  'proverWalletId': "proverWalletId_example", // String | proverWalletId
  'proverWalletKey': "proverWalletKey_example" // String | proverWalletKey
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.issuerEmailCreatedCredentialsUsingPUT(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credDefId** | **String**| credDefId | [optional] 
 **dateOfBirth** | **String**| dateOfBirth | [optional] 
 **email** | **String**| email | [optional] 
 **issuerDid** | **String**| issuerDid | [optional] 
 **issuerWalletId** | **String**| issuerWalletId | [optional] 
 **issuerWalletKey** | **String**| issuerWalletKey | [optional] 
 **licenceLevel** | **String**| licenceLevel | [optional] 
 **name** | **String**| name | [optional] 
 **proverDid** | **String**| proverDid | [optional] 
 **proverWalletId** | **String**| proverWalletId | [optional] 
 **proverWalletKey** | **String**| proverWalletKey | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

