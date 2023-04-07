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

  beforeEach(function() {
    instance = new Fmd.UserApi();
  });

  describe('(package)', function() {
    describe('UserApi', function() {
      describe('profileUserIdBioPut', function() {
        it('should call profileUserIdBioPut successfully', function(done) {
          // TODO: uncomment, update parameter values for profileUserIdBioPut call
          /*

          instance.profileUserIdBioPut(userId, bio, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('profileUserIdInterestsPut', function() {
        it('should call profileUserIdInterestsPut successfully', function(done) {
          // TODO: uncomment, update parameter values for profileUserIdInterestsPut call
          /*

          instance.profileUserIdInterestsPut(userId, interests, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('profileUserIdPasswordPut', function() {
        it('should call profileUserIdPasswordPut successfully', function(done) {
          // TODO: uncomment, update parameter values for profileUserIdPasswordPut call
          /*

          instance.profileUserIdPasswordPut(userId, password, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('profileUserIdPfpPut', function() {
        it('should call profileUserIdPfpPut successfully', function(done) {
          // TODO: uncomment, update parameter values for profileUserIdPfpPut call
          /*

          instance.profileUserIdPfpPut(userId, pfp, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('profileUserIdUsernamePut', function() {
        it('should call profileUserIdUsernamePut successfully', function(done) {
          // TODO: uncomment, update parameter values for profileUserIdUsernamePut call
          /*

          instance.profileUserIdUsernamePut(userId, username, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('userSigninPost', function() {
        it('should call userSigninPost successfully', function(done) {
          // TODO: uncomment, update parameter values for userSigninPost call and complete the assertions
          /*

          instance.userSigninPost(username, password, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Fmd.User);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('userSignupPost', function() {
        it('should call userSignupPost successfully', function(done) {
          // TODO: uncomment, update parameter values for userSignupPost call and complete the assertions
          /*

          instance.userSignupPost(username, password, confirmPassword, interests, pfp, bio, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Fmd.User);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('userUserIdGet', function() {
        it('should call userUserIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for userUserIdGet call and complete the assertions
          /*

          instance.userUserIdGet(userId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Fmd.User);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('watchlistUserIdGet', function() {
        it('should call watchlistUserIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for watchlistUserIdGet call and complete the assertions
          /*

          instance.watchlistUserIdGet(userId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(Fmd.Title);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('watchlistUserIdPut', function() {
        it('should call watchlistUserIdPut successfully', function(done) {
          // TODO: uncomment, update parameter values for watchlistUserIdPut call
          /*

          instance.watchlistUserIdPut(userId, id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('watchlistUserIdRemovePut', function() {
        it('should call watchlistUserIdRemovePut successfully', function(done) {
          // TODO: uncomment, update parameter values for watchlistUserIdRemovePut call
          /*

          instance.watchlistUserIdRemovePut(userId, id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

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
