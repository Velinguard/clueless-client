# ApiDocumentation.VerifierControllerApi

All URIs are relative to *https://34.244.72.181:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**verifyProofUsingGET**](VerifierControllerApi.md#verifyProofUsingGET) | **GET** /prove | verifyProof


<a name="verifyProofUsingGET"></a>
# **verifyProofUsingGET**
> 'Boolean' verifyProofUsingGET(opts)

verifyProof

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.VerifierControllerApi();

var opts = { 
  'credOffer': "credOffer_example", // String | 
  'credRequestCredentialRequestJson': "credRequestCredentialRequestJson_example", // String | 
  'credRequestCredentialRequestMetadataJson': "credRequestCredentialRequestMetadataJson_example", // String | 
  'credentialsCredDefId': "credentialsCredDefId_example", // String | 
  'credentialsCredDefJson': "credentialsCredDefJson_example", // String | 
  'masterSecretId': "masterSecretId_example", // String | 
  'name': "name_example", // String | name
  'proofJson': "proofJson_example", // String | proofJson
  'proofRequestJson': "proofRequestJson_example" // String | proofRequestJson
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.verifyProofUsingGET(opts, callback);
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
 **name** | **String**| name | [optional] 
 **proofJson** | **String**| proofJson | [optional] 
 **proofRequestJson** | **String**| proofRequestJson | [optional] 

### Return type

**'Boolean'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

