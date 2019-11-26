# ApiDocumentation.VerifierControllerApi

All URIs are relative to *https://34.244.72.181:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**verifyProofFromS3UsingGET**](VerifierControllerApi.md#verifyProofFromS3UsingGET) | **GET** /prove-s3 | verifyProofFromS3
[**verifyProofUsingGET**](VerifierControllerApi.md#verifyProofUsingGET) | **GET** /prove | verifyProof


<a name="verifyProofFromS3UsingGET"></a>
# **verifyProofFromS3UsingGET**
> 'Boolean' verifyProofFromS3UsingGET(opts)

verifyProofFromS3

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.VerifierControllerApi();

var opts = { 
  'bucketName': "bucketName_example", // String | bucketName
  'credDefId': "credDefId_example", // String | credDefId
  'name': "name_example", // String | name
  'objectName': "objectName_example", // String | objectName
  'schemaId': "schemaId_example", // String | schemaId
  'verifierDid': "verifierDid_example", // String | verifierDid
  'verifierWalletId': "verifierWalletId_example", // String | verifierWalletId
  'verifierWalletKey': "verifierWalletKey_example" // String | verifierWalletKey
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.verifyProofFromS3UsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucketName** | **String**| bucketName | [optional] 
 **credDefId** | **String**| credDefId | [optional] 
 **name** | **String**| name | [optional] 
 **objectName** | **String**| objectName | [optional] 
 **schemaId** | **String**| schemaId | [optional] 
 **verifierDid** | **String**| verifierDid | [optional] 
 **verifierWalletId** | **String**| verifierWalletId | [optional] 
 **verifierWalletKey** | **String**| verifierWalletKey | [optional] 

### Return type

**'Boolean'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="verifyProofUsingGET"></a>
# **verifyProofUsingGET**
> 'Boolean' verifyProofUsingGET(opts)

verifyProof

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.VerifierControllerApi();

var opts = { 
  'credDefId': "credDefId_example", // String | 
  'credDefId2': "credDefId_example", // String | credDefId
  'credDefJson': "credDefJson_example", // String | 
  'credDefs': "credDefs_example", // String | 
  'name': "name_example", // String | name
  'proofJson': "proofJson_example", // String | proofJson
  'proofRequestJson': "proofRequestJson_example", // String | proofRequestJson
  'schemaId': "schemaId_example", // String | schemaId
  'verifierDid': "verifierDid_example", // String | verifierDid
  'verifierWalletId': "verifierWalletId_example", // String | verifierWalletId
  'verifierWalletKey': "verifierWalletKey_example" // String | verifierWalletKey
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
 **credDefId** | **String**|  | [optional] 
 **credDefId2** | **String**| credDefId | [optional] 
 **credDefJson** | **String**|  | [optional] 
 **credDefs** | **String**|  | [optional] 
 **name** | **String**| name | [optional] 
 **proofJson** | **String**| proofJson | [optional] 
 **proofRequestJson** | **String**| proofRequestJson | [optional] 
 **schemaId** | **String**| schemaId | [optional] 
 **verifierDid** | **String**| verifierDid | [optional] 
 **verifierWalletId** | **String**| verifierWalletId | [optional] 
 **verifierWalletKey** | **String**| verifierWalletKey | [optional] 

### Return type

**'Boolean'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

