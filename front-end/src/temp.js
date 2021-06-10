const createPetBtn = document.getElementById('create-pet').getElementsByTagName('button')[0]

createPetBtn.addEventListener('click', function(){
    const petName = document.getElementById('new-pet-name').value
    const petBirth = document.getElementById('new-pet-birthday').value
    const petClass = document.getElementById('pet-dropdown').value
    const customSpecies = document.getElementById('custom-species').value
    const petUserId = document.getElementsByClassName('selected')[0].id.split('-')[1]
    console.log('petUserId')
    console.log(petUserId)

    // function createPet(thisPet){
        // this function is not working
    //     thisPet.createThis()
    //     thisPet.init()
    // }

    switch(petClass){
        case 'Dog': {
            let thisPet = new Dog(petName, petBirth, petUserId);
            console.log(thisPet);
            thisPet.createThis()
            thisPet.init()
            break;
        }
        case 'Cat':{
            let thisPet = new Cat(petName, petBirth, petUserId);
            console.log(thisPet);
            thisPet.createThis()
            thisPet.init()
            break;
        }
        case 'AquaticSpecies':{
            let thisPet = new AquaticSpecies(petName, petBirth, petUserId, customSpecies);
            console.log(thisPet);
            thisPet.createThis()
            thisPet.init()
            break;
        }
        case 'LandAnimal':{
            let thisPet = new LandAnimal(petName, petBirth, petUserId, customSpecies);
            console.log(thisPet)
            thisPet.createThis()
            thisPet.init()
            break;
        }
        case 'PetWithACoat':{
            let thisPet = new PetWithACoat(petName, petBirth, petUserId, customSpecies);
            console.log(thisPet);
            thisPet.createThis()
            thisPet.init()
            break;
        }
        case 'Pet': {
            let thisPet = new Pet(petName, petBirth, petUserId, customSpecies);
            thisPet.createThis()
            thisPet.init()
            break;
        }
    }
    // Dynamic class for the future:
    // https://stackoverflow.com/questions/34655616/create-an-instance-of-a-class-in-es6-with-a-dynamic-name

})