

// Calling an API using event and call backs

// create xmlhttp request object
var ajaxRequest = new XMLHttpRequest();
//add eventListner and callback function
ajaxRequest.addEventListener('readystatechange', function(r) {
  //r is the event
  //condition to check if request was succesfull. target is the request  which has staus,response ppty
  if(r.target.status === 200) {
    console.log(r.target.response);
  }
});
//open if succesfull
ajaxRequest.open("GET", "https://api.github.com/users/sirkells", true);
//send
ajaxRequest.send();
// gives a json response
