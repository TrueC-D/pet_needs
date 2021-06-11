function makePetJSObject(pet){
    const needSels = []
    const needSelIds = []
    const thisPetArr = []

   function newPet(needSels){
        const thisPet = new Pet (petName, petBirth, petSpecies, petUserId)
        thisPet.petId(pet_id)
        console.log('thisPet.petId')
        console.log(thisPet.petId)
        if(needSels.length > 0){
            thisPet.addNeedSelectsFromJson(needSels)
            console.log('thisPet.needSelects')
            console.log(thisPet.needSelects)
            console.log('thisPet')
            console.log(thisPet)
            thisPetArr.push(thisPet)
            // createPetCard(thisPet)
        }else{
            console.log('thisPet w/no needSels')
            console.log(thisPet)
            createPetCard(thisPet)
        }
    }
    // responsible for converting json object in to pet = new Pet along with calling getNeedSel Method to fetch and transform needSelect json into a usable array.
    const attr = pet.attributes    
    const pet_id = pet.id    
    const petName = attr.name    
    const petBirth = attr.birthday
    const petSpecies = attr.species
    const petUserId = attr.user_id
    const needSelDatas = pet.relationships.need_selections.data

    if(needSelDatas.length < 1){
        newPet(needSels)
    } else {
        for(const needSelData of needSelDatas){
            if(!needSelData){
                newPet(needSels)
            }else{

                const needSelId = needSelData.id
                needSelIds.push(needSelId)

                for(const needSelId of needSelIds){

                    getNeedSel(needSelId, dataExtrapolate)

                    function dataExtrapolate(needSel){
                        const title = needSel.title
                        const description = needSel.description
                        const needSelInfo = {title: title, description: description}
                        needSels.push(needSelInfo)
                        if(needSels.length === needSelDatas.length){
                            newPet(needSels)
                        }
                    }                    
                }

            }

            
        }
    }
}