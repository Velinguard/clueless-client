# ApiDocumentation.ProofControllerApi

All URIs are relative to *https://34.244.193.16:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLicencesUsingGET**](ProofControllerApi.md#getLicencesUsingGET) | **GET** /get-licence-type | getLicences
[**getProofJsonUsingGET**](ProofControllerApi.md#getProofJsonUsingGET) | **GET** /get-proof | getProofJson
[**getProofRequestUsingGET**](ProofControllerApi.md#getProofRequestUsingGET) | **GET** /get-proof-request | getProofRequest
[**getProofsUsingGET**](ProofControllerApi.md#getProofsUsingGET) | **GET** /get-proofs | getProofs


<a name="getLicencesUsingGET"></a>
# **getLicencesUsingGET**
> ['String'] getLicencesUsingGET()

getLicences

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.ProofControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLicencesUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**['String']**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getProofJsonUsingGET"></a>
# **getProofJsonUsingGET**
> 'String' getProofJsonUsingGET(opts)

getProofJson

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.ProofControllerApi();

var opts = { 
  'proof': "proof_example" // String | proof
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProofJsonUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **proof** | **String**| proof | [optional] 

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getProofRequestUsingGET"></a>
# **getProofRequestUsingGET**
> 'String' getProofRequestUsingGET()

getProofRequest

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.ProofControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProofRequestUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getProofsUsingGET"></a>
# **getProofsUsingGET**
> ['String'] getProofsUsingGET(opts)

getProofs

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.ProofControllerApi();

var opts = { 
  'licence': "licence_example" // String | licence
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProofsUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **licence** | **String**| licence | [optional] 

### Return type

**['String']**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

