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
    describe('Movie', function() {
      beforeEach(function() {
        instance = new Fmd.Movie();
      });

      it('should create an instance of Movie', function() {
        // TODO: update the code to test Movie
        expect(instance).to.be.a(Fmd.Movie);
      });

      it('should have the property movieId (base name: "movie_id")', function() {
        // TODO: update the code to test the property movieId
        expect(instance).to.have.property('movieId');
        // expect(instance.movieId).to.be(expectedValueLiteral);
      });

      it('should have the property title (base name: "title")', function() {
        // TODO: update the code to test the property title
        expect(instance).to.have.property('title');
        // expect(instance.title).to.be(expectedValueLiteral);
      });

      it('should have the property plot (base name: "plot")', function() {
        // TODO: update the code to test the property plot
        expect(instance).to.have.property('plot');
        // expect(instance.plot).to.be(expectedValueLiteral);
      });

      it('should have the property cast (base name: "cast")', function() {
        // TODO: update the code to test the property cast
        expect(instance).to.have.property('cast');
        // expect(instance.cast).to.be(expectedValueLiteral);
      });

      it('should have the property director (base name: "director")', function() {
        // TODO: update the code to test the property director
        expect(instance).to.have.property('director');
        // expect(instance.director).to.be(expectedValueLiteral);
      });

      it('should have the property writer (base name: "writer")', function() {
        // TODO: update the code to test the property writer
        expect(instance).to.have.property('writer');
        // expect(instance.writer).to.be(expectedValueLiteral);
      });

      it('should have the property rating (base name: "rating")', function() {
        // TODO: update the code to test the property rating
        expect(instance).to.have.property('rating');
        // expect(instance.rating).to.be(expectedValueLiteral);
      });

      it('should have the property genres (base name: "genres")', function() {
        // TODO: update the code to test the property genres
        expect(instance).to.have.property('genres');
        // expect(instance.genres).to.be(expectedValueLiteral);
      });

      it('should have the property releaseDate (base name: "release_date")', function() {
        // TODO: update the code to test the property releaseDate
        expect(instance).to.have.property('releaseDate');
        // expect(instance.releaseDate).to.be(expectedValueLiteral);
      });

      it('should have the property duration (base name: "duration")', function() {
        // TODO: update the code to test the property duration
        expect(instance).to.have.property('duration');
        // expect(instance.duration).to.be(expectedValueLiteral);
      });

      it('should have the property poster (base name: "poster")', function() {
        // TODO: update the code to test the property poster
        expect(instance).to.have.property('poster');
        // expect(instance.poster).to.be(expectedValueLiteral);
      });

    });
  });

}));
