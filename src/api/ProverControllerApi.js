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
     * Callback function to receive the result of the proverGetDefaultCredentialsUsingGET operation.
     * @callback module:api/ProverControllerApi~proverGetDefaultCredentialsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * proverGetDefaultCredentials
     * @param {Object} opts Optional parameters
     * @param {String} opts.masterSecretId masterSecretId
     * @param {String} opts.proof proof
     * @param {String} opts.proverDID proverDID
     * @param {String} opts.proverWalletID proverWalletID
     * @param {String} opts.proverWalletKey proverWalletKey
     * @param {module:api/ProverControllerApi~proverGetDefaultCredentialsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.proverGetDefaultCredentialsUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'masterSecretId': opts['masterSecretId'],
        'proof': opts['proof'],
        'proverDID': opts['proverDID'],
        'proverWalletID': opts['proverWalletID'],
        'proverWalletKey': opts['proverWalletKey'],
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
        '/credentials-for-default-proof', 'GET',
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
     * @param {String} opts.credDefId credDefId
     * @param {String} opts.masterSecretId masterSecretId
     * @param {String} opts.proofRequestJson proofRequestJson
     * @param {String} opts.proverDID proverDID
     * @param {String} opts.proverWalletID proverWalletID
     * @param {String} opts.proverWalletKey proverWalletKey
     * @param {String} opts.schemaId schemaId
     * @param {module:api/ProverControllerApi~proverGetProofCredentialsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.proverGetProofCredentialsUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'credDefId': opts['credDefId'],
        'masterSecretId': opts['masterSecretId'],
        'proofRequestJson': opts['proofRequestJson'],
        'proverDID': opts['proverDID'],
        'proverWalletID': opts['proverWalletID'],
        'proverWalletKey': opts['proverWalletKey'],
        'schemaId': opts['schemaId'],
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
