# ApiDocumentation.ProverControllerApi

All URIs are relative to *https://34.244.193.16:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**proverGetDefaultCredentialsUsingGET**](ProverControllerApi.md#proverGetDefaultCredentialsUsingGET) | **GET** /credentials-for-default-proof | proverGetDefaultCredentials
[**proverGetProofCredentialsUsingGET**](ProverControllerApi.md#proverGetProofCredentialsUsingGET) | **GET** /credentials-for-proof | proverGetProofCredentials


<a name="proverGetDefaultCredentialsUsingGET"></a>
# **proverGetDefaultCredentialsUsingGET**
> 'String' proverGetDefaultCredentialsUsingGET(opts)

proverGetDefaultCredentials

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.ProverControllerApi();

var opts = { 
  'masterSecretId': "masterSecretId_example", // String | masterSecretId
  'proof': "proof_example", // String | proof
  'proverDID': "proverDID_example", // String | proverDID
  'proverWalletID': "proverWalletID_example", // String | proverWalletID
  'proverWalletKey': "proverWalletKey_example" // String | proverWalletKey
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.proverGetDefaultCredentialsUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **masterSecretId** | **String**| masterSecretId | [optional] 
 **proof** | **String**| proof | [optional] 
 **proverDID** | **String**| proverDID | [optional] 
 **proverWalletID** | **String**| proverWalletID | [optional] 
 **proverWalletKey** | **String**| proverWalletKey | [optional] 

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
  'credDefId': "credDefId_example", // String | credDefId
  'masterSecretId': "masterSecretId_example", // String | masterSecretId
  'proofRequestJson': "proofRequestJson_example", // String | proofRequestJson
  'proverDID': "proverDID_example", // String | proverDID
  'proverWalletID': "proverWalletID_example", // String | proverWalletID
  'proverWalletKey': "proverWalletKey_example", // String | proverWalletKey
  'schemaId': "schemaId_example" // String | schemaId
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
 **credDefId** | **String**| credDefId | [optional] 
 **masterSecretId** | **String**| masterSecretId | [optional] 
 **proofRequestJson** | **String**| proofRequestJson | [optional] 
 **proverDID** | **String**| proverDID | [optional] 
 **proverWalletID** | **String**| proverWalletID | [optional] 
 **proverWalletKey** | **String**| proverWalletKey | [optional] 
 **schemaId** | **String**| schemaId | [optional] 

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

