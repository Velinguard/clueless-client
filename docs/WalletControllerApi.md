# ApiDocumentation.WalletControllerApi

All URIs are relative to *https://34.244.72.181:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**closeWalletUsingDELETE**](WalletControllerApi.md#closeWalletUsingDELETE) | **DELETE** /close-wallet | closeWallet
[**createWalletUsingPUT**](WalletControllerApi.md#createWalletUsingPUT) | **PUT** /create-wallet | createWallet
[**createWalletWithDidUsingPUT**](WalletControllerApi.md#createWalletWithDidUsingPUT) | **PUT** /create-wallet-with-did | createWalletWithDid
[**deleteWalletUsingDELETE**](WalletControllerApi.md#deleteWalletUsingDELETE) | **DELETE** /delete-wallet | deleteWallet
[**getWalletUsingGET**](WalletControllerApi.md#getWalletUsingGET) | **GET** /get-wallet | getWallet
[**loginUsingGET**](WalletControllerApi.md#loginUsingGET) | **GET** /login | login


<a name="closeWalletUsingDELETE"></a>
# **closeWalletUsingDELETE**
> closeWalletUsingDELETE(opts)

closeWallet

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.WalletControllerApi();

var opts = { 
  'walletHandle': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.closeWalletUsingDELETE(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletHandle** | **Number**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="createWalletUsingPUT"></a>
# **createWalletUsingPUT**
> createWalletUsingPUT(opts)

createWallet

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.WalletControllerApi();

var opts = { 
  'id': "id_example", // String | id
  'key': "key_example" // String | key
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createWalletUsingPUT(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | [optional] 
 **key** | **String**| key | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="createWalletWithDidUsingPUT"></a>
# **createWalletWithDidUsingPUT**
> 'String' createWalletWithDidUsingPUT(opts)

createWalletWithDid

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.WalletControllerApi();

var opts = { 
  'id': "id_example", // String | id
  'key': "key_example" // String | key
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createWalletWithDidUsingPUT(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | [optional] 
 **key** | **String**| key | [optional] 

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteWalletUsingDELETE"></a>
# **deleteWalletUsingDELETE**
> deleteWalletUsingDELETE(opts)

deleteWallet

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.WalletControllerApi();

var opts = { 
  'id': "id_example", // String | id
  'key': "key_example" // String | key
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteWalletUsingDELETE(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | [optional] 
 **key** | **String**| key | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getWalletUsingGET"></a>
# **getWalletUsingGET**
> Wallet getWalletUsingGET(opts)

getWallet

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.WalletControllerApi();

var opts = { 
  'id': "id_example", // String | id
  'key': "key_example" // String | key
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getWalletUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | [optional] 
 **key** | **String**| key | [optional] 

### Return type

[**Wallet**](Wallet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="loginUsingGET"></a>
# **loginUsingGET**
> Person loginUsingGET(opts)

login

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.WalletControllerApi();

var opts = { 
  'did': "did_example", // String | did
  'id': "id_example", // String | id
  'key': "key_example", // String | key
  'masterDid': "masterDid_example" // String | masterDid
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.loginUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | **String**| did | [optional] 
 **id** | **String**| id | [optional] 
 **key** | **String**| key | [optional] 
 **masterDid** | **String**| masterDid | [optional] 

### Return type

[**Person**](Person.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

