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
import {ApiClient} from '../ApiClient';
import {MovieId} from './MovieId';

/**
 * The Movie model module.
 * @module model/Movie
 * @version 3.0.0
 */
export class Movie {
  /**
   * Constructs a new <code>Movie</code>.
   * @alias module:model/Movie
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Movie</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Movie} obj Optional instance to populate.
   * @return {module:model/Movie} The populated <code>Movie</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Movie();
      if (data.hasOwnProperty('movie_id'))
        obj.movieId = MovieId.constructFromObject(data['movie_id']);
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('plot'))
        obj.plot = ApiClient.convertToType(data['plot'], 'String');
      if (data.hasOwnProperty('cast'))
        obj.cast = ApiClient.convertToType(data['cast'], ['String']);
      if (data.hasOwnProperty('director'))
        obj.director = ApiClient.convertToType(data['director'], 'String');
      if (data.hasOwnProperty('writer'))
        obj.writer = ApiClient.convertToType(data['writer'], 'String');
      if (data.hasOwnProperty('rating'))
        obj.rating = ApiClient.convertToType(data['rating'], 'Number');
      if (data.hasOwnProperty('genres'))
        obj.genres = ApiClient.convertToType(data['genres'], ['String']);
      if (data.hasOwnProperty('release_date'))
        obj.releaseDate = ApiClient.convertToType(data['release_date'], 'Date');
      if (data.hasOwnProperty('duration'))
        obj.duration = ApiClient.convertToType(data['duration'], 'String');
      if (data.hasOwnProperty('poster'))
        obj.poster = ApiClient.convertToType(data['poster'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:model/MovieId} movieId
 */
Movie.prototype.movieId = undefined;

/**
 * @member {String} title
 */
Movie.prototype.title = undefined;

/**
 * @member {String} plot
 */
Movie.prototype.plot = undefined;

/**
 * @member {Array.<String>} cast
 */
Movie.prototype.cast = undefined;

/**
 * @member {String} director
 */
Movie.prototype.director = undefined;

/**
 * @member {String} writer
 */
Movie.prototype.writer = undefined;

/**
 * @member {Number} rating
 */
Movie.prototype.rating = undefined;

/**
 * @member {Array.<String>} genres
 */
Movie.prototype.genres = undefined;

/**
 * @member {Date} releaseDate
 */
Movie.prototype.releaseDate = undefined;

/**
 * @member {String} duration
 */
Movie.prototype.duration = undefined;

/**
 * @member {String} poster
 */
Movie.prototype.poster = undefined;

