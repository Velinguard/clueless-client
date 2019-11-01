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
    root.ApiDocumentation.VerifierControllerApi = factory(root.ApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * VerifierController service.
   * @module api/VerifierControllerApi
   * @version 1.0
   */

  /**
   * Constructs a new VerifierControllerApi. 
   * @alias module:api/VerifierControllerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the verifyProofFromS3UsingGET operation.
     * @callback module:api/VerifierControllerApi~verifyProofFromS3UsingGETCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * verifyProofFromS3
     * @param {Object} opts Optional parameters
     * @param {String} opts.bucketName bucketName
     * @param {String} opts.name name
     * @param {String} opts.objectName objectName
     * @param {module:api/VerifierControllerApi~verifyProofFromS3UsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    this.verifyProofFromS3UsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'bucketName': opts['bucketName'],
        'name': opts['name'],
        'objectName': opts['objectName'],
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
      var returnType = 'Boolean';

      return this.apiClient.callApi(
        '/prove-s3', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the verifyProofUsingGET operation.
     * @callback module:api/VerifierControllerApi~verifyProofUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * verifyProof
     * @param {Object} opts Optional parameters
     * @param {String} opts.credDefId 
     * @param {String} opts.credDefJson 
     * @param {String} opts.credDefs 
     * @param {String} opts.name name
     * @param {String} opts.proofJson proofJson
     * @param {String} opts.proofRequestJson proofRequestJson
     * @param {module:api/VerifierControllerApi~verifyProofUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    this.verifyProofUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'credDefId': opts['credDefId'],
        'credDefJson': opts['credDefJson'],
        'credDefs': opts['credDefs'],
        'name': opts['name'],
        'proofJson': opts['proofJson'],
        'proofRequestJson': opts['proofRequestJson'],
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
      var returnType = 'Boolean';

      return this.apiClient.callApi(
        '/prove', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
