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
    describe('ModelAndView', function() {
      beforeEach(function() {
        instance = new ApiDocumentation.ModelAndView();
      });

      it('should create an instance of ModelAndView', function() {
        // TODO: update the code to test ModelAndView
        expect(instance).to.be.a(ApiDocumentation.ModelAndView);
      });

      it('should have the property empty (base name: "empty")', function() {
        // TODO: update the code to test the property empty
        expect(instance).to.have.property('empty');
        // expect(instance.empty).to.be(expectedValueLiteral);
      });

      it('should have the property model (base name: "model")', function() {
        // TODO: update the code to test the property model
        expect(instance).to.have.property('model');
        // expect(instance.model).to.be(expectedValueLiteral);
      });

      it('should have the property modelMap (base name: "modelMap")', function() {
        // TODO: update the code to test the property modelMap
        expect(instance).to.have.property('modelMap');
        // expect(instance.modelMap).to.be(expectedValueLiteral);
      });

      it('should have the property reference (base name: "reference")', function() {
        // TODO: update the code to test the property reference
        expect(instance).to.have.property('reference');
        // expect(instance.reference).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property view (base name: "view")', function() {
        // TODO: update the code to test the property view
        expect(instance).to.have.property('view');
        // expect(instance.view).to.be(expectedValueLiteral);
      });

      it('should have the property viewName (base name: "viewName")', function() {
        // TODO: update the code to test the property viewName
        expect(instance).to.have.property('viewName');
        // expect(instance.viewName).to.be(expectedValueLiteral);
      });

    });
  });

}));
