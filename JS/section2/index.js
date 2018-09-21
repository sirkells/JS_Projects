// Getting an Element()
document.getElementById('head') // displays all id with head
document.getElementsByClassName('para')//displays all class
document.getElementsByTagName('p')//displays all Tag
document.querySelector('.para')//displays the first one
document.querySelectorAll('.para')//displays all

document.querySelectorAll('.para')[0].innerHTML= 'Changed it' //changing the text



//Creating Things in the Documents
document.createElement()// to create an element

var p = document.createElement('p')
p.innerText = "This is me"
document.body.appendChild(p)



document.createAttribute() //to create attributes like id and class, styles etc
var att = document.createAttribute('id')
att.value = "created"
p.setAttributeNode(att) //sets the new p tag to have an id called created
//<p id="created">This is it</p>


//***** Section 2:  EVENTS  */
//Events are occurences that happens in the browser like click, hover etc

