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
            console.log(thisPet)
            break;
        }
        case 'Cat':{
            let thisPet = new Cat(petName, petBirth, petUserId);
            console.log(thisPet)
            break;
        }
        default: {
            let thisPet = new petClass(petName, petBirth, customSpecies, petUserId)
            console.log(thisPet)
        }
    }

})
