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
import {ApiClient} from "../ApiClient";
import {Comment} from '../model/Comment';
import {Review} from '../model/Review';

/**
* Reviews service.
* @module api/ReviewsApi
* @version 3.0.0
*/
export class ReviewsApi {

    /**
    * Constructs a new ReviewsApi. 
    * @alias module:api/ReviewsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the reviewMovieIdGet operation.
     * @callback moduleapi/ReviewsApi~reviewMovieIdGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Review>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all reviews of a movie
     * Returns a list of reviews for a particular movie
     * @param {Number} id ID of the Movie
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sortTypeReviews Parameter based on which reviews will be sorted
     * @param {Boolean} opts.sortOrder sorting order
     * @param {module:api/ReviewsApi~reviewMovieIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    reviewMovieIdGet(id, opts, callback) { 
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling reviewMovieIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'sort_type_reviews': opts['sortTypeReviews'],'sort_order': opts['sortOrder']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Review];

      return this.apiClient.callApi(
        '/review/movie/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the reviewPost operation.
     * @callback moduleapi/ReviewsApi~reviewPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new review
     * @param {String} movieId ID of the movie for which the review is being posted(null if TVShow)
     * @param {String} showId ID of the TVShow for which the review is being posted(null if Movie)
     * @param {Number} userId ID of the user who is posting the review
     * @param {Number} rating rating by the user
     * @param {String} title the review title of the review to be added
     * @param {String} content content of the review
     * @param {Date} creationTime creation time
     * @param {module:api/ReviewsApi~reviewPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    reviewPost(movieId, showId, userId, rating, title, content, creationTime, callback) {
      
      let postBody = null;
      // verify the required parameter 'movieId' is set
      if (movieId === undefined || movieId === null) {
        throw new Error("Missing the required parameter 'movieId' when calling reviewPost");
      }
      // verify the required parameter 'showId' is set
      if (showId === undefined || showId === null) {
        throw new Error("Missing the required parameter 'showId' when calling reviewPost");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling reviewPost");
      }
      // verify the required parameter 'rating' is set
      if (rating === undefined || rating === null) {
        throw new Error("Missing the required parameter 'rating' when calling reviewPost");
      }
      // verify the required parameter 'title' is set
      if (title === undefined || title === null) {
        throw new Error("Missing the required parameter 'title' when calling reviewPost");
      }
      // verify the required parameter 'content' is set
      if (content === undefined || content === null) {
        throw new Error("Missing the required parameter 'content' when calling reviewPost");
      }
      // verify the required parameter 'creationTime' is set
      if (creationTime === undefined || creationTime === null) {
        throw new Error("Missing the required parameter 'creationTime' when calling reviewPost");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'movie_id': movieId,'show_id': showId,'user_id': userId,'rating': rating,'title': title,'content': content,'creation_time': creationTime
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/review', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the reviewReviewIdCommentGet operation.
     * @callback moduleapi/ReviewsApi~reviewReviewIdCommentGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Comment>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all comments of a review
     * Returns a list of comments for a particular review
     * @param {Number} reviewId ID of the review
     * @param {module:api/ReviewsApi~reviewReviewIdCommentGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    reviewReviewIdCommentGet(reviewId, callback) {
      
      let postBody = null;
      // verify the required parameter 'reviewId' is set
      if (reviewId === undefined || reviewId === null) {
        throw new Error("Missing the required parameter 'reviewId' when calling reviewReviewIdCommentGet");
      }

      let pathParams = {
        'review_id': reviewId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Comment];

      return this.apiClient.callApi(
        '/review/{review_id}/comment', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the reviewReviewIdCommentPost operation.
     * @callback moduleapi/ReviewsApi~reviewReviewIdCommentPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Comment{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add comment to review
     * @param {Number} reviewId ID of the review
     * @param {Number} userId ID of the commentor
     * @param {String} content Comment to be added to review
     * @param {module:api/ReviewsApi~reviewReviewIdCommentPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    reviewReviewIdCommentPost(reviewId, userId, content, callback) {
      
      let postBody = null;
      // verify the required parameter 'reviewId' is set
      if (reviewId === undefined || reviewId === null) {
        throw new Error("Missing the required parameter 'reviewId' when calling reviewReviewIdCommentPost");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling reviewReviewIdCommentPost");
      }
      // verify the required parameter 'content' is set
      if (content === undefined || content === null) {
        throw new Error("Missing the required parameter 'content' when calling reviewReviewIdCommentPost");
      }

      let pathParams = {
        'review_id': reviewId
      };
      let queryParams = {
        'user_id': userId,'content': content
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Comment;

      return this.apiClient.callApi(
        '/review/{review_id}/comment', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the reviewReviewIdLikesPut operation.
     * @callback moduleapi/ReviewsApi~reviewReviewIdLikesPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Like/Unlike Review
     * @param {Number} reviewId ID of the review
     * @param {Number} userId ID of the user who likes the review
     * @param {module:api/ReviewsApi~reviewReviewIdLikesPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    reviewReviewIdLikesPut(reviewId, userId, callback) {
      
      let postBody = null;
      // verify the required parameter 'reviewId' is set
      if (reviewId === undefined || reviewId === null) {
        throw new Error("Missing the required parameter 'reviewId' when calling reviewReviewIdLikesPut");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling reviewReviewIdLikesPut");
      }

      let pathParams = {
        'review_id': reviewId
      };
      let queryParams = {
        'user_id': userId
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/review/{review_id}/likes', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the reviewTvshowIdGet operation.
     * @callback moduleapi/ReviewsApi~reviewTvshowIdGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Review>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all reviews of a Tvshow
     * Returns a list of reviews for a particular Tvshow
     * @param {Number} id ID of the Tvshow
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sortTypeReviews Parameter based on which reviews will be sorted
     * @param {Boolean} opts.sortOrder sorting order
     * @param {module:api/ReviewsApi~reviewTvshowIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    reviewTvshowIdGet(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling reviewTvshowIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'sort_type_reviews': opts['sortTypeReviews'],'sort_order': opts['sortOrder']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Review];

      return this.apiClient.callApi(
        '/review/tvshow/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the reviewUserUserIdGet operation.
     * @callback moduleapi/ReviewsApi~reviewUserUserIdGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Review>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all reviews of a user
     * Returns a list of reviews for a particular user
     * @param {Number} userId ID of the user
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sortTypeReviews Parameter based on which reviews will be sorted
     * @param {Boolean} opts.sortOrder sorting order
     * @param {module:api/ReviewsApi~reviewUserUserIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    reviewUserUserIdGet(userId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling reviewUserUserIdGet");
      }

      let pathParams = {
        'user_id': userId
      };
      let queryParams = {
        'sort_type_reviews': opts['sortTypeReviews'],'sort_order': opts['sortOrder']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Review];

      return this.apiClient.callApi(
        '/review/user/{user_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}