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
    root.ApiDocumentation.IssuerCreateAndStoreCredentialDefResult = factory(root.ApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The IssuerCreateAndStoreCredentialDefResult model module.
   * @module model/IssuerCreateAndStoreCredentialDefResult
   * @version 1.0
   */

  /**
   * Constructs a new <code>IssuerCreateAndStoreCredentialDefResult</code>.
   * @alias module:model/IssuerCreateAndStoreCredentialDefResult
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>IssuerCreateAndStoreCredentialDefResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IssuerCreateAndStoreCredentialDefResult} obj Optional instance to populate.
   * @return {module:model/IssuerCreateAndStoreCredentialDefResult} The populated <code>IssuerCreateAndStoreCredentialDefResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('credDefId'))
        obj.credDefId = ApiClient.convertToType(data['credDefId'], 'String');
      if (data.hasOwnProperty('credDefJson'))
        obj.credDefJson = ApiClient.convertToType(data['credDefJson'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} credDefId
   */
  exports.prototype.credDefId = undefined;

  /**
   * @member {String} credDefJson
   */
  exports.prototype.credDefJson = undefined;

  return exports;

}));