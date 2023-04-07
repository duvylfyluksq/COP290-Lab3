# Fmd.ReviewsApi

All URIs are relative to *http://localhost:8080/VEDANTANEOGI_1/FMD_API3.0/3.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reviewPost**](ReviewsApi.md#reviewPost) | **POST** /review | Add a new review
[**reviewReviewIdCommentGet**](ReviewsApi.md#reviewReviewIdCommentGet) | **GET** /review/{review_id}/comment | Get all comments of a review
[**reviewReviewIdCommentPost**](ReviewsApi.md#reviewReviewIdCommentPost) | **POST** /review/{review_id}/comment | Add comment to review
[**reviewReviewIdLikesPut**](ReviewsApi.md#reviewReviewIdLikesPut) | **PUT** /review/{review_id}/likes | Like/Unlike Review
[**reviewTitleIdGet**](ReviewsApi.md#reviewTitleIdGet) | **GET** /review/title/{id} | Get all reviews of a title
[**reviewUserUserIdGet**](ReviewsApi.md#reviewUserUserIdGet) | **GET** /review/user/{user_id} | Get all reviews of a user

<a name="reviewPost"></a>
# **reviewPost**
> reviewPost(movieId, showId, userId, rating, title, content, creationTime)

Add a new review

### Example
```javascript
import {Fmd} from 'fmd';

let apiInstance = new Fmd.ReviewsApi();
let movieId = "movieId_example"; // String | ID of the movie for which the review is being posted(null if TVShow)
let showId = "showId_example"; // String | ID of the TVShow for which the review is being posted(null if Movie)
let userId = 56; // Number | ID of the user who is posting the review
let rating = 56; // Number | rating by the user
let title = "title_example"; // String | the review title of the review to be added
let content = "content_example"; // String | content of the review
let creationTime = new Date("2013-10-20T19:20:30+01:00"); // Date | creation time

apiInstance.reviewPost(movieId, showId, userId, rating, title, content, creationTime, (error, data, response) => {
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
 **movieId** | **String**| ID of the movie for which the review is being posted(null if TVShow) | 
 **showId** | **String**| ID of the TVShow for which the review is being posted(null if Movie) | 
 **userId** | **Number**| ID of the user who is posting the review | 
 **rating** | **Number**| rating by the user | 
 **title** | **String**| the review title of the review to be added | 
 **content** | **String**| content of the review | 
 **creationTime** | **Date**| creation time | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="reviewReviewIdCommentGet"></a>
# **reviewReviewIdCommentGet**
> [Comment] reviewReviewIdCommentGet(reviewId)

Get all comments of a review

Returns a list of comments for a particular review

### Example
```javascript
import {Fmd} from 'fmd';

let apiInstance = new Fmd.ReviewsApi();
let reviewId = 56; // Number | ID of the review

apiInstance.reviewReviewIdCommentGet(reviewId, (error, data, response) => {
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
 **reviewId** | **Number**| ID of the review | 

### Return type

[**[Comment]**](Comment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="reviewReviewIdCommentPost"></a>
# **reviewReviewIdCommentPost**
> Comment reviewReviewIdCommentPost(reviewId, userId, content)

Add comment to review

### Example
```javascript
import {Fmd} from 'fmd';

let apiInstance = new Fmd.ReviewsApi();
let reviewId = 56; // Number | ID of the review
let userId = 56; // Number | ID of the commentor
let content = "content_example"; // String | Comment to be added to review

apiInstance.reviewReviewIdCommentPost(reviewId, userId, content, (error, data, response) => {
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
 **reviewId** | **Number**| ID of the review | 
 **userId** | **Number**| ID of the commentor | 
 **content** | **String**| Comment to be added to review | 

### Return type

[**Comment**](Comment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="reviewReviewIdLikesPut"></a>
# **reviewReviewIdLikesPut**
> reviewReviewIdLikesPut(reviewId, userId)

Like/Unlike Review

### Example
```javascript
import {Fmd} from 'fmd';

let apiInstance = new Fmd.ReviewsApi();
let reviewId = 56; // Number | ID of the review
let userId = 56; // Number | ID of the user who likes the review

apiInstance.reviewReviewIdLikesPut(reviewId, userId, (error, data, response) => {
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
 **reviewId** | **Number**| ID of the review | 
 **userId** | **Number**| ID of the user who likes the review | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="reviewTitleIdGet"></a>
# **reviewTitleIdGet**
> [Review] reviewTitleIdGet(id, opts)

Get all reviews of a title

Returns a list of reviews for a particular title

### Example
```javascript
import {Fmd} from 'fmd';

let apiInstance = new Fmd.ReviewsApi();
let id = "id_example"; // String | ID of the Movie or TVShow
let opts = { 
  'sortTypeReviews': "sortTypeReviews_example", // String | Parameter based on which reviews will be sorted
  'sortOrder': true // Boolean | sorting order
};
apiInstance.reviewTitleIdGet(id, opts, (error, data, response) => {
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
 **id** | **String**| ID of the Movie or TVShow | 
 **sortTypeReviews** | **String**| Parameter based on which reviews will be sorted | [optional] 
 **sortOrder** | **Boolean**| sorting order | [optional] 

### Return type

[**[Review]**](Review.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="reviewUserUserIdGet"></a>
# **reviewUserUserIdGet**
> [Review] reviewUserUserIdGet(userId, opts)

Get all reviews of a user

Returns a list of reviews for a particular user

### Example
```javascript
import {Fmd} from 'fmd';

let apiInstance = new Fmd.ReviewsApi();
let userId = 56; // Number | ID of the user
let opts = { 
  'sortTypeReviews': "sortTypeReviews_example", // String | Parameter based on which reviews will be sorted
  'sortOrder': true // Boolean | sorting order
};
apiInstance.reviewUserUserIdGet(userId, opts, (error, data, response) => {
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
 **sortTypeReviews** | **String**| Parameter based on which reviews will be sorted | [optional] 
 **sortOrder** | **Boolean**| sorting order | [optional] 

### Return type

[**[Review]**](Review.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

