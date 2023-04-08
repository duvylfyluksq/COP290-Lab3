# Fmd.TitlesApi

All URIs are relative to *http://localhost:8080/VEDANTANEOGI_1/FMD_API3.0/3.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**movieGet**](TitlesApi.md#movieGet) | **GET** /movie | Sort/Filter movies
[**movieIdGet**](TitlesApi.md#movieIdGet) | **GET** /movie/{id} | Get information about a Movie
[**searchGet**](TitlesApi.md#searchGet) | **GET** /search | 
[**titleGet**](TitlesApi.md#titleGet) | **GET** /title | Sort/Filter Movies and TV Shows
[**tvshowGet**](TitlesApi.md#tvshowGet) | **GET** /tvshow | Sort/Filter TV Shows
[**tvshowIdGet**](TitlesApi.md#tvshowIdGet) | **GET** /tvshow/{id} | Get information about a TV Show

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

<a name="movieIdGet"></a>
# **movieIdGet**
> Movie movieIdGet(id)

Get information about a Movie

Returns information about a particular Movie, including its title, genre, director, actors, release date, and description.

### Example
```javascript
import {Fmd} from 'fmd';

let apiInstance = new Fmd.TitlesApi();
let id = 56; // Number | ID of the Movie

apiInstance.movieIdGet(id, (error, data, response) => {
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
 **id** | **Number**| ID of the Movie | 

### Return type

[**Movie**](Movie.md)

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

<a name="tvshowIdGet"></a>
# **tvshowIdGet**
> Tvshow tvshowIdGet(id)

Get information about a TV Show

Returns information about a particular TV Show, including its title, genre, director, actors, release date, and description.

### Example
```javascript
import {Fmd} from 'fmd';

let apiInstance = new Fmd.TitlesApi();
let id = 56; // Number | ID of the TV Show

apiInstance.tvshowIdGet(id, (error, data, response) => {
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
 **id** | **Number**| ID of the TV Show | 

### Return type

[**Tvshow**](Tvshow.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

