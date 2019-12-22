# ApiDocumentation.MasterControllerApi

All URIs are relative to *https://34.244.193.16:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCredSchemaUsingPUT**](MasterControllerApi.md#createCredSchemaUsingPUT) | **PUT** /create-credential-schema | createCredSchema
[**createCredentialDefinitionUsingPUT**](MasterControllerApi.md#createCredentialDefinitionUsingPUT) | **PUT** /create-credential-definition | createCredentialDefinition
[**createIssuerUsingPUT**](MasterControllerApi.md#createIssuerUsingPUT) | **PUT** /create-issuer | createIssuer
[**createTicketCredSchemaUsingPUT**](MasterControllerApi.md#createTicketCredSchemaUsingPUT) | **PUT** /create-ticket-schema | createTicketCredSchema


<a name="createCredSchemaUsingPUT"></a>
# **createCredSchemaUsingPUT**
> 'String' createCredSchemaUsingPUT(opts)

createCredSchema

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.MasterControllerApi();

var opts = { 
  'defaultStewardDid': "defaultStewardDid_example", // String | defaultStewardDid
  'walletId': "walletId_example", // String | walletId
  'walletKey': "walletKey_example" // String | walletKey
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCredSchemaUsingPUT(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **defaultStewardDid** | **String**| defaultStewardDid | [optional] 
 **walletId** | **String**| walletId | [optional] 
 **walletKey** | **String**| walletKey | [optional] 

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="createCredentialDefinitionUsingPUT"></a>
# **createCredentialDefinitionUsingPUT**
> 'String' createCredentialDefinitionUsingPUT(opts)

createCredentialDefinition

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.MasterControllerApi();

var opts = { 
  'personDid': "personDid_example", // String | personDid
  'schemaId': "schemaId_example", // String | schemaId
  'walletId': "walletId_example", // String | walletId
  'walletKey': "walletKey_example" // String | walletKey
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
 **personDid** | **String**| personDid | [optional] 
 **schemaId** | **String**| schemaId | [optional] 
 **walletId** | **String**| walletId | [optional] 
 **walletKey** | **String**| walletKey | [optional] 

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="createIssuerUsingPUT"></a>
# **createIssuerUsingPUT**
> 'String' createIssuerUsingPUT(opts)

createIssuer

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.MasterControllerApi();

var opts = { 
  'walletId': "walletId_example", // String | walletId
  'walletKey': "walletKey_example" // String | walletKey
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createIssuerUsingPUT(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | **String**| walletId | [optional] 
 **walletKey** | **String**| walletKey | [optional] 

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="createTicketCredSchemaUsingPUT"></a>
# **createTicketCredSchemaUsingPUT**
> 'String' createTicketCredSchemaUsingPUT(opts)

createTicketCredSchema

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.MasterControllerApi();

var opts = { 
  'defaultStewardDid': "defaultStewardDid_example", // String | defaultStewardDid
  'walletId': "walletId_example", // String | walletId
  'walletKey': "walletKey_example" // String | walletKey
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTicketCredSchemaUsingPUT(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **defaultStewardDid** | **String**| defaultStewardDid | [optional] 
 **walletId** | **String**| walletId | [optional] 
 **walletKey** | **String**| walletKey | [optional] 

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

