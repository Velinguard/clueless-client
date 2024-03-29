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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ApiDocumentation);
  }
}(this, function(expect, ApiDocumentation) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('ProverCreateCredentialRequestResult', function() {
      beforeEach(function() {
        instance = new ApiDocumentation.ProverCreateCredentialRequestResult();
      });

      it('should create an instance of ProverCreateCredentialRequestResult', function() {
        // TODO: update the code to test ProverCreateCredentialRequestResult
        expect(instance).to.be.a(ApiDocumentation.ProverCreateCredentialRequestResult);
      });

      it('should have the property credentialRequestJson (base name: "credentialRequestJson")', function() {
        // TODO: update the code to test the property credentialRequestJson
        expect(instance).to.have.property('credentialRequestJson');
        // expect(instance.credentialRequestJson).to.be(expectedValueLiteral);
      });

      it('should have the property credentialRequestMetadataJson (base name: "credentialRequestMetadataJson")', function() {
        // TODO: update the code to test the property credentialRequestMetadataJson
        expect(instance).to.have.property('credentialRequestMetadataJson');
        // expect(instance.credentialRequestMetadataJson).to.be(expectedValueLiteral);
      });

    });
  });

}));
