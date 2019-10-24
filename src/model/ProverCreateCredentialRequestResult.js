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
    root.ApiDocumentation.ProverCreateCredentialRequestResult = factory(root.ApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ProverCreateCredentialRequestResult model module.
   * @module model/ProverCreateCredentialRequestResult
   * @version 1.0
   */

  /**
   * Constructs a new <code>ProverCreateCredentialRequestResult</code>.
   * @alias module:model/ProverCreateCredentialRequestResult
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ProverCreateCredentialRequestResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProverCreateCredentialRequestResult} obj Optional instance to populate.
   * @return {module:model/ProverCreateCredentialRequestResult} The populated <code>ProverCreateCredentialRequestResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('credentialRequestJson'))
        obj.credentialRequestJson = ApiClient.convertToType(data['credentialRequestJson'], 'String');
      if (data.hasOwnProperty('credentialRequestMetadataJson'))
        obj.credentialRequestMetadataJson = ApiClient.convertToType(data['credentialRequestMetadataJson'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} credentialRequestJson
   */
  exports.prototype.credentialRequestJson = undefined;

  /**
   * @member {String} credentialRequestMetadataJson
   */
  exports.prototype.credentialRequestMetadataJson = undefined;

  return exports;

}));
