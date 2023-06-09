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
import {Title} from '../model/Title';
import {User} from '../model/User';
import {UserIdBioBody} from '../model/UserIdBioBody';
import {UserIdInterestsBody} from '../model/UserIdInterestsBody';
import {UserIdPasswordBody} from '../model/UserIdPasswordBody';
import {UserIdPfpBody} from '../model/UserIdPfpBody';
import {UserIdUsernameBody} from '../model/UserIdUsernameBody';
import {UserSigninBody} from '../model/UserSigninBody';
import {UserSignupBody} from '../model/UserSignupBody';

/**
* User service.
* @module api/UserApi
* @version 3.0.0
*/
export class UserApi {

    /**
    * Constructs a new UserApi. 
    * @alias module:api/UserApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the profileUserIdBioPut operation.
     * @callback moduleapi/UserApi~profileUserIdBioPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update user bio
     * @param {Number} userId ID of the user
     * @param {Object} opts Optional parameters
     * @param {module:model/UserIdBioBody} opts.body 
     * @param {module:api/UserApi~profileUserIdBioPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    profileUserIdBioPut(user_id, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'userId' is set
      if (user_id === undefined || user_id === null) {
        throw new Error("Missing the required parameter 'userId' when calling profileUserIdBioPut");
      }

      let pathParams = {
        'user_id': user_id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/profile/{user_id}/bio', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the profileUserIdInterestsPut operation.
     * @callback moduleapi/UserApi~profileUserIdInterestsPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update interests
     * @param {Number} userId ID of the user
     * @param {Object} opts Optional parameters
     * @param {module:model/UserIdInterestsBody} opts.body 
     * @param {module:api/UserApi~profileUserIdInterestsPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    profileUserIdInterestsPut(user_id, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'userId' is set
      if (user_id === undefined || user_id === null) {
        throw new Error("Missing the required parameter 'userId' when calling profileUserIdInterestsPut");
      }

      let pathParams = {
        'user_id': user_id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/profile/{user_id}/interests', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the profileUserIdPasswordPut operation.
     * @callback moduleapi/UserApi~profileUserIdPasswordPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Password
     * @param {Number} userId ID of the user
     * @param {Object} opts Optional parameters
     * @param {module:model/UserIdPasswordBody} opts.body 
     * @param {module:api/UserApi~profileUserIdPasswordPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    profileUserIdPasswordPut(user_id, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'userId' is set
      if (user_id === undefined || user_id === null) {
        throw new Error("Missing the required parameter 'userId' when calling profileUserIdPasswordPut");
      }

      let pathParams = {
        'user_id': user_id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/profile/{user_id}/password', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the profileUserIdPfpPut operation.
     * @callback moduleapi/UserApi~profileUserIdPfpPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update profile picture
     * @param {Number} userId ID of the user
     * @param {Object} opts Optional parameters
     * @param {module:model/UserIdPfpBody} opts.body 
     * @param {module:api/UserApi~profileUserIdPfpPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    profileUserIdPfpPut(userId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling profileUserIdPfpPut");
      }

      let pathParams = {
        'user_id': userId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/profile/{user_id}/pfp', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the profileUserIdUsernamePut operation.
     * @callback moduleapi/UserApi~profileUserIdUsernamePutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update username
     * @param {Number} userId ID of the user
     * @param {Object} opts Optional parameters
     * @param {module:model/UserIdUsernameBody} opts.body 
     * @param {module:api/UserApi~profileUserIdUsernamePutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    profileUserIdUsernamePut(userId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling profileUserIdUsernamePut");
      }

      let pathParams = {
        'user_id': userId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/profile/{user_id}/username', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the userSigninPost operation.
     * @callback moduleapi/UserApi~userSigninPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sign in user with credentials
     * @param {Object} opts Optional parameters
     * @param {module:model/UserSigninBody} opts.body 
     * @param {module:api/UserApi~userSigninPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    userSigninPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = User;

      return this.apiClient.callApi(
        '/user/signin', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the userSignupPost operation.
     * @callback moduleapi/UserApi~userSignupPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sign Up
     * @param {Object} opts Optional parameters
     * @param {module:model/UserSignupBody} opts.body 
     * @param {module:api/UserApi~userSignupPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    userSignupPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = User;

      return this.apiClient.callApi(
        '/user/signup', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the userUserIdGet operation.
     * @callback moduleapi/UserApi~userUserIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get User object(user details) from user id
     * @param {Number} userId UserId
     * @param {module:api/UserApi~userUserIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    userUserIdGet(userId, callback) {
      
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling userUserIdGet");
      }

      let pathParams = {
        'user_id': userId
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
      let returnType = User;

      return this.apiClient.callApi(
        '/user/{user_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the watchlistMovieRemoveUserIdPut operation.
     * @callback moduleapi/UserApi~watchlistMovieRemoveUserIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove Movie from user&#x27;s watchlist
     * @param {Number} userId ID of the user
     * @param {Number} id id of the Movie to be removed from user&#x27;s watchlist
     * @param {module:api/UserApi~watchlistMovieRemoveUserIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    watchlistMovieRemoveUserIdPut(userId, id, callback) {
      
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling watchlistMovieRemoveUserIdPut");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling watchlistMovieRemoveUserIdPut");
      }

      let pathParams = {
        'user_id': userId
      };
      let queryParams = {
        'id': id
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
        '/watchlist/movie/remove/{user_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the watchlistMovieUserIdPut operation.
     * @callback moduleapi/UserApi~watchlistMovieUserIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add/Remove movie from watchlist
     * @param {Number} userId ID of the user
     * @param {Number} id ID of the movie
     * @param {module:api/UserApi~watchlistMovieUserIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    watchlistMovieUserIdPut(user_id, id, callback) {
      
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (user_id === undefined || user_id === null) {
        throw new Error("Missing the required parameter 'user_id' when calling watchlistMovieUserIdPut");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling watchlistMovieUserIdPut");
      }

      let pathParams = {
        'user_id': user_id
      };
      let queryParams = {
        'id': id
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
        '/watchlist/movie/{user_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the watchlistTvshowRemoveUserIdPut operation.
     * @callback moduleapi/UserApi~watchlistTvshowRemoveUserIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove TV show from user&#x27;s watchlist
     * @param {Number} userId ID of the user
     * @param {Number} id id of the TV show to be removed from user&#x27;s watchlist
     * @param {module:api/UserApi~watchlistTvshowRemoveUserIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    watchlistTvshowRemoveUserIdPut(userId, id, callback) {
      
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling watchlistTvshowRemoveUserIdPut");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling watchlistTvshowRemoveUserIdPut");
      }

      let pathParams = {
        'user_id': userId
      };
      let queryParams = {
        'id': id
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
        '/watchlist/tvshow/remove/{user_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the watchlistTvshowUserIdPut operation.
     * @callback moduleapi/UserApi~watchlistTvshowUserIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add/Remove TV show from watchlist
     * @param {Number} userId ID of the user
     * @param {Number} id ID of TV show
     * @param {module:api/UserApi~watchlistTvshowUserIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    watchlistTvshowUserIdPut(userId, id, callback) {
      
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling watchlistTvshowUserIdPut");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling watchlistTvshowUserIdPut");
      }

      let pathParams = {
        'user_id': userId
      };
      let queryParams = {
        'id': id
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
        '/watchlist/tvshow/{user_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the watchlistUserIdGet operation.
     * @callback moduleapi/UserApi~watchlistUserIdGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Title>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all titles in user watchlist
     * @param {Number} userId ID of the user
     * @param {module:api/UserApi~watchlistUserIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    watchlistUserIdGet(userId, callback) {
      
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling watchlistUserIdGet");
      }

      let pathParams = {
        'user_id': userId
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
      let returnType = [Title];

      return this.apiClient.callApi(
        '/watchlist/{user_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}