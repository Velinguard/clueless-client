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

  beforeEach(function() {
    instance = new ApiDocumentation.VerifierControllerApi();
  });

  describe('(package)', function() {
    describe('VerifierControllerApi', function() {
      describe('verifyProofUsingGET', function() {
        it('should call verifyProofUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for verifyProofUsingGET call and complete the assertions
          /*
          var opts = {};
          opts.credOffer = "credOffer_example";
          opts.credRequestCredentialRequestJson = "credRequestCredentialRequestJson_example";
          opts.credRequestCredentialRequestMetadataJson = "credRequestCredentialRequestMetadataJson_example";
          opts.credentialsCredDefId = "credentialsCredDefId_example";
          opts.credentialsCredDefJson = "credentialsCredDefJson_example";
          opts.masterSecretId = "masterSecretId_example";
          opts.name = "name_example";
          opts.proofJson = "proofJson_example";
          opts.proofRequestJson = "proofRequestJson_example";

          instance.verifyProofUsingGET(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a('boolean');
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
