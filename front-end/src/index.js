// base URLs and initial loading code

const BASE_URL = 'http://localhost:3000'
const USERS_URL = `${BASE_URL}/users`
const PETS_URL = `${BASE_URL}/pets`
const NEEDS_URL = `${BASE_URL}/pets`
const NEED_SELECTS_URL = `${BASE_URL}/need_selections`

const cardDeck = document.getElementById('card-deck')

document.addEventListener('DOMContentLoaded', creatingUser)
document.addEventListener('DOMContentLoaded', getUserData)

// Pet Classes

class Pet {
    constructor(name, birthday, userId, species){
        this.name = name
        this.birthday = birthday
        this.species = species
        this.userId = userId
        this.needSelects = []
    }

    createThis(){
        fetch(PETS_URL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.name, 
                birthday: this.birthday,
                species: this.species, 
                user_id: this.userId
            })
        }).then(response => response.json()).then(pet=> {
            this.petId(pet.data.id)
            console.log(pet)
            this.init()
        })
        // may need to fetch need selects here as well
        // createNeedSelectionMethod does this which is called in addNeedSelection which is called in init
        // what may potentially work is below:
        // .then(pet => this.init(pet.data.id, this.initNeedSelects))
    }

    petId(id = null){
        if(id){ this.petId = id}
        return this.petId
    }

    initNeedSelects(){
        this.initNeedSelects = [
            {title: 'Feed', description: 'Every pet needs to be fed.'},
            {title: "Vet Visit", description: "Going to the vet is necessary for a pet's health. Some species require vets with special certifications."}
        ]
        return this.initNeedSelects
    }

    async init(){
        // this instantiates the default needSelections that every pet should have by calling addNeedSelect on every item        
        for await (let needSelect of this.initNeedSelects()){
            createNeedSelection(this.petId, needSelect.title, needSelect.description)
            this.addToNeedSelects(needSelect.title, needSelect.description)
            
        }
    }

    addNeedSelectsFromJson(needSelsJson){
        // you want to set this instead of initializing when you are pulling from an already established pet
        if(needSelsJson){
        for(const needSelect of needSelsJson){
            
            const needTitle = needSelect.title
            const needDescription = needSelect.description
            this.addToNeedSelects(needTitle, needDescription)
        }}

    }

    addToNeedSelects(title, description){
        this.needSelects.push({title: title, description: description})
    }

    addNeedSel(title, description){
        // this calls the function that has the fetch request for the needselect.  This can be used for adding individual needs later.
        createNeedSelection(this.petId, title, description)
        this.addToNeedSelects(title, description)
    }
}

class AquaticSpecies extends Pet {
    initNeedSelects(){
        let newNeedSelects = [  
            {title: 'Clean Tank', description: "Changing the water in the tank and removing excess waste and algae will help marine life thrive."},
            {title: 'Check chemical levels in tank.', description: "Tank water with the wrong pH levels, or water that is too high in high in nitrates, nitrites and ammonium can harm aquatic animals."},
            {title: 'Turn On Light', description: "Animals in terrariums and aquariums also need a day and night cycle. Turn the light on to start their morning."},
            {title: 'Turn Off Light', description: "Animals in terrariums and aquariums also need a day and night cycle. Turn the light off to start their evening."}
        ]
        
        const allNeedSelects = super.initNeedSelects().concat(newNeedSelects)
        console.log(allNeedSelects)

        return allNeedSelects
    }
}

class LandAnimal extends Pet {
    initNeedSelects(){
        let newNeedSelects = [
            {title: 'Give Water', description: "Pets that don't live in water need to drink water to stay hydrated."}
        ]
        const allNeedSelects = super.initNeedSelects().concat(newNeedSelects)
        console.log(allNeedSelects)

        return allNeedSelects
    }
}

class PetWithACoat extends LandAnimal {
    initNeedSelects(){
        let newNeedSelects = [
            {title: 'Groom', description: "Grooming prevents matts from developing, prevents rashes and infection."}
        ]
        const allNeedSelects = super.initNeedSelects().concat(newNeedSelects)
        console.log(allNeedSelects)

        return allNeedSelects
    }
}

class Cat extends PetWithACoat {
    constructor(name, birthday, userId){
        super(name, birthday, userId);
        this.species = 'Cat'
        this.needSelects = []
    }

    initNeedSelects(){
        let newNeedSelects = [
            {title: 'Clean Litter Box', description: "A clean litter box helps prevent a messy house and sanitary living environment."}
        ]
        const allNeedSelects = super.initNeedSelects().concat(newNeedSelects)
        console.log(allNeedSelects)

        return allNeedSelects
    }
}

class Dog extends PetWithACoat {
    constructor(name, birthday, userId){
        super(name, birthday, userId)
        this.species = 'Dog'
        this.needSelects = []
    }

    initNeedSelects(){
        let newNeedSelects = [
            {title: 'Go On Walk', description: "Excercise is a must half for a healthy animal."}
        ]
        const allNeedSelects = super.initNeedSelects().concat(newNeedSelects)
        console.log(allNeedSelects)

        return allNeedSelects
    }
}

// creating need selections

function createNeedSelection(pet_id, title, description){
    console.log('createNeedSelection method pet_id:')
    console.log(pet_id)
    console.log('createNeedSelection method title:')
    console.log(title)
    console.log('createNeedSelection method description:')
    console.log(description)
    fetch(NEED_SELECTS_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title: title, description: description, pet_id: pet_id})
    }).then(response => response.json()).then(needSelect => {console.log(needSelect)})
    // if this is called by a for loop how do i have the dom load when complete?
}

//  Simple Fetch Requests

function getUser(userId, someFunc ){
    fetch(`${USERS_URL}/${userId}`).then(response => response.json()).then(user => {someFunc(user.data)})
}

function getNeedSel(needSelId, someFunc){
    fetch(`${NEED_SELECTS_URL}/${needSelId}`).then(response => response.json()).then(needSel => {
        someFunc(needSel.data.attributes)  
    })
}

function getPet(pet_id, someFunc){
    fetch(`${PETS_URL}/${pet_id}`).then(response => response.json()).then(pet => {
        someFunc(pet.data)
    })
}

//  Functions to manipulate DOM
function getUserData(){

    console.log("inside getUserData function")
    console.log('a')
    fetch(USERS_URL).then(response => response.json()).then(users => {
        const newArr = [... users.data]
        console.log('b')
        for(const user of newArr){createUserLi(user)}
    })
    console.log('c')
}

function creatingUser(){
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
    userLink.addEventListener('click', function(){loadUserPage(user.id)})
    userLink.addEventListener('click', selectUser)
    
}

// Tried to have event lister specifically respond to the tex rather than the whole li, so that it wouldn't interfere with deleteli, but that didn't change anything

// function createUserLi(user){
//     const userLink = document.createElement('li')
//     userLink.setAttribute('class', 'clickable')
//     userLink.setAttribute('id', `user-${user.id}`)
//     const userText = document.createElement('span')
//     userText.innerText = user.attributes.name
//     userLink.appendChild(userText)
//     document.getElementById('user-links').appendChild(userLink)
//     createDeleteLiButton('user', user.id)
//     userText.addEventListener('click', function(){loadUserPage(user.id)})
//     userLink.addEventListener('click', selectUser)
    
// }

function selectUser(event){
    console.log("Event target:")
    console.log(event.target)
    const wasSelected = document.getElementsByClassName('selected')[0]
    if(wasSelected){
        wasSelected.className = 'clickable'
        event.target.className = 'selected'
    }else{event.target.className = 'selected'}
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

function loadUserPage(userId){
    
    clearCardDeck()
    const articleTitle = document.getElementById('title')
    const dataCollect = []
    function dataCollection(data){
        dataCollect.push(data)
        const userData = dataCollect[0]
        const userAttr = userData.attributes
        const userName = userAttr.name
        const userRel = userData.relationships
        const pets = userRel.pets.data
        const petIds = []
        for(const pet of pets){
            const petId = pet.id
            petIds.push(petId)
        }
        
        articleTitle.innerText = `${userName}'s Pets`
        
        const createPetForm = document.getElementById('create-pet')
        createPetForm.removeAttribute('class')
        createPetBtnListenter()
        
        for(const petId of petIds){
            const dataCollect2 = []
            function dataExtrapolate(pet){
                makePetJSObject(pet)
            }
            const pet =  getPet(petId, dataExtrapolate)
        }          
    }
    getUser(userId, dataCollection)
}

function createPetBtnListenter(){
    const createPetBtn = document.getElementById('create-pet').getElementsByTagName('button')[0]

    createPetBtn.addEventListener('click', function(){
        const petName = document.getElementById('new-pet-name').value
        const petBirth = document.getElementById('new-pet-birthday').value
        const petClass = document.getElementById('pet-dropdown').value
        const customSpecies = document.getElementById('custom-species').value
        const petUserId = document.getElementsByClassName('selected')[0].id.split('-')[1]
        console.log('petUserId')
        console.log(petUserId)

        switch(petClass){
            case 'Dog': {
                let thisPet = new Dog(petName, petBirth, petUserId);
                console.log(thisPet);
                thisPet.createThis();
                break;
            }
            case 'Cat':{
                let thisPet = new Cat(petName, petBirth, petUserId);
                console.log(thisPet);
                thisPet.createThis();
                break;
            }
            case 'AquaticSpecies':{
                let thisPet = new AquaticSpecies(petName, petBirth, petUserId, customSpecies);
                console.log(thisPet);
                thisPet.createThis();
                break;
            }
            case 'LandAnimal':{
                let thisPet = new LandAnimal(petName, petBirth, petUserId, customSpecies);
                console.log(thisPet);
                thisPet.createThis();
                break;
            }
            case 'PetWithACoat':{
                let thisPet = new PetWithACoat(petName, petBirth, petUserId, customSpecies);
                console.log(thisPet);
                thisPet.createThis();
                break;
            }
            case 'Pet': {
                console.log('petUserId')
                console.log(petUserId)
                let thisPet = new Pet(petName, petBirth, petUserId, customSpecies);
                thisPet.createThis();
                break;
            }
        }
        // Dynamic class for the future:
        // https://stackoverflow.com/questions/34655616/create-an-instance-of-a-class-in-es6-with-a-dynamic-name

    })

}

function makePetJSObject(pet){
    const thisPetArr = []
    const attr = pet.attributes    
    const pet_id = pet.id    
    const petName = attr.name    
    const petBirth = attr.birthday
    const petSpecies = attr.species
    const petUserId = attr.user_id
    const needSelData = pet.relationships.need_selections.data

   function newPet(needSelData){
        const thisPet = new Pet (petName, petBirth, petUserId, petSpecies)
        thisPet.petId(pet_id)
        console.log('thisPet.petId')
        console.log(thisPet.petId)
        console.log(thisPet)
        createNeedSels(thisPet, needSelData)
    }

    newPet(needSelData)
}
    


function createNeedSels(thisPet, needSelData) {
    let itemsProcessed = 0
    const needSels = needSelData.forEach((data, index, array)=> {
        console.log('data', data)
        if(data.id){
            function dataExtrapolate(needSel){
                itemsProcessed++
                const title = needSel.title
                const description = needSel.description
                thisPet.addToNeedSelects(title, description)
                console.log('thisPet.needSelects', thisPet.needSelects)
                if(itemsProcessed === array.length){createPetCard(thisPet)}
            }


            getNeedSel(data.id, dataExtrapolate)
          

        } 
    })
    needSels

}


function clearCardDeck(){
    let currentList = Object.values(document.getElementsByClassName('card'))
    currentList.map(card => card.remove())
}

function createPetCard(pet){

    // Pet Card:

    const card = document.createElement('div')
    card.setAttribute('data-pet-id', pet.petId)
    // maybe will write this differently
    card.setAttribute('class', 'card')
    cardDeck.appendChild(card)

    // Pet Info:

    const petName = document.createElement('h5')
    petName.innerText = pet.name
    card.appendChild(petName)

    const petSpecies = document.createElement('p')
    petSpecies.innerText = `Species: ${pet.species}`
    card.appendChild(petSpecies)

    const petBirth = document.createElement('p')
    petBirth.innerText = `Birthday: ${pet.birthday}`
    card.appendChild(petBirth)

    const insertBreak = document.createElement('br')
    card.appendChild(insertBreak)

    // Need Selection:
        
    const selectLabel = document.createElement('label')
    selectLabel.innerText = 'Create Need From Saved Needs:'
    card.appendChild(selectLabel)

    selectLabel.appendChild(insertBreak)

    
    const needDropdown = document.createElement('select')
    needDropdown.setAttribute('id', 'need-dropdown')
    selectLabel.appendChild(needDropdown)

    const nullOption = document.createElement('option')
    nullOption.value = ""
    needDropdown.appendChild(nullOption)

    for(const needSel of pet.needSelects){
        // may need to create new variables from fetch request
        const newOption = document.createElement('option')
        newOption.value = needSel.title
        newOption.innerText = `${needSel.title}; ${needSel.description}`
        newOption.setAttribute('class', 'need-select')
        needDropdown.appendChild(newOption)
    }

    
    // const createNeedBtn = document.createElement('button')
    // createNeedBtn.innerText = "Create Need"
    // card.appendChild(createNeedBtn)


    // for future developments: 
    // form field for user to select a time and date for the need to be completed before submitting.
    // form field for custom title & description

    // const needList = 
    // this would call a list fetched of all the needs that are currently on the schedule

    // should be used with fetch for each pet found and for any new pets
    // delete pet button
    // delete li button should be usable 
    // create li buttion? 
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

