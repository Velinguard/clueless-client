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
    describe('CredentialDefinition', function() {
      beforeEach(function() {
        instance = new ApiDocumentation.CredentialDefinition();
      });

      it('should create an instance of CredentialDefinition', function() {
        // TODO: update the code to test CredentialDefinition
        expect(instance).to.be.a(ApiDocumentation.CredentialDefinition);
      });

      it('should have the property credDefId (base name: "credDefId")', function() {
        // TODO: update the code to test the property credDefId
        expect(instance).to.have.property('credDefId');
        // expect(instance.credDefId).to.be(expectedValueLiteral);
      });

      it('should have the property credDefJson (base name: "credDefJson")', function() {
        // TODO: update the code to test the property credDefJson
        expect(instance).to.have.property('credDefJson');
        // expect(instance.credDefJson).to.be(expectedValueLiteral);
      });

      it('should have the property credDefs (base name: "credDefs")', function() {
        // TODO: update the code to test the property credDefs
        expect(instance).to.have.property('credDefs');
        // expect(instance.credDefs).to.be(expectedValueLiteral);
      });

    });
  });

}));