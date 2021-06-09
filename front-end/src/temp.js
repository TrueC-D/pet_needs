const createPetBtn = document.getElementById('create-pet').getElementsByTagName('button')[0]

createPetBtn.addEventListener('click', function(){
    const petName = document.getElementById('new-pet-name')
    const petBirth = document.getElementById('new-pet-birthday')
    const petClass = document.getElementById('pet-dropdown').value
    const customSpecies = document.getElementById('custom-species')
    const petUserId = document.getElementsByClassName('selected')[0].id.split('-')[1]

    switch(petClass){
        case 'Dog': {
            let thisPet = new Dog(petName, petBirth, petUserId);
            break;
        }
        case 'Cat':{
            let thisPet = new Cat(petName, petBirth, petUserId);
            break;
        }
        default: {
            let thisPet = new petClass(petName, petBirth, customSpecies, petUserId)
        }
    }
    console.log(thisPet)

})
