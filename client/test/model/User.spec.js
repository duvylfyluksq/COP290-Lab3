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
    describe('User', function() {
      beforeEach(function() {
        instance = new Fmd.User();
      });

      it('should create an instance of User', function() {
        // TODO: update the code to test User
        expect(instance).to.be.a(Fmd.User);
      });

      it('should have the property userId (base name: "user_id")', function() {
        // TODO: update the code to test the property userId
        expect(instance).to.have.property('userId');
        // expect(instance.userId).to.be(expectedValueLiteral);
      });

      it('should have the property username (base name: "username")', function() {
        // TODO: update the code to test the property username
        expect(instance).to.have.property('username');
        // expect(instance.username).to.be(expectedValueLiteral);
      });

      it('should have the property password (base name: "password")', function() {
        // TODO: update the code to test the property password
        expect(instance).to.have.property('password');
        // expect(instance.password).to.be(expectedValueLiteral);
      });

      it('should have the property bio (base name: "bio")', function() {
        // TODO: update the code to test the property bio
        expect(instance).to.have.property('bio');
        // expect(instance.bio).to.be(expectedValueLiteral);
      });

      it('should have the property pfp (base name: "pfp")', function() {
        // TODO: update the code to test the property pfp
        expect(instance).to.have.property('pfp');
        // expect(instance.pfp).to.be(expectedValueLiteral);
      });

      it('should have the property watchlistMovies (base name: "watchlist_movies")', function() {
        // TODO: update the code to test the property watchlistMovies
        expect(instance).to.have.property('watchlistMovies');
        // expect(instance.watchlistMovies).to.be(expectedValueLiteral);
      });

      it('should have the property watchlistShows (base name: "watchlist_shows")', function() {
        // TODO: update the code to test the property watchlistShows
        expect(instance).to.have.property('watchlistShows');
        // expect(instance.watchlistShows).to.be(expectedValueLiteral);
      });

      it('should have the property interests (base name: "interests")', function() {
        // TODO: update the code to test the property interests
        expect(instance).to.have.property('interests');
        // expect(instance.interests).to.be(expectedValueLiteral);
      });

    });
  });

}));
