const BASE_URL = 'http://localhost:3000'
const USERS_URL = `${BASE_URL}/users`
const PETS_URL = `${BASE_URL}/pets`
const NEEDS_URL = `${BASE_URL}/pets`
const NEED_SELECTS_URL = `${BASE_URL}/need_selections`

document.addEventListener('DOMContentLoaded', creatingUser)
document.addEventListener('DOMContentLoaded', getUserData)


function getUserData(){

    // fetch(USERS_URL).then(response => response.json()).then(users => {for(const user in users.data){console.log(user)}})  I don't understant why but this version only gave me the index number when requested console.log(user)
    
    fetch(USERS_URL).then(response => response.json()).then(users => {
        const newArr = [... users.data]
        for(const user of newArr){createUserLi(user)}
    })
}

function creatingUser(){
    console.log('inside the createUser method!')
    const createUserForm = document.querySelector('nav').querySelector('form')
    const createButton = createUserForm.querySelector('button')
    
    createButton.addEventListener('click', function(event){
    
    event.preventDefault(); 

    const inputText = createUserForm.getElementsByTagName('input')[0].value

   
    fetch(USERS_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name: inputText})
    }).then(response => response.json()).then(user => createUserLi(user.data))
    })

}

function createUserLi(user){
    const userLink = document.createElement('li')
    userLink.setAttribute('class', 'clickable')
    userLink.setAttribute('id', `user-${user.id}`)
    userLink.innerText = user.attributes.name
    document.getElementById('user-links').appendChild(userLink)

    createDeleteLiButton('user', user.id)
}

function createDeleteLiButton(modelName, itemId){
    const deleteLiBtn = document.createElement('button')
    deleteLiBtn.setAttribute('class', 'delete-Li')
    deleteLiBtn.setAttribute('item-id', itemId )
    deleteLiBtn.innerText = 'x'
    document.getElementById(`${modelName}-${itemId}`).appendChild(deleteLiBtn)
    deleteLiBtn.addEventListener('click', deleteLi)
}

function deleteLi(event){
    const liToDelete = event.target.parentNode
    const liId = liToDelete.id
    const liModel = liId.split('-')[0]
    const itemId = liId.split('-')[1]
    
    fetch(`${BASE_URL}/${liModel}s/${itemId}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    }).then(response => response.json()).then(liToDelete
        .remove())
}
        

// Initial fetch request:
// on document load, make fetch request to load 
// users and grab user pet ids,
//  then load pets(card title with attributes listed below) and each pet's needs(li) and each pet's need selections(drop down menus)

// Post requests:
// create new user
// create new pet
// create new need 
// create new need selection
// instantiate a need selection with a ' ' option when nothing is selected -> update back-end create method to do this.
// when creating a need from need selection, update back-end so that it doesn't register ' ' as an option for creating a need.
// to make things easier, a need selection needs to be made in order to create a need.
// need selection addEventListener.  When create need is selected a create form is unhidden and then rehidden after creation (event listner on submit button.

// Patch requests:
// patch need selections
// patch pet 

// need  addEventListiner -> select need from drop down menu. on click of edit button by menu an edit form is added to the DOM below the pet to be edited. 

// pet addEventListener -> on click of edit button by pet, form is unhidden then rehidden after creation (event listener on submit button).

// Delete requests:
// button next to needs
// button next need selection drop down menu 
// button next to pet
// button at top of users' article page for user

