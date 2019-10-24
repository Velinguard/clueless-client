# ApiDocumentation.IssuerControllerApi

All URIs are relative to *https://34.244.72.181:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCredentialDefinitionUsingPUT**](IssuerControllerApi.md#createCredentialDefinitionUsingPUT) | **PUT** /create-credential-definition | createCredentialDefinition
[**createCredentialsUsingPUT**](IssuerControllerApi.md#createCredentialsUsingPUT) | **PUT** /create-credentials | createCredentials
[**getCredentialDefinitionUsingGET**](IssuerControllerApi.md#getCredentialDefinitionUsingGET) | **GET** /get-credential-definition | getCredentialDefinition
[**getProverCredentialUsingGET**](IssuerControllerApi.md#getProverCredentialUsingGET) | **GET** /get-prover-credentials | getProverCredential
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

<a name="createCredentialsUsingPUT"></a>
# **createCredentialsUsingPUT**
> IssuerCreateCredentialResult createCredentialsUsingPUT(opts)

createCredentials

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
apiInstance.createCredentialsUsingPUT(opts, callback);
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

<a name="getProverCredentialUsingGET"></a>
# **getProverCredentialUsingGET**
> CredentialRequest getProverCredentialUsingGET(opts)

getProverCredential

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
apiInstance.getProverCredentialUsingGET(opts, callback);
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

<a name="issuerCreateCredentialsUsingPUT"></a>
# **issuerCreateCredentialsUsingPUT**
> Person issuerCreateCredentialsUsingPUT(opts)

issuerCreateCredentials

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.IssuerControllerApi();

var opts = { 
  'dateOfBirth': new Date("2013-10-20"), // Date | dateOfBirth
  'indyWalletWalletHandle': 56, // Number | 
  'licenceLevel': 56, // Number | licenceLevel
  'masterSecretId': "masterSecretId_example", // String | 
  'name': "name_example", // String | name
  'personDid': "personDid_example", // String | 
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
 **dateOfBirth** | **Date**| dateOfBirth | [optional] 
 **indyWalletWalletHandle** | **Number**|  | [optional] 
 **licenceLevel** | **Number**| licenceLevel | [optional] 
 **masterSecretId** | **String**|  | [optional] 
 **name** | **String**| name | [optional] 
 **personDid** | **String**|  | [optional] 
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

