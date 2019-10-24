# ApiDocumentation.IssuerControllerApi

All URIs are relative to *https://34.244.72.181:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCredentialsUsingPUT**](IssuerControllerApi.md#createCredentialsUsingPUT) | **PUT** /create-credentials | createCredentials
[**getProverCredentialUsingGET**](IssuerControllerApi.md#getProverCredentialUsingGET) | **GET** /get-prover-credentials | getProverCredential


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

<a name="getProverCredentialUsingGET"></a>
# **getProverCredentialUsingGET**
> CredentialRequest getProverCredentialUsingGET(opts)

getProverCredential

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.IssuerControllerApi();

var opts = { 
  'cluelessWalletWalletId': "cluelessWalletWalletId_example", // String | 
  'cluelessWalletWalletId2': "cluelessWalletWalletId_example", // String | 
  'cluelessWalletWalletKey': "cluelessWalletWalletKey_example", // String | 
  'cluelessWalletWalletKey2': "cluelessWalletWalletKey_example", // String | 
  'indyWalletWalletHandle': 56, // Number | 
  'indyWalletWalletHandle2': 56, // Number | 
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
 **cluelessWalletWalletId** | **String**|  | [optional] 
 **cluelessWalletWalletId2** | **String**|  | [optional] 
 **cluelessWalletWalletKey** | **String**|  | [optional] 
 **cluelessWalletWalletKey2** | **String**|  | [optional] 
 **indyWalletWalletHandle** | **Number**|  | [optional] 
 **indyWalletWalletHandle2** | **Number**|  | [optional] 
 **personDid** | **String**|  | [optional] 
 **personDid2** | **String**|  | [optional] 

### Return type

[**CredentialRequest**](CredentialRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

