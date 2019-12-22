# ApiDocumentation.IssuerControllerApi

All URIs are relative to *https://34.244.193.16:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCredentialDefinitionUsingPUT**](IssuerControllerApi.md#getCredentialDefinitionUsingPUT) | **PUT** /get-credential-definition | getCredentialDefinition
[**issuerCreateCredentialsUsingPUT**](IssuerControllerApi.md#issuerCreateCredentialsUsingPUT) | **PUT** /create | issuerCreateCredentials
[**issuerCreateTicketCredentialsUsingPUT**](IssuerControllerApi.md#issuerCreateTicketCredentialsUsingPUT) | **PUT** /create-ticket | issuerCreateTicketCredentials
[**issuerEmailCreatedCredentialsUsingPUT**](IssuerControllerApi.md#issuerEmailCreatedCredentialsUsingPUT) | **PUT** /create-email | issuerEmailCreatedCredentials
[**issuerEmailCreatedTicketCredentialsUsingPUT**](IssuerControllerApi.md#issuerEmailCreatedTicketCredentialsUsingPUT) | **PUT** /create-email-ticket | issuerEmailCreatedTicketCredentials


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

<a name="issuerEmailCreatedTicketCredentialsUsingPUT"></a>
# **issuerEmailCreatedTicketCredentialsUsingPUT**
> issuerEmailCreatedTicketCredentialsUsingPUT(opts)

issuerEmailCreatedTicketCredentials

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.IssuerControllerApi();

var opts = { 
  'credDefId': "credDefId_example", // String | credDefId
  'email': "email_example", // String | email
  'issuerDid': "issuerDid_example", // String | issuerDid
  'issuerWalletId': "issuerWalletId_example", // String | issuerWalletId
  'issuerWalletKey': "issuerWalletKey_example", // String | issuerWalletKey
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
    console.log('API called successfully.');
  }
};
apiInstance.issuerEmailCreatedTicketCredentialsUsingPUT(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credDefId** | **String**| credDefId | [optional] 
 **email** | **String**| email | [optional] 
 **issuerDid** | **String**| issuerDid | [optional] 
 **issuerWalletId** | **String**| issuerWalletId | [optional] 
 **issuerWalletKey** | **String**| issuerWalletKey | [optional] 
 **name** | **String**| name | [optional] 
 **proverDid** | **String**| proverDid | [optional] 
 **proverWalletId** | **String**| proverWalletId | [optional] 
 **proverWalletKey** | **String**| proverWalletKey | [optional] 
 **ticketLevel** | **String**| ticketLevel | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

