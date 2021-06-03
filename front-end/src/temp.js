class Pet {
    constructor(name, birthday, species, userId){
        this.name = name
        this.birthday = birthday
        this.species = species
        this.user_id = userId
    }

    static create(){
        fetch(PETS_URL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.name, 
                birthday: this.birthday,
                species: this.species, 
                user_id: this.user_id
            })
        }).then(response => response.json()).then(pet=> console.log(pet))
        // may need to fetch need selects here as well
        // createNeedSelectionMethod does this which is called in addNeedSelection which is called in init
        // what may potentially work is below:
        // .then(pet => this.init(pet.data.id, this.needSelects))
    }
            

        // }
    
    

    needSelects(){
        // this returns an array of needselects that are created on initialization
        const needSelects = [
            {title: 'Feed', description: 'Every pet needs to be fed.'},
            {title: 'Vet Visit', description: "Going to the vet is necessary for a pet's health. Some species require vets with special certifications."}
        ]
        return needSelects
    }

    init(pet_id, needSelections){
        // this instantiates the default needSelections that every pet should have by calling addNeedSelect on every item
        for(const needSelect of needSelections){
            this.addNeedSelect(pet_id, needSelect)
        }
    }

    addNeedSelect(pet_id, needSelect){
        // this calls the function that has the fetch request for the needselect.  This can be used for adding individual needs later.
        createNeedSelection(pet_id, needSelect.title, needSelect.description)
    }
}

class AquaticSpecies extends Pet {
    needSelect(){
        let newNeedSelects = [  
            {title: 'Clean Tank', description: "Changing the water in the tank and removing excess waste and algae will help marine life thrive."},
            {title: 'Check chemical levels in tank.', description: "Tank water with the wrong pH levels, or water that is too high in high in nitrates, nitrites and ammonium can harm aquatic animals."},
            {title: 'Turn On Light', description: "Animals in terrariums and aquariums also need a day and night cycle. Turn the light on to start their morning."},
            {title: 'Turn Off Light', description: "Animals in terrariums and aquariums also need a day and night cycle. Turn the light off to start their evening."}
        ]
        const allNeedSelects = super.needSelects().concat(newNeedSelects)

        return allNeedSelects
    }

    // init, create, and addNeedSelect methods shouldbe included by extension
}

class LandAnimal extends Pet {
    needSelects(){
        let newNeedSelects = [
            {title: 'Give Water', description: "Pets that don't live in water need to drink water to stay hydrated."}
        ]
        const allNeedSelects = super.needSelects().concat(newNeedSelects)

        return allNeedSelects
    }
}

class PetWithACoat extends LandAnimal {
    needSelects(){
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
        this.species = 'Cat'
    }

    needSelects(){
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
        this.species = 'Dog'
    }

    needSelects(){
        let newNeedSelects = [
            {title: 'Go On Walk', description: "Excercise is a must half for a healthy animal."}
        ]
        const allNeedSelects = super.needSelects().concat(newNeedSelects)

        return allNeedSelects
    }
}