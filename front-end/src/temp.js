
// this is where i store the cards in the index.html ->maybe i put this in a div instead
// would move this to the top of the file if i need this in multiple functions

function clearCardDeck(){}


function makePetJSObjects(pet){
    // responsible for converting json object in to pet = new Pet along with calling getNeedSel Method to fetch and transform needSelect json into a usable array.
        const attr = pet.attributes
        console.log('pet attributes')
        console.log(attr)
        const pet_id = pet.id
        console.log('pet id')
        console.log(pet_id)
        const petName = attr.name
        console.log('pet name')
        console.log(petName)
        const petBirth = attr.birthday
        console.log( 'pet birth')
        console.log(petBirth)
        const petSpecies = attr.species
        console.log('pet speices')
        console.log(petSpecies)
        const petUserId = attr.user_id
        console.log('petUserId')
        console.log(petUserId)

        const needSelIds = []
        for(const needSelData in pet.relationships.need_selections){
            const needSelId = needSelData.data.id
            console.log('needSelId')
            console.log(needSelId)
            needSelIds.push(needSelId)
            console.log('needSelIds')
            console.log(needSelIds)
        }
        // const needSels = []
        // for(const needSelId of needSelIds){
        //     const needSel = getNeedSel(id)
        //     // const title = needSel.title
        //     // const description = needSel.description
        //     // const needSelInfo = {title: title, desciption: description}
        //     // needSels.push(needSelInfo)
        //     needSels.push(needSel)
        // }
        
        
       const thisPet = new Pet (petName, petBirth, petSpecies, petUserId)
       console.log('thisPet')
       console.log(thisPet)
       thisPet.petId(pet_id)
       console.log('thisPet.petId')
       console.log(thisPet.petId)
    //    thisPet.needSelects(needSels)
    //    createPetCard(thisPet)
    
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