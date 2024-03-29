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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CredentialDefinition', 'model/EmailInfo', 'model/ModelAndView', 'model/Person', 'model/View', 'model/Wallet', 'api/BasicErrorControllerApi', 'api/IssuerControllerApi', 'api/MasterControllerApi', 'api/ProofControllerApi', 'api/ProverControllerApi', 'api/VerifierControllerApi', 'api/WalletControllerApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/CredentialDefinition'), require('./model/EmailInfo'), require('./model/ModelAndView'), require('./model/Person'), require('./model/View'), require('./model/Wallet'), require('./api/BasicErrorControllerApi'), require('./api/IssuerControllerApi'), require('./api/MasterControllerApi'), require('./api/ProofControllerApi'), require('./api/ProverControllerApi'), require('./api/VerifierControllerApi'), require('./api/WalletControllerApi'));
  }
}(function(ApiClient, CredentialDefinition, EmailInfo, ModelAndView, Person, View, Wallet, BasicErrorControllerApi, IssuerControllerApi, MasterControllerApi, ProofControllerApi, ProverControllerApi, VerifierControllerApi, WalletControllerApi) {
  'use strict';

  /**
   * Api_Documentation.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var ApiDocumentation = require('index'); // See note below*.
   * var xxxSvc = new ApiDocumentation.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new ApiDocumentation.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new ApiDocumentation.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new ApiDocumentation.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The CredentialDefinition model constructor.
     * @property {module:model/CredentialDefinition}
     */
    CredentialDefinition: CredentialDefinition,
    /**
     * The EmailInfo model constructor.
     * @property {module:model/EmailInfo}
     */
    EmailInfo: EmailInfo,
    /**
     * The ModelAndView model constructor.
     * @property {module:model/ModelAndView}
     */
    ModelAndView: ModelAndView,
    /**
     * The Person model constructor.
     * @property {module:model/Person}
     */
    Person: Person,
    /**
     * The View model constructor.
     * @property {module:model/View}
     */
    View: View,
    /**
     * The Wallet model constructor.
     * @property {module:model/Wallet}
     */
    Wallet: Wallet,
    /**
     * The BasicErrorControllerApi service constructor.
     * @property {module:api/BasicErrorControllerApi}
     */
    BasicErrorControllerApi: BasicErrorControllerApi,
    /**
     * The IssuerControllerApi service constructor.
     * @property {module:api/IssuerControllerApi}
     */
    IssuerControllerApi: IssuerControllerApi,
    /**
     * The MasterControllerApi service constructor.
     * @property {module:api/MasterControllerApi}
     */
    MasterControllerApi: MasterControllerApi,
    /**
     * The ProofControllerApi service constructor.
     * @property {module:api/ProofControllerApi}
     */
    ProofControllerApi: ProofControllerApi,
    /**
     * The ProverControllerApi service constructor.
     * @property {module:api/ProverControllerApi}
     */
    ProverControllerApi: ProverControllerApi,
    /**
     * The VerifierControllerApi service constructor.
     * @property {module:api/VerifierControllerApi}
     */
    VerifierControllerApi: VerifierControllerApi,
    /**
     * The WalletControllerApi service constructor.
     * @property {module:api/WalletControllerApi}
     */
    WalletControllerApi: WalletControllerApi
  };

  return exports;
}));
