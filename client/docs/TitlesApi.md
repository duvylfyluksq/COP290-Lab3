# Fmd.TitlesApi

All URIs are relative to *http://localhost:8080/VEDANTANEOGI_1/FMD_API3.0/3.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**movieGet**](TitlesApi.md#movieGet) | **GET** /movie | Sort/Filter movies
[**searchGet**](TitlesApi.md#searchGet) | **GET** /search | 
[**titleGet**](TitlesApi.md#titleGet) | **GET** /title | Sort/Filter Movies and TV Shows
[**titleIdGet**](TitlesApi.md#titleIdGet) | **GET** /title/{id} | Get information about a Movie/TV Show
[**tvshowGet**](TitlesApi.md#tvshowGet) | **GET** /tvshow | Sort/Filter TV Shows

<a name="movieGet"></a>
# **movieGet**
> [Movie] movieGet(opts)

Sort/Filter movies

### Example
```javascript
import {Fmd} from 'fmd';

let apiInstance = new Fmd.TitlesApi();
let opts = { 
  'genre': ["genre_example"], // [String] | Genres to be filtered by
  'sortTypeBrowse': "sortTypeBrowse_example", // String | Parameter based on which titles will be sorted
  'sortOrder': true // Boolean | sorting order
};
apiInstance.movieGet(opts, (error, data, response) => {
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
 **genre** | [**[String]**](String.md)| Genres to be filtered by | [optional] 
 **sortTypeBrowse** | **String**| Parameter based on which titles will be sorted | [optional] 
 **sortOrder** | **Boolean**| sorting order | [optional] 

### Return type

[**[Movie]**](Movie.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchGet"></a>
# **searchGet**
> [Title] searchGet(expression)



Obtain all movies/shows whose prefix matches the input expression

### Example
```javascript
import {Fmd} from 'fmd';

let apiInstance = new Fmd.TitlesApi();
let expression = "expression_example"; // String | the expression to be searched

apiInstance.searchGet(expression, (error, data, response) => {
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
 **expression** | **String**| the expression to be searched | 

### Return type

[**[Title]**](Title.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="titleGet"></a>
# **titleGet**
> [Title] titleGet(opts)

Sort/Filter Movies and TV Shows

### Example
```javascript
import {Fmd} from 'fmd';

let apiInstance = new Fmd.TitlesApi();
let opts = { 
  'genre': ["genre_example"], // [String] | Genres to be filtered by
  'sortTypeBrowse': "sortTypeBrowse_example", // String | Parameter based on which titles will be sorted
  'sortOrder': true // Boolean | sorting order
};
apiInstance.titleGet(opts, (error, data, response) => {
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
 **genre** | [**[String]**](String.md)| Genres to be filtered by | [optional] 
 **sortTypeBrowse** | **String**| Parameter based on which titles will be sorted | [optional] 
 **sortOrder** | **Boolean**| sorting order | [optional] 

### Return type

[**[Title]**](Title.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="titleIdGet"></a>
# **titleIdGet**
> Title titleIdGet(id)

Get information about a Movie/TV Show

Returns information about a particular Movie/TV Show, including its title, genre, director, actors, release date, and description.

### Example
```javascript
import {Fmd} from 'fmd';

let apiInstance = new Fmd.TitlesApi();
let id = "id_example"; // String | ID of the Movie or TV Show

apiInstance.titleIdGet(id, (error, data, response) => {
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
 **id** | **String**| ID of the Movie or TV Show | 

### Return type

[**Title**](Title.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tvshowGet"></a>
# **tvshowGet**
> [Tvshow] tvshowGet(opts)

Sort/Filter TV Shows

### Example
```javascript
import {Fmd} from 'fmd';

let apiInstance = new Fmd.TitlesApi();
let opts = { 
  'genre': ["genre_example"], // [String] | Genres to be filtered by
  'sortTypeBrowse': "sortTypeBrowse_example", // String | Parameter based on which titles will be sorted
  'sortOrder': true // Boolean | sorting order
};
apiInstance.tvshowGet(opts, (error, data, response) => {
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
 **genre** | [**[String]**](String.md)| Genres to be filtered by | [optional] 
 **sortTypeBrowse** | **String**| Parameter based on which titles will be sorted | [optional] 
 **sortOrder** | **Boolean**| sorting order | [optional] 

### Return type

[**[Tvshow]**](Tvshow.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

