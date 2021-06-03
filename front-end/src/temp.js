const cardDeck = document.getElementById('card-deck')
// this is where i store the cards in the index.html ->maybe i put this in a div instead
// would move this to the top of the file if i need this in multiple functions


function loadUserPage(){
    // should convert remove hidden class from create pet form
    // should call method to create pet cards
    // should 
}

function getPets(){
    // https://stackoverflow.com/questions/37928113/mapping-json-to-es6-classes
    // the above link shows how to parse jason to get values for new Pet
    // fetch and... create pet javascript object?
    // pet = new Pet for each
    // store need selections?  if already created, do not need to initialize need selections but do need to fetch need selections
    // 
}


function createPetCard(pet){
    const card = document.createElement('div')
    card.setAttribute('data-id', pet.id)
    // maybe will write this differently
    card.setAttribute('class', 'card')
    cardDeck.appendChild(card)

    const petName = document.createElement('h5')
    petName.innerText = pet.name
    card.appendChild(petName)

    const petSpecies = document.createElement('p')
    petSpecies.innerText = `Species: ${pet.description}`
    card.appendChild(petSpecies)

    const petBirth = document.createElement('p')
    petBirth.innerText = `Birthday: ${pet.birthday}`
    card.appendChild(petBirth)
    
    const selectLabel = document.createElement('label')
    selectLabel.innerText = 'Create Need From Saved Needs:'
    card.appendChild(selectLabel)
    

    const needDropdown = document.createElement(select)
    needDropdown.setAttribute('id', 'need-dropdown')
    selectLabel.appendChild(needDropdown)

    const nullOption = document.createElement('option')
    nullOption.value = ""
    nullOption.appendChild(needDropdown)

    const needSels = pet.needSelects

    for (const needSel of NeedSels){
        const newOption = document.createElement('option')
        newOption.value = needSel.title
        newOption.innerText = `${needSel.title}; ${needSel.description}`
        newOption.appendChild(needDropdown)
    }
    // stretch goal: need to create submit feature and grab dropdown element with other parts of form.

    // for future developments: const needList = 
    // this would call a list fetched of all the needs that are currently on the schedule

    // should be used with fetch for each pet found and for any new peets
    // delete pet button
    // delete li button should be usable 
    // create li buttion? 
}