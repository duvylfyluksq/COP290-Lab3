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
     * @param {String} bio New bio
     * @param {module:api/UserApi~profileUserIdBioPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    profileUserIdBioPut(userId, bio, callback) {
      
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling profileUserIdBioPut");
      }
      // verify the required parameter 'bio' is set
      if (bio === undefined || bio === null) {
        throw new Error("Missing the required parameter 'bio' when calling profileUserIdBioPut");
      }

      let pathParams = {
        'user_id': userId
      };
      let queryParams = {
        'bio': bio
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
     * @param {Array.<String>} interests New Profile Picture
     * @param {module:api/UserApi~profileUserIdInterestsPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    profileUserIdInterestsPut(userId, interests, callback) {
      
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling profileUserIdInterestsPut");
      }
      // verify the required parameter 'interests' is set
      if (interests === undefined || interests === null) {
        throw new Error("Missing the required parameter 'interests' when calling profileUserIdInterestsPut");
      }

      let pathParams = {
        'user_id': userId
      };
      let queryParams = {
        'interests': this.apiClient.buildCollectionParam(interests, 'multi')
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
     * @param {String} password New password
     * @param {module:api/UserApi~profileUserIdPasswordPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    profileUserIdPasswordPut(userId, password, callback) {
      
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling profileUserIdPasswordPut");
      }
      // verify the required parameter 'password' is set
      if (password === undefined || password === null) {
        throw new Error("Missing the required parameter 'password' when calling profileUserIdPasswordPut");
      }

      let pathParams = {
        'user_id': userId
      };
      let queryParams = {
        'password': password
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
     * @param {String} pfp New Profile Picture
     * @param {module:api/UserApi~profileUserIdPfpPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    profileUserIdPfpPut(userId, pfp, callback) {
      
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling profileUserIdPfpPut");
      }
      // verify the required parameter 'pfp' is set
      if (pfp === undefined || pfp === null) {
        throw new Error("Missing the required parameter 'pfp' when calling profileUserIdPfpPut");
      }

      let pathParams = {
        'user_id': userId
      };
      let queryParams = {
        'pfp': pfp
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
     * @param {String} username New username
     * @param {module:api/UserApi~profileUserIdUsernamePutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    profileUserIdUsernamePut(userId, username, callback) {
      
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling profileUserIdUsernamePut");
      }
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling profileUserIdUsernamePut");
      }

      let pathParams = {
        'user_id': userId
      };
      let queryParams = {
        'username': username
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
      )
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
    /**
     * Callback function to receive the result of the watchlistUserIdPut operation.
     * @callback moduleapi/UserApi~watchlistUserIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add/Remove title from watchlist
     * @param {Number} userId ID of the user
     * @param {String} id id of TVShow/Movie to be added to the watchlist
     * @param {module:api/UserApi~watchlistUserIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    watchlistUserIdPut(userId, id, callback) {
      
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling watchlistUserIdPut");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling watchlistUserIdPut");
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
        '/watchlist/{user_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the watchlistUserIdRemovePut operation.
     * @callback moduleapi/UserApi~watchlistUserIdRemovePutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove title from user&#x27;s watchlist
     * @param {Number} userId ID of the user
     * @param {String} id id of the Title to be removed from user&#x27;s watchlist
     * @param {module:api/UserApi~watchlistUserIdRemovePutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    watchlistUserIdRemovePut(userId, id, callback) {
      
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling watchlistUserIdRemovePut");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling watchlistUserIdRemovePut");
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
        '/watchlist/{user_id}/remove', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}