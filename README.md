# React-native-task-vois

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run start
```
 
### Generate Android & IOS folder
```
expo eject
```
 
 
 
## HTTP Requests

We use [axios](https://github.com/axios/axios) to make http requests.

In `api` directory, you will find two files:

- `ApiService.js`
 

`ApiService.js` has one function `ApiService` which receives the request and calls axios method based on this request.

To make a http request you need to make these steps:

1. Make a function that return the request object. request object contains these properties:
   - `method` **required**: request method, such as `GET`, `POST`, ...etc. You will find these methods in the methods object in `api/index.js`
   - `url` **required**: the api url like `/api/login`,
   - `config` **optional**: this is an object have two properties:
     - `data`: this is the request body in case of `POST`, `PUT`, and `DELETE` requests.
     - `params`: this is the query parameters object in case of `GET` requests.

**Important** the request function have this naming convention `getxxxRequest` or `postxxxRequest`. As it's a function that will return a request.

2. Call `ApiService` on the request function call.

Example

```js

// get request example in api/login.js
export const postLoginRequest = (data) => ({
  method: 'get',
  url: '/api/login',
  config: {
    data
  }
});

export const getLoadBooksRequest = (params) => ({
  method: "get",
  url: '/api/books',
  config: {
     params
  }
});
// In the file we need to execute this request:
import { postLoginRequest } from "@/api/register";
  const body = {
    email: "test@gmail.com",
    password: "123456", 
  };
ApiService(postLoginRequest(body))
  .then(response => {
    // ...
  })
  .catch(error => {
    // ...
  });
  ---------------------------------
  import { getLoadBooksRequest } from "@/api/register";
  const params = { };
ApiService(getLoadBooksRequest(params))
  .then(response => {
    // ...
  })
  .catch(error => {
    // ...
  });
```

**_Why we do this?_**

`ApiService` has logic inside it, for example, it will send the token with every request, so we don't need to send it ourselves. Also, it will stringify the `params` if you send with `GET` requests.

Generally, we can add/remove any behavior we need to do with the requests in one place.

---

