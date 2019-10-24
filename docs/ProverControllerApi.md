# ApiDocumentation.ProverControllerApi

All URIs are relative to *https://34.244.72.181:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**proverGetCredentialsUsingGET**](ProverControllerApi.md#proverGetCredentialsUsingGET) | **GET** /credential | proverGetCredentials
[**proverGetProofCredentialsUsingGET**](ProverControllerApi.md#proverGetProofCredentialsUsingGET) | **GET** /credentials-for-proof | proverGetProofCredentials


<a name="proverGetCredentialsUsingGET"></a>
# **proverGetCredentialsUsingGET**
> 'String' proverGetCredentialsUsingGET(opts)

proverGetCredentials

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.ProverControllerApi();

var opts = { 
  'credOffer': "credOffer_example", // String | 
  'credRequestCredentialRequestJson': "credRequestCredentialRequestJson_example", // String | 
  'credRequestCredentialRequestMetadataJson': "credRequestCredentialRequestMetadataJson_example", // String | 
  'credentialJson': "credentialJson_example", // String | 
  'credentialsCredDefId': "credentialsCredDefId_example", // String | 
  'credentialsCredDefJson': "credentialsCredDefJson_example", // String | 
  'masterSecretId': "masterSecretId_example", // String | 
  'revocId': "revocId_example", // String | 
  'revocRegDeltaJson': "revocRegDeltaJson_example", // String | 
  'walletHandle': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.proverGetCredentialsUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credOffer** | **String**|  | [optional] 
 **credRequestCredentialRequestJson** | **String**|  | [optional] 
 **credRequestCredentialRequestMetadataJson** | **String**|  | [optional] 
 **credentialJson** | **String**|  | [optional] 
 **credentialsCredDefId** | **String**|  | [optional] 
 **credentialsCredDefJson** | **String**|  | [optional] 
 **masterSecretId** | **String**|  | [optional] 
 **revocId** | **String**|  | [optional] 
 **revocRegDeltaJson** | **String**|  | [optional] 
 **walletHandle** | **Number**|  | [optional] 

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="proverGetProofCredentialsUsingGET"></a>
# **proverGetProofCredentialsUsingGET**
> 'String' proverGetProofCredentialsUsingGET(opts)

proverGetProofCredentials

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.ProverControllerApi();

var opts = { 
  'credOffer': "credOffer_example", // String | 
  'credRequestCredentialRequestJson': "credRequestCredentialRequestJson_example", // String | 
  'credRequestCredentialRequestMetadataJson': "credRequestCredentialRequestMetadataJson_example", // String | 
  'credentialsCredDefId': "credentialsCredDefId_example", // String | 
  'credentialsCredDefJson': "credentialsCredDefJson_example", // String | 
  'masterSecretId': "masterSecretId_example", // String | 
  'proofRequestJson': "proofRequestJson_example", // String | proofRequestJson
  'walletHandle': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.proverGetProofCredentialsUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credOffer** | **String**|  | [optional] 
 **credRequestCredentialRequestJson** | **String**|  | [optional] 
 **credRequestCredentialRequestMetadataJson** | **String**|  | [optional] 
 **credentialsCredDefId** | **String**|  | [optional] 
 **credentialsCredDefJson** | **String**|  | [optional] 
 **masterSecretId** | **String**|  | [optional] 
 **proofRequestJson** | **String**| proofRequestJson | [optional] 
 **walletHandle** | **Number**|  | [optional] 

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

