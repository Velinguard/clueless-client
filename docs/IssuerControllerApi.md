# ApiDocumentation.IssuerControllerApi

All URIs are relative to *https://34.244.72.181:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCredentialDefinitionUsingPUT**](IssuerControllerApi.md#createCredentialDefinitionUsingPUT) | **PUT** /create-credential-definition | createCredentialDefinition
[**createCredentialsFromRequestUsingPUT**](IssuerControllerApi.md#createCredentialsFromRequestUsingPUT) | **PUT** /create-credentials | createCredentialsFromRequest
[**generateProversCredentialRequestUsingGET**](IssuerControllerApi.md#generateProversCredentialRequestUsingGET) | **GET** /generate-provers-credential-request | generateProversCredentialRequest
[**getCredentialDefinitionUsingGET**](IssuerControllerApi.md#getCredentialDefinitionUsingGET) | **GET** /get-credential-definition | getCredentialDefinition
[**issuerCreateCredentialsUsingPUT**](IssuerControllerApi.md#issuerCreateCredentialsUsingPUT) | **PUT** /create | issuerCreateCredentials


<a name="createCredentialDefinitionUsingPUT"></a>
# **createCredentialDefinitionUsingPUT**
> CredentialDefinition createCredentialDefinitionUsingPUT(opts)

createCredentialDefinition

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.IssuerControllerApi();

var opts = { 
  'indyWalletWalletHandle': 56, // Number | 
  'masterSecretId': "masterSecretId_example", // String | 
  'personDid': "personDid_example" // String | 
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
 **indyWalletWalletHandle** | **Number**|  | [optional] 
 **masterSecretId** | **String**|  | [optional] 
 **personDid** | **String**|  | [optional] 

### Return type

[**CredentialDefinition**](CredentialDefinition.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="createCredentialsFromRequestUsingPUT"></a>
# **createCredentialsFromRequestUsingPUT**
> IssuerCreateCredentialResult createCredentialsFromRequestUsingPUT(opts)

createCredentialsFromRequest

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.IssuerControllerApi();

var opts = { 
  'JSON': "JSON_example", // String | 
  'age': 789, // Number | 
  'credOffer': "credOffer_example", // String | 
  'credRequestCredentialRequestJson': "credRequestCredentialRequestJson_example", // String | 
  'credRequestCredentialRequestMetadataJson': "credRequestCredentialRequestMetadataJson_example", // String | 
  'credentialsCredDefId': "credentialsCredDefId_example", // String | 
  'credentialsCredDefJson': "credentialsCredDefJson_example", // String | 
  'credentialsCredDefs': "credentialsCredDefs_example", // String | 
  'dateOfBirth': new Date("2013-10-20"), // Date | 
  'licenceLevel': 56, // Number | 
  'masterSecretId': "masterSecretId_example", // String | 
  'name': "name_example", // String | 
  'walletHandle': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCredentialsFromRequestUsingPUT(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **JSON** | **String**|  | [optional] 
 **age** | **Number**|  | [optional] 
 **credOffer** | **String**|  | [optional] 
 **credRequestCredentialRequestJson** | **String**|  | [optional] 
 **credRequestCredentialRequestMetadataJson** | **String**|  | [optional] 
 **credentialsCredDefId** | **String**|  | [optional] 
 **credentialsCredDefJson** | **String**|  | [optional] 
 **credentialsCredDefs** | **String**|  | [optional] 
 **dateOfBirth** | **Date**|  | [optional] 
 **licenceLevel** | **Number**|  | [optional] 
 **masterSecretId** | **String**|  | [optional] 
 **name** | **String**|  | [optional] 
 **walletHandle** | **Number**|  | [optional] 

### Return type

[**IssuerCreateCredentialResult**](IssuerCreateCredentialResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="generateProversCredentialRequestUsingGET"></a>
# **generateProversCredentialRequestUsingGET**
> CredentialRequest generateProversCredentialRequestUsingGET(opts)

generateProversCredentialRequest

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.IssuerControllerApi();

var opts = { 
  'credDefId': "credDefId_example", // String | 
  'credDefJson': "credDefJson_example", // String | 
  'credDefs': "credDefs_example", // String | 
  'indyWalletWalletHandle': 56, // Number | 
  'indyWalletWalletHandle2': 56, // Number | 
  'masterSecretId': "masterSecretId_example", // String | 
  'masterSecretId2': "masterSecretId_example", // String | 
  'personDid': "personDid_example", // String | 
  'personDid2': "personDid_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateProversCredentialRequestUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credDefId** | **String**|  | [optional] 
 **credDefJson** | **String**|  | [optional] 
 **credDefs** | **String**|  | [optional] 
 **indyWalletWalletHandle** | **Number**|  | [optional] 
 **indyWalletWalletHandle2** | **Number**|  | [optional] 
 **masterSecretId** | **String**|  | [optional] 
 **masterSecretId2** | **String**|  | [optional] 
 **personDid** | **String**|  | [optional] 
 **personDid2** | **String**|  | [optional] 

### Return type

[**CredentialRequest**](CredentialRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getCredentialDefinitionUsingGET"></a>
# **getCredentialDefinitionUsingGET**
> CredentialDefinition getCredentialDefinitionUsingGET()

getCredentialDefinition

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.IssuerControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCredentialDefinitionUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**CredentialDefinition**](CredentialDefinition.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="issuerCreateCredentialsUsingPUT"></a>
# **issuerCreateCredentialsUsingPUT**
> Person issuerCreateCredentialsUsingPUT(opts)

issuerCreateCredentials

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.IssuerControllerApi();

var opts = { 
  'dateOfBirth': "dateOfBirth_example", // String | dateOfBirth
  'issuerDid': "issuerDid_example", // String | issuerDid
  'licenceLevel': 56, // Number | licenceLevel
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
 **dateOfBirth** | **String**| dateOfBirth | [optional] 
 **issuerDid** | **String**| issuerDid | [optional] 
 **licenceLevel** | **Number**| licenceLevel | [optional] 
 **name** | **String**| name | [optional] 
 **proverDid** | **String**| proverDid | [optional] 
 **proverWalletId** | **String**| proverWalletId | [optional] 
 **proverWalletKey** | **String**| proverWalletKey | [optional] 

### Return type

[**Person**](Person.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

