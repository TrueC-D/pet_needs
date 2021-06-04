// base URLs and initial loading code

const BASE_URL = 'http://localhost:3000'
const USERS_URL = `${BASE_URL}/users`
const PETS_URL = `${BASE_URL}/pets`
const NEEDS_URL = `${BASE_URL}/pets`
const NEED_SELECTS_URL = `${BASE_URL}/need_selections`

document.addEventListener('DOMContentLoaded', creatingUser)
document.addEventListener('DOMContentLoaded', getUserData)

// creating need selections

function createNeedSelection(pet_id, title, description){
    fetch(NEED_SELECTS_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title: title, description: description, pet_id: pet_id})
    }).then(response => response.json()).then(needSelect => console.log(needSelect))
    // .then(needSelect => {
        // const needSelectId = needSelect.data.id, 
        // this.init(needSelectId)
    // })

}


// creating a pet
// const petTypes = {Pet: Pet, AquaticSpecies: AquaticSpecies, LandAnimal: LandAnimal, PetWithACoat: PetWithACoat, Cat: Cat, Dog: Dog }

// function createPet(type = Pet, name, birthday, species, userId){
//     let newPet = new petTypes[type](nexitame, birthday, species, userId)
// }

// let newPet = new Pet 

// classes of pets

//fetch should be a static function of pet that is initialized before the constructor.  See these links for more details: https://stackoverflow.com/questions/39394945/es6-classes-fetch-in-the-parent-class-refer-to-resolved-fetch-in-child-class ,  https://stackoverflow.com/questions/24398699/is-it-bad-practice-to-have-a-constructor-function-return-a-promise

class Pet {
    constructor(name, birthday, species, userId){
        this.name = name
        this.birthday = birthday
        this.species = species
        this.user_id = userId
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
                user_id: this.user_id
            })
        }).then(response => response.json()).then(pet=> {
            this.petId(pet.data.id)
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
        // this returns an array of needselects that are created on initialization
        const needSelects = [
            {title: 'Feed', description: 'Every pet needs to be fed.'},
            {title: 'Vet Visit', description: "Going to the vet is necessary for a pet's health. Some species require vets with special certifications."}
        ]
        return needSelects
        // stretch goal, add & remove need selects
    }

    init(){
        // this instantiates the default needSelections that every pet should have by calling addNeedSelect on every item
        for(const needSelect of this.initNeedSelections){
            this.createNeedSel(this.petId, needSelect)
        }
    }

    addNeedSelectsFromJson(needSelsJson){
        // you want to set this instead of initializing when you are pulling from an already established pet
        if(needSelsJson){
        for(const needSelect of needSelsJson){
            // const needTitle = needSelect... something
            // const needDescription = needSelect... something
            this.addToNeedSelects(needTitle, needDescription)
        }}

    }

    addToNeedSelects(title, description){
        this.needSelects.push({title: title, description: description})
    }

    createNeedSel(needSelect){
        // this calls the function that has the fetch request for the needselect.  This can be used for adding individual needs later.
        createNeedSelection(this.petId, needSelect.title, needSelect.description)
        this.addToNeedSelects(needSelect.title, needSelect.description)
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
        const allNeedSelects = super.needSelects().concat(newNeedSelects)

        return allNeedSelects
    }
}

class LandAnimal extends Pet {
    initNeedSelects(){
        let newNeedSelects = [
            {title: 'Give Water', description: "Pets that don't live in water need to drink water to stay hydrated."}
        ]
        const allNeedSelects = super.needSelects().concat(newNeedSelects)

        return allNeedSelects
    }
}

class PetWithACoat extends LandAnimal {
    initNeedSelects(){
        let newNeedSelects = [
            {title: 'Groom', description: "Grooming prevents matts from developing, prevents rashes and infection."}
        ]
        const allNeedSelects = super.needSelects().concat(newNeedSelects)

        return allNeedSelects
    }
}

class Cat extends PetWithACoat {
    constructor(name, birthday, userId){
        super(name)
        super(birthday)
        super(user_id)
        super(needSelects)
        this.species = 'Cat'
    }

    initNeedSelects(){
        let newNeedSelects = [
            {title: 'Clean Litter Box', description: "A clean litter box helps prevent a messy house and sanitary living environment."}
        ]
        const allNeedSelects = super.needSelects().concat(newNeedSelects)

        return allNeedSelects
    }
}

class Dog extends PetWithACoat {
    constructor(name, birthday, userId){
        super(name)
        super(birthday)
        super(user_id)
        super(needSelects)
        this.species = 'Dog'
    }

    initNeedSelects(){
        let newNeedSelects = [
            {title: 'Go On Walk', description: "Excercise is a must half for a healthy animal."}
        ]
        const allNeedSelects = super.needSelects().concat(newNeedSelects)

        return allNeedSelects
    }
}

//  functions to manipulate DOM

function getUserData(){

    console.log("inside getUserData function")
    
    fetch(USERS_URL).then(response => response.json()).then(users => {
        const newArr = [... users.data]
        for(const user of newArr){createUserLi(user)}
    })
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
    userLink.addEventListener('click', loadPets)
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

function loadPets(){}
        

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

