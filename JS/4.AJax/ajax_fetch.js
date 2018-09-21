// calling API using Fetch

// makes a get request for the url
fetch('https://api.github.com/users/sirkells')
//then acts like a call back function, the response is r and it has alot of features/method like status, json
//this is a promise,
  .then(function(r) {
    console.log(r.status);
    return r.json();
  })
   // if the promise is fufilled, jump to the next then. the output of the first then is the input of the next then
  .then(function(j) {
    console.log(j);
  })
