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
        // this creates the default needSelections that every pet should have
        for(const needSelect of needSelections){
            this.addNeedSelect(pet_id, needSelect)
        }
    }

    addNeedSelect(pet_id, needSelect){
        // this calls the function that has the fetch request for the needselect
        createNeedSelection(pet_id, needSelect.title, needSelect.description)
    }
}