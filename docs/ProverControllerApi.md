# ApiDocumentation.ProverControllerApi

All URIs are relative to *https://34.244.72.181:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**proverGetProofCredentialsUsingGET**](ProverControllerApi.md#proverGetProofCredentialsUsingGET) | **GET** /credentials-for-proof | proverGetProofCredentials


<a name="proverGetProofCredentialsUsingGET"></a>
# **proverGetProofCredentialsUsingGET**
> 'String' proverGetProofCredentialsUsingGET(opts)

proverGetProofCredentials

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.ProverControllerApi();

var opts = { 
  'credDefId': "credDefId_example", // String | 
  'credDefJson': "credDefJson_example", // String | 
  'credDefs': "credDefs_example", // String | 
  'indyWalletWalletHandle': 56, // Number | 
  'masterSecretId': "masterSecretId_example", // String | 
  'masterSecretId2': "masterSecretId_example", // String | masterSecretId
  'personDid': "personDid_example", // String | 
  'proofRequestJson': "proofRequestJson_example" // String | proofRequestJson
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
 **credDefId** | **String**|  | [optional] 
 **credDefJson** | **String**|  | [optional] 
 **credDefs** | **String**|  | [optional] 
 **indyWalletWalletHandle** | **Number**|  | [optional] 
 **masterSecretId** | **String**|  | [optional] 
 **masterSecretId2** | **String**| masterSecretId | [optional] 
 **personDid** | **String**|  | [optional] 
 **proofRequestJson** | **String**| proofRequestJson | [optional] 

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

