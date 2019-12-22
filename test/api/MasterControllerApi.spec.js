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
    instance = new ApiDocumentation.MasterControllerApi();
  });

  describe('(package)', function() {
    describe('MasterControllerApi', function() {
      describe('createCredSchemaUsingPUT', function() {
        it('should call createCredSchemaUsingPUT successfully', function(done) {
          // TODO: uncomment, update parameter values for createCredSchemaUsingPUT call and complete the assertions
          /*
          var opts = {};
          opts.defaultStewardDid = "defaultStewardDid_example";
          opts.walletId = "walletId_example";
          opts.walletKey = "walletKey_example";

          instance.createCredSchemaUsingPUT(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a('string');
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('createCredentialDefinitionUsingPUT', function() {
        it('should call createCredentialDefinitionUsingPUT successfully', function(done) {
          // TODO: uncomment, update parameter values for createCredentialDefinitionUsingPUT call and complete the assertions
          /*
          var opts = {};
          opts.personDid = "personDid_example";
          opts.schemaId = "schemaId_example";
          opts.walletId = "walletId_example";
          opts.walletKey = "walletKey_example";

          instance.createCredentialDefinitionUsingPUT(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a('string');
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('createIssuerUsingPUT', function() {
        it('should call createIssuerUsingPUT successfully', function(done) {
          // TODO: uncomment, update parameter values for createIssuerUsingPUT call and complete the assertions
          /*
          var opts = {};
          opts.walletId = "walletId_example";
          opts.walletKey = "walletKey_example";

          instance.createIssuerUsingPUT(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a('string');
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('createTicketCredSchemaUsingPUT', function() {
        it('should call createTicketCredSchemaUsingPUT successfully', function(done) {
          // TODO: uncomment, update parameter values for createTicketCredSchemaUsingPUT call and complete the assertions
          /*
          var opts = {};
          opts.defaultStewardDid = "defaultStewardDid_example";
          opts.walletId = "walletId_example";
          opts.walletKey = "walletKey_example";

          instance.createTicketCredSchemaUsingPUT(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a('string');
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
