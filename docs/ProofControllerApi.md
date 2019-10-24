# ApiDocumentation.ProofControllerApi

All URIs are relative to *https://34.244.72.181:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProofRequestUsingGET**](ProofControllerApi.md#getProofRequestUsingGET) | **GET** /get-proof-request | getProofRequest


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

