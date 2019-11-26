/*
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CredentialDefinition', 'model/EmailInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CredentialDefinition'), require('../model/EmailInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDocumentation) {
      root.ApiDocumentation = {};
    }
    root.ApiDocumentation.IssuerControllerApi = factory(root.ApiDocumentation.ApiClient, root.ApiDocumentation.CredentialDefinition, root.ApiDocumentation.EmailInfo);
  }
}(this, function(ApiClient, CredentialDefinition, EmailInfo) {
  'use strict';

  /**
   * IssuerController service.
   * @module api/IssuerControllerApi
   * @version 1.0
   */

  /**
   * Constructs a new IssuerControllerApi. 
   * @alias module:api/IssuerControllerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createCredSchemaUsingPUT operation.
     * @callback module:api/IssuerControllerApi~createCredSchemaUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createCredSchema
     * @param {Object} opts Optional parameters
     * @param {String} opts.defaultStewardDid defaultStewardDid
     * @param {String} opts.walletId walletId
     * @param {String} opts.walletKey walletKey
     * @param {module:api/IssuerControllerApi~createCredSchemaUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.createCredSchemaUsingPUT = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'defaultStewardDid': opts['defaultStewardDid'],
        'walletId': opts['walletId'],
        'walletKey': opts['walletKey'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/create-credential-schema', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createCredentialDefinitionUsingPUT operation.
     * @callback module:api/IssuerControllerApi~createCredentialDefinitionUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createCredentialDefinition
     * @param {Object} opts Optional parameters
     * @param {String} opts.personDid personDid
     * @param {String} opts.schemaId schemaId
     * @param {String} opts.walletId walletId
     * @param {String} opts.walletKey walletKey
     * @param {module:api/IssuerControllerApi~createCredentialDefinitionUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.createCredentialDefinitionUsingPUT = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'personDid': opts['personDid'],
        'schemaId': opts['schemaId'],
        'walletId': opts['walletId'],
        'walletKey': opts['walletKey'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/create-credential-definition', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createIssuerUsingPUT operation.
     * @callback module:api/IssuerControllerApi~createIssuerUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createIssuer
     * @param {Object} opts Optional parameters
     * @param {String} opts.walletId walletId
     * @param {String} opts.walletKey walletKey
     * @param {module:api/IssuerControllerApi~createIssuerUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.createIssuerUsingPUT = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'walletId': opts['walletId'],
        'walletKey': opts['walletKey'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/create-issuer', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCredentialDefinitionUsingPUT operation.
     * @callback module:api/IssuerControllerApi~getCredentialDefinitionUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CredentialDefinition} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getCredentialDefinition
     * @param {Object} opts Optional parameters
     * @param {String} opts.credDefId credDefId
     * @param {Number} opts.indyWalletWalletHandle 
     * @param {String} opts.masterSecretId 
     * @param {String} opts.name 
     * @param {String} opts.personDid 
     * @param {module:api/IssuerControllerApi~getCredentialDefinitionUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CredentialDefinition}
     */
    this.getCredentialDefinitionUsingPUT = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'credDefId': opts['credDefId'],
        'indyWallet.walletHandle': opts['indyWalletWalletHandle'],
        'masterSecretId': opts['masterSecretId'],
        'name': opts['name'],
        'personDid': opts['personDid'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = CredentialDefinition;

      return this.apiClient.callApi(
        '/get-credential-definition', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the issuerCreateCredentialsUsingPUT operation.
     * @callback module:api/IssuerControllerApi~issuerCreateCredentialsUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmailInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * issuerCreateCredentials
     * @param {Object} opts Optional parameters
     * @param {String} opts.credDefId credDefId
     * @param {String} opts.dateOfBirth dateOfBirth
     * @param {String} opts.issuerDid issuerDid
     * @param {String} opts.issuerWalletId issuerWalletId
     * @param {String} opts.issuerWalletKey issuerWalletKey
     * @param {String} opts.licenceLevel licenceLevel
     * @param {String} opts.name name
     * @param {String} opts.proverDid proverDid
     * @param {String} opts.proverWalletId proverWalletId
     * @param {String} opts.proverWalletKey proverWalletKey
     * @param {module:api/IssuerControllerApi~issuerCreateCredentialsUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmailInfo}
     */
    this.issuerCreateCredentialsUsingPUT = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'credDefId': opts['credDefId'],
        'dateOfBirth': opts['dateOfBirth'],
        'issuerDid': opts['issuerDid'],
        'issuerWalletId': opts['issuerWalletId'],
        'issuerWalletKey': opts['issuerWalletKey'],
        'licenceLevel': opts['licenceLevel'],
        'name': opts['name'],
        'proverDid': opts['proverDid'],
        'proverWalletId': opts['proverWalletId'],
        'proverWalletKey': opts['proverWalletKey'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = EmailInfo;

      return this.apiClient.callApi(
        '/create', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the issuerEmailCreatedCredentialsUsingPUT operation.
     * @callback module:api/IssuerControllerApi~issuerEmailCreatedCredentialsUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * issuerEmailCreatedCredentials
     * @param {Object} opts Optional parameters
     * @param {String} opts.credDefId credDefId
     * @param {String} opts.dateOfBirth dateOfBirth
     * @param {String} opts.email email
     * @param {String} opts.issuerDid issuerDid
     * @param {String} opts.issuerWalletId issuerWalletId
     * @param {String} opts.issuerWalletKey issuerWalletKey
     * @param {String} opts.licenceLevel licenceLevel
     * @param {String} opts.name name
     * @param {String} opts.proverDid proverDid
     * @param {String} opts.proverWalletId proverWalletId
     * @param {String} opts.proverWalletKey proverWalletKey
     * @param {module:api/IssuerControllerApi~issuerEmailCreatedCredentialsUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.issuerEmailCreatedCredentialsUsingPUT = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'credDefId': opts['credDefId'],
        'dateOfBirth': opts['dateOfBirth'],
        'email': opts['email'],
        'issuerDid': opts['issuerDid'],
        'issuerWalletId': opts['issuerWalletId'],
        'issuerWalletKey': opts['issuerWalletKey'],
        'licenceLevel': opts['licenceLevel'],
        'name': opts['name'],
        'proverDid': opts['proverDid'],
        'proverWalletId': opts['proverWalletId'],
        'proverWalletKey': opts['proverWalletKey'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/create-email', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
