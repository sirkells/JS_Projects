
//calling API with JSON and displaying results


//step 1 create empty variables
var followers = null;
var response = null;

//step2 create function to get data from API

function getUser(name){
  // name could be anything but its the username inputed by the user
  fetch('https://api.github.com/users/' + name)
    .then(function(r) {
      //return response r
      return r.json();
    })
    // if promise is fufilled, assign assign j to response variable
    .then(function(j) {
      response = j;
      //call some functions that would be created later
      assignValues();// assigns values for each field using the json response
      getFollowers();// gets the followers data of the username

    });
}
//step 3 add events and callback to the button. 
//When clicked, it calls the function getUser created earlier which gets the value inputed by the user as name
document.getElementsByTagName('button')[0].addEventListener('click', function(r) {
  getUser(document.getElementsByTagName('input')[0].value)
});


//function for assigning values
function assignValues() {
  document.getElementById('loader').style = 'display: none';

  document.getElementById('avatar').src = response.avatar_url;
  document.getElementById('name').innerText = response.name;
  document.getElementById('username').innerText = response.login;
  document.getElementById('location').innerText = response.location;
  document.getElementById('bio').innerText = response.bio;
  document.getElementById('count').innerText = 'Followers: ' + response.followers;
}

//func to list followers
function listFollowers() {
  followers.forEach(function(f) {
    var li = document.createElement('li');
    li.innerHTML = '<a href="' + f.html_url + '">'
      + '<img src="' + f.avatar_url + '" alt="' + f.login + '"/>'
      + '</a>';
    document.getElementById('list').appendChild(li);
  });
}

// gets the followers data of the username
function getFollowers(url) {
  fetch(url)
    .then(function(r) {
      return r.json()
    })
    .then(function(f) {
      followers = f;
      listFollowers();
    });
}




