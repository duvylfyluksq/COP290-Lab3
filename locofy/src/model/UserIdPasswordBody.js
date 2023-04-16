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

/**
 * The UserIdPasswordBody model module.
 * @module model/UserIdPasswordBody
 * @version 3.0.0
 */
export class UserIdPasswordBody {
  /**
   * Constructs a new <code>UserIdPasswordBody</code>.
   * @alias module:model/UserIdPasswordBody
   * @class
   * @param password {String} 
   */
  constructor(password) {
    this.password = password;
  }

  /**
   * Constructs a <code>UserIdPasswordBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserIdPasswordBody} obj Optional instance to populate.
   * @return {module:model/UserIdPasswordBody} The populated <code>UserIdPasswordBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UserIdPasswordBody();
      if (data.hasOwnProperty('password'))
        obj.password = ApiClient.convertToType(data['password'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} password
 */
UserIdPasswordBody.prototype.password = undefined;
