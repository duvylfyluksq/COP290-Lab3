# Fmd.UserApi

All URIs are relative to *https://virtserver.swaggerhub.com/VEDANTANEOGI_1/FMD_API3.0/3.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**profileUserIdBioPut**](UserApi.md#profileUserIdBioPut) | **PUT** /profile/{user_id}/bio | Update user bio
[**profileUserIdInterestsPut**](UserApi.md#profileUserIdInterestsPut) | **PUT** /profile/{user_id}/interests | Update interests
[**profileUserIdPasswordPut**](UserApi.md#profileUserIdPasswordPut) | **PUT** /profile/{user_id}/password | Update Password
[**profileUserIdPfpPut**](UserApi.md#profileUserIdPfpPut) | **PUT** /profile/{user_id}/pfp | Update profile picture
[**profileUserIdUsernamePut**](UserApi.md#profileUserIdUsernamePut) | **PUT** /profile/{user_id}/username | Update username
[**userSigninPost**](UserApi.md#userSigninPost) | **POST** /user/signin | Sign in user with credentials
[**userSignupPost**](UserApi.md#userSignupPost) | **POST** /user/signup | Create a new user account
[**userUserIdGet**](UserApi.md#userUserIdGet) | **GET** /user/{user_id} | Get User object(user details) from user id
[**watchlistUserIdGet**](UserApi.md#watchlistUserIdGet) | **GET** /watchlist/{user_id} | Get all titles in user watchlist
[**watchlistUserIdPut**](UserApi.md#watchlistUserIdPut) | **PUT** /watchlist/{user_id} | Add/Remove title from watchlist
[**watchlistUserIdRemovePut**](UserApi.md#watchlistUserIdRemovePut) | **PUT** /watchlist/{user_id}/remove | Remove title from user&#x27;s watchlist

<a name="profileUserIdBioPut"></a>
# **profileUserIdBioPut**
> profileUserIdBioPut(userId, bio)

Update user bio

### Example
```javascript
import {Fmd} from 'fmd';

let apiInstance = new Fmd.UserApi();
let userId = 56; // Number | ID of the user
let bio = "bio_example"; // String | New bio

apiInstance.profileUserIdBioPut(userId, bio, (error, data, response) => {
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
 **bio** | **String**| New bio | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="profileUserIdInterestsPut"></a>
# **profileUserIdInterestsPut**
> profileUserIdInterestsPut(userId, interests)

Update interests

### Example
```javascript
import {Fmd} from 'fmd';

let apiInstance = new Fmd.UserApi();
let userId = 56; // Number | ID of the user
let interests = ["interests_example"]; // [String] | New Profile Picture

apiInstance.profileUserIdInterestsPut(userId, interests, (error, data, response) => {
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
 **interests** | [**[String]**](String.md)| New Profile Picture | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="profileUserIdPasswordPut"></a>
# **profileUserIdPasswordPut**
> profileUserIdPasswordPut(userId, password)

Update Password

### Example
```javascript
import {Fmd} from 'fmd';

let apiInstance = new Fmd.UserApi();
let userId = 56; // Number | ID of the user
let password = "password_example"; // String | New password

apiInstance.profileUserIdPasswordPut(userId, password, (error, data, response) => {
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
 **password** | **String**| New password | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="profileUserIdPfpPut"></a>
# **profileUserIdPfpPut**
> profileUserIdPfpPut(userId, pfp)

Update profile picture

### Example
```javascript
import {Fmd} from 'fmd';

let apiInstance = new Fmd.UserApi();
let userId = 56; // Number | ID of the user
let pfp = "pfp_example"; // String | New Profile Picture

apiInstance.profileUserIdPfpPut(userId, pfp, (error, data, response) => {
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
 **pfp** | **String**| New Profile Picture | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="profileUserIdUsernamePut"></a>
# **profileUserIdUsernamePut**
> profileUserIdUsernamePut(userId, username)

Update username

### Example
```javascript
import {Fmd} from 'fmd';

let apiInstance = new Fmd.UserApi();
let userId = 56; // Number | ID of the user
let username = "username_example"; // String | New username

apiInstance.profileUserIdUsernamePut(userId, username, (error, data, response) => {
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
 **username** | **String**| New username | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="userSigninPost"></a>
# **userSigninPost**
> User userSigninPost(username, password)

Sign in user with credentials

### Example
```javascript
import {Fmd} from 'fmd';

let apiInstance = new Fmd.UserApi();
let username = "username_example"; // String | Username
let password = "password_example"; // String | Password

apiInstance.userSigninPost(username, password, (error, data, response) => {
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
 **username** | **String**| Username | 
 **password** | **String**| Password | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="userSignupPost"></a>
# **userSignupPost**
> User userSignupPost(username, password, confirmPassword, interests, pfp, bio)

Create a new user account

### Example
```javascript
import {Fmd} from 'fmd';

let apiInstance = new Fmd.UserApi();
let username = "username_example"; // String | Username
let password = "password_example"; // String | Password
let confirmPassword = "confirmPassword_example"; // String | Confirm Password
let interests = ["interests_example"]; // [String] | Favourite Genres
let pfp = "pfp_example"; // String | profile picture
let bio = "bio_example"; // String | about user

apiInstance.userSignupPost(username, password, confirmPassword, interests, pfp, bio, (error, data, response) => {
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
 **username** | **String**| Username | 
 **password** | **String**| Password | 
 **confirmPassword** | **String**| Confirm Password | 
 **interests** | [**[String]**](String.md)| Favourite Genres | 
 **pfp** | **String**| profile picture | 
 **bio** | **String**| about user | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
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

<a name="watchlistUserIdPut"></a>
# **watchlistUserIdPut**
> watchlistUserIdPut(userId, id)

Add/Remove title from watchlist

### Example
```javascript
import {Fmd} from 'fmd';

let apiInstance = new Fmd.UserApi();
let userId = 56; // Number | ID of the user
let id = "id_example"; // String | id of TVShow/Movie to be added to the watchlist

apiInstance.watchlistUserIdPut(userId, id, (error, data, response) => {
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
 **id** | **String**| id of TVShow/Movie to be added to the watchlist | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="watchlistUserIdRemovePut"></a>
# **watchlistUserIdRemovePut**
> watchlistUserIdRemovePut(userId, id)

Remove title from user&#x27;s watchlist

### Example
```javascript
import {Fmd} from 'fmd';

let apiInstance = new Fmd.UserApi();
let userId = 56; // Number | ID of the user
let id = "id_example"; // String | id of the Title to be removed from user's watchlist

apiInstance.watchlistUserIdRemovePut(userId, id, (error, data, response) => {
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
 **id** | **String**| id of the Title to be removed from user&#x27;s watchlist | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

