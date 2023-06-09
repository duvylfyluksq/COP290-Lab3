/*
 * FMD
 * A website for movies' and TV shows' reviews
 *
 * OpenAPI spec version: 3.0.0
 * Contact: om.dehlantube@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.41
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
    factory(root.expect, root.Fmd);
  }
}(this, function(expect, Fmd) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Review', function() {
      beforeEach(function() {
        instance = new Fmd.Review();
      });

      it('should create an instance of Review', function() {
        // TODO: update the code to test Review
        expect(instance).to.be.a(Fmd.Review);
      });

      it('should have the property reviewId (base name: "review_id")', function() {
        // TODO: update the code to test the property reviewId
        expect(instance).to.have.property('reviewId');
        // expect(instance.reviewId).to.be(expectedValueLiteral);
      });

      it('should have the property title (base name: "title")', function() {
        // TODO: update the code to test the property title
        expect(instance).to.have.property('title');
        // expect(instance.title).to.be(expectedValueLiteral);
      });

      it('should have the property movieId (base name: "movie_id")', function() {
        // TODO: update the code to test the property movieId
        expect(instance).to.have.property('movieId');
        // expect(instance.movieId).to.be(expectedValueLiteral);
      });

      it('should have the property showId (base name: "show_id")', function() {
        // TODO: update the code to test the property showId
        expect(instance).to.have.property('showId');
        // expect(instance.showId).to.be(expectedValueLiteral);
      });

      it('should have the property userId (base name: "user_id")', function() {
        // TODO: update the code to test the property userId
        expect(instance).to.have.property('userId');
        // expect(instance.userId).to.be(expectedValueLiteral);
      });

      it('should have the property likes (base name: "likes")', function() {
        // TODO: update the code to test the property likes
        expect(instance).to.have.property('likes');
        // expect(instance.likes).to.be(expectedValueLiteral);
      });

      it('should have the property rating (base name: "rating")', function() {
        // TODO: update the code to test the property rating
        expect(instance).to.have.property('rating');
        // expect(instance.rating).to.be(expectedValueLiteral);
      });

      it('should have the property content (base name: "content")', function() {
        // TODO: update the code to test the property content
        expect(instance).to.have.property('content');
        // expect(instance.content).to.be(expectedValueLiteral);
      });

      it('should have the property creationTime (base name: "creation_time")', function() {
        // TODO: update the code to test the property creationTime
        expect(instance).to.have.property('creationTime');
        // expect(instance.creationTime).to.be(expectedValueLiteral);
      });

    });
  });

}));
