# Fmd.UserApi

All URIs are relative to *http://localhost:8080/VEDANTANEOGI_1/FMD_API3.0/3.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**profileUserIdBioPut**](UserApi.md#profileUserIdBioPut) | **PUT** /profile/{user_id}/bio | Update user bio
[**profileUserIdInterestsPut**](UserApi.md#profileUserIdInterestsPut) | **PUT** /profile/{user_id}/interests | Update interests
[**profileUserIdPasswordPut**](UserApi.md#profileUserIdPasswordPut) | **PUT** /profile/{user_id}/password | Update Password
[**profileUserIdPfpPut**](UserApi.md#profileUserIdPfpPut) | **PUT** /profile/{user_id}/pfp | Update profile picture
[**profileUserIdUsernamePut**](UserApi.md#profileUserIdUsernamePut) | **PUT** /profile/{user_id}/username | Update username
[**userSigninPost**](UserApi.md#userSigninPost) | **POST** /user/signin | Sign in user with credentials
[**userSignupPost**](UserApi.md#userSignupPost) | **POST** /user/signup | Sign Up
[**userUserIdGet**](UserApi.md#userUserIdGet) | **GET** /user/{user_id} | Get User object(user details) from user id
[**watchlistMovieRemoveUserIdPut**](UserApi.md#watchlistMovieRemoveUserIdPut) | **PUT** /watchlist/movie/remove/{user_id} | Remove Movie from user&#x27;s watchlist
[**watchlistMovieUserIdPut**](UserApi.md#watchlistMovieUserIdPut) | **PUT** /watchlist/movie/{user_id} | Add/Remove movie from watchlist
[**watchlistTvshowRemoveUserIdPut**](UserApi.md#watchlistTvshowRemoveUserIdPut) | **PUT** /watchlist/tvshow/remove/{user_id} | Remove TV show from user&#x27;s watchlist
[**watchlistTvshowUserIdPut**](UserApi.md#watchlistTvshowUserIdPut) | **PUT** /watchlist/tvshow/{user_id} | Add/Remove TV show from watchlist
[**watchlistUserIdGet**](UserApi.md#watchlistUserIdGet) | **GET** /watchlist/{user_id} | Get all titles in user watchlist

<a name="profileUserIdBioPut"></a>
# **profileUserIdBioPut**
> profileUserIdBioPut(userId, opts)

Update user bio

### Example
```javascript
import {Fmd} from 'fmd';

let apiInstance = new Fmd.UserApi();
let userId = 56; // Number | ID of the user
let opts = { 
  'body': new Fmd.UserIdBioBody() // UserIdBioBody | 
};
apiInstance.profileUserIdBioPut(userId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| ID of the user | 
 **body** | [**UserIdBioBody**](UserIdBioBody.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="profileUserIdInterestsPut"></a>
# **profileUserIdInterestsPut**
> profileUserIdInterestsPut(userId, opts)

Update interests

### Example
```javascript
import {Fmd} from 'fmd';

let apiInstance = new Fmd.UserApi();
let userId = 56; // Number | ID of the user
let opts = { 
  'body': new Fmd.UserIdInterestsBody() // UserIdInterestsBody | 
};
apiInstance.profileUserIdInterestsPut(userId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| ID of the user | 
 **body** | [**UserIdInterestsBody**](UserIdInterestsBody.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="profileUserIdPasswordPut"></a>
# **profileUserIdPasswordPut**
> profileUserIdPasswordPut(userId, opts)

Update Password

### Example
```javascript
import {Fmd} from 'fmd';

let apiInstance = new Fmd.UserApi();
let userId = 56; // Number | ID of the user
let opts = { 
  'body': new Fmd.UserIdPasswordBody() // UserIdPasswordBody | 
};
apiInstance.profileUserIdPasswordPut(userId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| ID of the user | 
 **body** | [**UserIdPasswordBody**](UserIdPasswordBody.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="profileUserIdPfpPut"></a>
# **profileUserIdPfpPut**
> profileUserIdPfpPut(userId, opts)

Update profile picture

### Example
```javascript
import {Fmd} from 'fmd';

let apiInstance = new Fmd.UserApi();
let userId = 56; // Number | ID of the user
let opts = { 
  'body': new Fmd.UserIdPfpBody() // UserIdPfpBody | 
};
apiInstance.profileUserIdPfpPut(userId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| ID of the user | 
 **body** | [**UserIdPfpBody**](UserIdPfpBody.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="profileUserIdUsernamePut"></a>
# **profileUserIdUsernamePut**
> profileUserIdUsernamePut(userId, opts)

Update username

### Example
```javascript
import {Fmd} from 'fmd';

let apiInstance = new Fmd.UserApi();
let userId = 56; // Number | ID of the user
let opts = { 
  'body': new Fmd.UserIdUsernameBody() // UserIdUsernameBody | 
};
apiInstance.profileUserIdUsernamePut(userId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| ID of the user | 
 **body** | [**UserIdUsernameBody**](UserIdUsernameBody.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="userSigninPost"></a>
# **userSigninPost**
> User userSigninPost(opts)

Sign in user with credentials

### Example
```javascript
import {Fmd} from 'fmd';

let apiInstance = new Fmd.UserApi();
let opts = { 
  'body': new Fmd.UserSigninBody() // UserSigninBody | 
};
apiInstance.userSigninPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserSigninBody**](UserSigninBody.md)|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userSignupPost"></a>
# **userSignupPost**
> User userSignupPost(opts)

Sign Up

### Example
```javascript
import {Fmd} from 'fmd';

let apiInstance = new Fmd.UserApi();
let opts = { 
  'body': new Fmd.UserSignupBody() // UserSignupBody | 
};
apiInstance.userSignupPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserSignupBody**](UserSignupBody.md)|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userUserIdGet"></a>
# **userUserIdGet**
> User userUserIdGet(userId)

Get User object(user details) from user id

### Example
```javascript
import {Fmd} from 'fmd';

let apiInstance = new Fmd.UserApi();
let userId = 56; // Number | UserId

apiInstance.userUserIdGet(userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| UserId | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="watchlistMovieRemoveUserIdPut"></a>
# **watchlistMovieRemoveUserIdPut**
> watchlistMovieRemoveUserIdPut(userId, id)

Remove Movie from user&#x27;s watchlist

### Example
```javascript
import {Fmd} from 'fmd';

let apiInstance = new Fmd.UserApi();
let userId = 56; // Number | ID of the user
let id = 56; // Number | id of the Movie to be removed from user's watchlist

apiInstance.watchlistMovieRemoveUserIdPut(userId, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| ID of the user | 
 **id** | **Number**| id of the Movie to be removed from user&#x27;s watchlist | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="watchlistMovieUserIdPut"></a>
# **watchlistMovieUserIdPut**
> watchlistMovieUserIdPut(userId, id)

Add/Remove movie from watchlist

### Example
```javascript
import {Fmd} from 'fmd';

let apiInstance = new Fmd.UserApi();
let userId = 56; // Number | ID of the user
let id = 56; // Number | ID of the movie

apiInstance.watchlistMovieUserIdPut(userId, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| ID of the user | 
 **id** | **Number**| ID of the movie | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="watchlistTvshowRemoveUserIdPut"></a>
# **watchlistTvshowRemoveUserIdPut**
> watchlistTvshowRemoveUserIdPut(userId, id)

Remove TV show from user&#x27;s watchlist

### Example
```javascript
import {Fmd} from 'fmd';

let apiInstance = new Fmd.UserApi();
let userId = 56; // Number | ID of the user
let id = 56; // Number | id of the TV show to be removed from user's watchlist

apiInstance.watchlistTvshowRemoveUserIdPut(userId, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| ID of the user | 
 **id** | **Number**| id of the TV show to be removed from user&#x27;s watchlist | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="watchlistTvshowUserIdPut"></a>
# **watchlistTvshowUserIdPut**
> watchlistTvshowUserIdPut(userId, id)

Add/Remove TV show from watchlist

### Example
```javascript
import {Fmd} from 'fmd';

let apiInstance = new Fmd.UserApi();
let userId = 56; // Number | ID of the user
let id = 56; // Number | ID of TV show

apiInstance.watchlistTvshowUserIdPut(userId, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| ID of the user | 
 **id** | **Number**| ID of TV show | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="watchlistUserIdGet"></a>
# **watchlistUserIdGet**
> [Title] watchlistUserIdGet(userId)

Get all titles in user watchlist

### Example
```javascript
import {Fmd} from 'fmd';

let apiInstance = new Fmd.UserApi();
let userId = 56; // Number | ID of the user

apiInstance.watchlistUserIdGet(userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| ID of the user | 

### Return type

[**[Title]**](Title.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

