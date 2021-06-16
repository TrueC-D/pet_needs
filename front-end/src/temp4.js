function makePetJSObject(pet){
    const thisPetArr = []
    const attr = pet.attributes    
    const pet_id = pet.id    
    const petName = attr.name    
    const petBirth = attr.birthday
    const petSpecies = attr.species
    const petUserId = attr.user_id
    const needSelData = pet.relationships.need_selections.data

    // myArr.addListener('add', (items) => {
    // })

   function newPet(needSelData){
        const thisPet = new Pet (petName, petBirth, petUserId, petSpecies)
        thisPet.petId(pet_id)
        console.log('thisPet.petId')
        console.log(thisPet.petId)
        console.log(thisPet)
        createNeedSels(thisPet, needSelData)
        
        
    }

    newPet(needSelData)
}
    


function createNeedSels(thisPet, needSelData) {
    let itemsProcessed = 0
    const needSels = needSelData.forEach((data, index, array)=> {
        console.log('data', data)
        
        if(data.id){
            function dataExtrapolate(needSel){
                itemsProcessed++
                const title = needSel.title
                const description = needSel.description
                // const needSelInfo = {title: title, description: description}
                thisPet.addToNeedSelects(title, description)
                console.log('thisPet.needSelects', thisPet.needSelects)
                if(itemsProcessed === array.length){createPetCard(thisPet)}
                // needSelDatas.length === needSels.length? newPet(needSels): null
            }
        //    console.log(getNeedSel(data.id, dataExtrapolate))

            getNeedSel(data.id, dataExtrapolate)
          

        } 
    })
    needSels

}


