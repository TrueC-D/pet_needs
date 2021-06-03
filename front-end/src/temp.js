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

const cardDeck = document.getElementById('card-deck')
// this is where i store the cards in the index.html ->maybe i put this in a div instead

function createPetCard(pet){
    const card = document.createElement('div')
    card.setAttribute('data-id', pet.id)
    // maybe will write this differently
    card.setAttribute('class', 'card')
    cardDeck.appendChild(card)

    const 
    // should be used with fetch for each pet found and for any new peets
    // delete pet button
    // delete li button should be usable 
    // create li buttion? 
}