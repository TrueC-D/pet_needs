const cardDeck = document.getElementById('card-deck')
// this is where i store the cards in the index.html ->maybe i put this in a div instead
// would move this to the top of the file if i need this in multiple functions


function loadUserPage(){
    // should convert remove hidden class from create pet form
    // should call method to create pet cards
    // should 
}

function getNeedSels(){
    fetch(PETS_URL).then(response => response.json()).then(pets => console.log(pets))
}

function getPets(){
    fetch(PETS_URL).then(response => response.json()).then(pets => console.log(pets))
    // .then(pets => {
        // makePetObjects(pets.something)
        
    // })
    // https://stackoverflow.com/questions/37928113/mapping-json-to-es6-classes
    // the above link shows how to parse jason to get values for new Pet
    // fetch and... create pet javascript object?
    // pet = new Pet for each
    // store need selections?  if already created, do not need to initialize need selections but do need to fetch need selections
    // 
}

function makePetJSObjects(pets){
    // in the future, may have to create a different class so that pet object features can be populated as altered from their originally initialized state. -> needSelects would be different.
    for (const pet of pets){
        // const pet_id = 
        // const petName = 
        // const petBirth = 
        // const petSpecies = 
        // const petUserId =
        // const needSelIds = 
        // const needSels = 
        
       const thisPet = new Pet (petName, petBirth, petSpecies, petUserId)
       thisPet.petId(pet_id)
       thisPet.needSelects(needSels)
    //    createPetCard(thisPet)
    }
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
    petSpecies.innerText = `Species: ${pet.description}`
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
    
    const needDropdown = document.createElement(select)
    needDropdown.setAttribute('id', 'need-dropdown')
    selectLabel.appendChild(needDropdown)

    const nullOption = document.createElement('option')
    nullOption.value = ""
    needDropdown.appendChild(nullOption)

    for (const needSel of pet.needSelects){
        // may need to create new variables from fetch request
        const newOption = document.createElement('option')
        newOption.value = needSel.title
        newOption.innerText = `${needSel.title}; ${needSel.description}`
        newOption.appendChild(needDropdown)
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