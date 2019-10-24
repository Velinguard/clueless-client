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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDocumentation) {
      root.ApiDocumentation = {};
    }
    root.ApiDocumentation.ProverControllerApi = factory(root.ApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * ProverController service.
   * @module api/ProverControllerApi
   * @version 1.0
   */

  /**
   * Constructs a new ProverControllerApi. 
   * @alias module:api/ProverControllerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the proverGetCredentialsUsingGET operation.
     * @callback module:api/ProverControllerApi~proverGetCredentialsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * proverGetCredentials
     * @param {Object} opts Optional parameters
     * @param {String} opts.credOffer 
     * @param {String} opts.credRequestCredentialRequestJson 
     * @param {String} opts.credRequestCredentialRequestMetadataJson 
     * @param {String} opts.credentialJson 
     * @param {String} opts.credentialsCredDefId 
     * @param {String} opts.credentialsCredDefJson 
     * @param {String} opts.masterSecretId 
     * @param {String} opts.revocId 
     * @param {String} opts.revocRegDeltaJson 
     * @param {Number} opts.walletHandle 
     * @param {module:api/ProverControllerApi~proverGetCredentialsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.proverGetCredentialsUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'credOffer': opts['credOffer'],
        'credRequest.credentialRequestJson': opts['credRequestCredentialRequestJson'],
        'credRequest.credentialRequestMetadataJson': opts['credRequestCredentialRequestMetadataJson'],
        'credentialJson': opts['credentialJson'],
        'credentials.credDefId': opts['credentialsCredDefId'],
        'credentials.credDefJson': opts['credentialsCredDefJson'],
        'masterSecretId': opts['masterSecretId'],
        'revocId': opts['revocId'],
        'revocRegDeltaJson': opts['revocRegDeltaJson'],
        'walletHandle': opts['walletHandle'],
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/credential', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the proverGetProofCredentialsUsingGET operation.
     * @callback module:api/ProverControllerApi~proverGetProofCredentialsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * proverGetProofCredentials
     * @param {Object} opts Optional parameters
     * @param {String} opts.credOffer 
     * @param {String} opts.credRequestCredentialRequestJson 
     * @param {String} opts.credRequestCredentialRequestMetadataJson 
     * @param {String} opts.credentialsCredDefId 
     * @param {String} opts.credentialsCredDefJson 
     * @param {String} opts.masterSecretId 
     * @param {String} opts.proofRequestJson proofRequestJson
     * @param {Number} opts.walletHandle 
     * @param {module:api/ProverControllerApi~proverGetProofCredentialsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.proverGetProofCredentialsUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'credOffer': opts['credOffer'],
        'credRequest.credentialRequestJson': opts['credRequestCredentialRequestJson'],
        'credRequest.credentialRequestMetadataJson': opts['credRequestCredentialRequestMetadataJson'],
        'credentials.credDefId': opts['credentialsCredDefId'],
        'credentials.credDefJson': opts['credentialsCredDefJson'],
        'masterSecretId': opts['masterSecretId'],
        'proofRequestJson': opts['proofRequestJson'],
        'walletHandle': opts['walletHandle'],
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/credentials-for-proof', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
