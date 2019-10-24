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
    define(['ApiClient', 'model/CredentialDefinition', 'model/CredentialRequest', 'model/IssuerCreateCredentialResult', 'model/Person'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CredentialDefinition'), require('../model/CredentialRequest'), require('../model/IssuerCreateCredentialResult'), require('../model/Person'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDocumentation) {
      root.ApiDocumentation = {};
    }
    root.ApiDocumentation.IssuerControllerApi = factory(root.ApiDocumentation.ApiClient, root.ApiDocumentation.CredentialDefinition, root.ApiDocumentation.CredentialRequest, root.ApiDocumentation.IssuerCreateCredentialResult, root.ApiDocumentation.Person);
  }
}(this, function(ApiClient, CredentialDefinition, CredentialRequest, IssuerCreateCredentialResult, Person) {
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
     * Callback function to receive the result of the createCredentialDefinitionUsingPUT operation.
     * @callback module:api/IssuerControllerApi~createCredentialDefinitionUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CredentialDefinition} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createCredentialDefinition
     * @param {Object} opts Optional parameters
     * @param {Number} opts.indyWalletWalletHandle 
     * @param {String} opts.masterSecretId 
     * @param {String} opts.personDid 
     * @param {module:api/IssuerControllerApi~createCredentialDefinitionUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CredentialDefinition}
     */
    this.createCredentialDefinitionUsingPUT = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'indyWallet.walletHandle': opts['indyWalletWalletHandle'],
        'masterSecretId': opts['masterSecretId'],
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
        '/create-credential-definition', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createCredentialsFromRequestUsingPUT operation.
     * @callback module:api/IssuerControllerApi~createCredentialsFromRequestUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssuerCreateCredentialResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createCredentialsFromRequest
     * @param {Object} opts Optional parameters
     * @param {String} opts.JSON 
     * @param {Number} opts.age 
     * @param {String} opts.credOffer 
     * @param {String} opts.credRequestCredentialRequestJson 
     * @param {String} opts.credRequestCredentialRequestMetadataJson 
     * @param {String} opts.credentialsCredDefId 
     * @param {String} opts.credentialsCredDefJson 
     * @param {String} opts.credentialsCredDefs 
     * @param {Date} opts.dateOfBirth 
     * @param {Number} opts.licenceLevel 
     * @param {String} opts.masterSecretId 
     * @param {String} opts.name 
     * @param {Number} opts.walletHandle 
     * @param {module:api/IssuerControllerApi~createCredentialsFromRequestUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssuerCreateCredentialResult}
     */
    this.createCredentialsFromRequestUsingPUT = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'JSON': opts['JSON'],
        'age': opts['age'],
        'credOffer': opts['credOffer'],
        'credRequest.credentialRequestJson': opts['credRequestCredentialRequestJson'],
        'credRequest.credentialRequestMetadataJson': opts['credRequestCredentialRequestMetadataJson'],
        'credentials.credDefId': opts['credentialsCredDefId'],
        'credentials.credDefJson': opts['credentialsCredDefJson'],
        'credentials.credDefs': opts['credentialsCredDefs'],
        'dateOfBirth': opts['dateOfBirth'],
        'licenceLevel': opts['licenceLevel'],
        'masterSecretId': opts['masterSecretId'],
        'name': opts['name'],
        'walletHandle': opts['walletHandle'],
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
      var returnType = IssuerCreateCredentialResult;

      return this.apiClient.callApi(
        '/create-credentials', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the generateProversCredentialRequestUsingGET operation.
     * @callback module:api/IssuerControllerApi~generateProversCredentialRequestUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CredentialRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * generateProversCredentialRequest
     * @param {Object} opts Optional parameters
     * @param {String} opts.credDefId 
     * @param {String} opts.credDefJson 
     * @param {String} opts.credDefs 
     * @param {Number} opts.indyWalletWalletHandle 
     * @param {Number} opts.indyWalletWalletHandle2 
     * @param {String} opts.masterSecretId 
     * @param {String} opts.masterSecretId2 
     * @param {String} opts.personDid 
     * @param {String} opts.personDid2 
     * @param {module:api/IssuerControllerApi~generateProversCredentialRequestUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CredentialRequest}
     */
    this.generateProversCredentialRequestUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'credDefId': opts['credDefId'],
        'credDefJson': opts['credDefJson'],
        'credDefs': opts['credDefs'],
        'indyWallet.walletHandle': opts['indyWalletWalletHandle'],
        'indyWallet.walletHandle': opts['indyWalletWalletHandle2'],
        'masterSecretId': opts['masterSecretId'],
        'masterSecretId': opts['masterSecretId2'],
        'personDid': opts['personDid'],
        'personDid': opts['personDid2'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = CredentialRequest;

      return this.apiClient.callApi(
        '/generate-provers-credential-request', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCredentialDefinitionUsingGET operation.
     * @callback module:api/IssuerControllerApi~getCredentialDefinitionUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CredentialDefinition} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getCredentialDefinition
     * @param {module:api/IssuerControllerApi~getCredentialDefinitionUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CredentialDefinition}
     */
    this.getCredentialDefinitionUsingGET = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = CredentialDefinition;

      return this.apiClient.callApi(
        '/get-credential-definition', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the issuerCreateCredentialsUsingPUT operation.
     * @callback module:api/IssuerControllerApi~issuerCreateCredentialsUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Person} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * issuerCreateCredentials
     * @param {Object} opts Optional parameters
     * @param {Date} opts.dateOfBirth dateOfBirth
     * @param {String} opts.issuerDid issuerDid
     * @param {Number} opts.licenceLevel licenceLevel
     * @param {String} opts.name name
     * @param {String} opts.proverDid proverDid
     * @param {String} opts.proverWalletId proverWalletId
     * @param {String} opts.proverWalletKey proverWalletKey
     * @param {module:api/IssuerControllerApi~issuerCreateCredentialsUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Person}
     */
    this.issuerCreateCredentialsUsingPUT = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'dateOfBirth': opts['dateOfBirth'],
        'issuerDid': opts['issuerDid'],
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
      var returnType = Person;

      return this.apiClient.callApi(
        '/create', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
