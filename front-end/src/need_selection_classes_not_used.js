
class NeedSelection {
    constructor(petId, name, description){
        this.name = name
        this.description = description
        this.pet_Id = petId
        this.create()
    }

    create(){
        fetch(NEED_SELECTS_URL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name: this.name, description: this.description, pet_id: this.pet_id})
        }).then(response => response.json()).then(needSelect => console.log(needSelect))
        // .then(needSelect => {
            // const needSelectId = needSelect.data.id, 
            // this.init(needSelectId)
        // })

    }
}

class Feed extends NeedSelection{
    constructor(petId){
        this.name = 'Feed'
        this.description = 'Every pet needs to be fed.'
        super(petId)
        this.create()
    }
    create(){
        super.create()
    }
}

class VetVisit extends NeedSelection{
    constructor(petId){
        this.name = 'Vet Visit'
        this.description = "Going to the vet is necessary for a pet's health."
        super(petId)
        this.create()
    }
    create(){
        super.create()
    }
}

class GiveWater extends NeedSelection{
    constructor(petId){
        this.name = 'Give Water'
        this.description = "Pets that don't live in water need to drink water to stay hydrated."
        super(petId)
        this.create()
    }
    create(){
        super.create()
    }
}

class Groom extends NeedSelection{
    constructor(petId){
        this.name = 'Groom'
        this.description = "Grooming prevents matts from developing, prevents rashes and infection."
        super(petId)
        this.create()
    }
    create(){
        super.create()
    }
}


class CleanLitterBox extends NeedSelection{
    constructor(petId){
        this.name = 'Clean Litter Box'
        this.description = "A clean litter box helps prevent a messy house and sanitary living environment."
        super(petId)
        this.create()
    }
    create(){
        super.create()
    }
}


class Walk extends NeedSelection {
    constructor(petId){
        this.name = 'Go on Walk.'
        this.description = "Excercise is a must half for a healthy animal."
        super(petId)
        this.create()
    }
    create(){
        super.create()
    }
}

class CleanTank extends NeedSelection {
    constructor(petId){
        this.name = 'Clean Tank'
        this.description = "Changing the water in the tank and removing excess waste and algae will help marine life thrive."
        super(petId)
        this.create()
    }
    create(){
        super.create()
    }
}
class CheckChemicalLevels extends NeedSelection {
    constructor(petId){
        this.name = 'Check chemical levels in tank.'
        this.description = "Tank water with the wrong pH levels, or water that is too high in high in nitrates, nitrites and ammonium can harm aquatic animals"
        super(petId)
        this.create()
    }
}


class LightOn extends NeedSelection {
    constructor(petId){
        this.name = 'Turn On Light'
        this.description = "Animals in terrariums and aquariums also need a day and night cycle. Turn the light on to start their morning."
        super(petId)
        this.create()
    }
}
class LightOff extends NeedSelection {
    constructor(petId){
        this.name = 'Turn Off Light'
        this.description = "Animals in terrariums and aquariums also need a day and night cycle. Turn the light off to start their evening."
        super(petId)
        this.create()
    }
}
// calling classes
function callSelectorClasses(petId, object){
    console.log(object)
    for(const className in object){
        let classInstance = new object[className](petId)
    }
}