
// this is where i store the cards in the index.html ->maybe i put this in a div instead
// would move this to the top of the file if i need this in multiple functions

function clearCardDeck(){
    let currentList = Object.values(document.getElementsByClassName('card'))
    currentList.map(card => card.remove())
}