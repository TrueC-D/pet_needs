function makePetJSObject(pet){
    const needSels = []
    const needSelIds = []
    const thisPetArr = []

    const attr = pet.attributes    
    const pet_id = pet.id    
    const petName = attr.name    
    const petBirth = attr.birthday
    const petSpecies = attr.species
    const petUserId = attr.user_id
    const needSelDatas = pet.relationships.need_selections.data

    // myArr.addListener('add', (items) => {
    // })

   function newPet(needSels){
        const thisPet = new Pet (petName, petBirth, petUserId, petSpecies)
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
            createPetCard(thisPet)
        }else{
            console.log('thisPet w/no needSels')
            console.log(thisPet)
            createPetCard(thisPet)
        }
    }
    // responsible for converting json object in to pet = new Pet along with calling getNeedSel Method to fetch and transform needSelect json into a usable array.
   

    console.log('needSelIds',needSelIds)
    for(i = 0; i <= needSelDatas.length; i++ ){
        console.log('data group:')
   
        console.log('needSelDatas.length', needSelDatas.length)
        console.log('needSels.length', needSels.length)
        // needSelIds.addEventListener('change', ()=>{needSelIds.length === needSelDatas.length ? gettingNeedSelData(): null})
        if(needSelDatas.length === needSels.length){
            return newPet(needSels)
        } else {
            // let needSelData = needSelDatas[i]
            console.log('is there an id?:', needSelDatas[i].id)
            // console.log('needselData', needSelData)
            // console.log('needSelData.id', needSelData.id)
            // const needSelId = needSelData.id



            getNeedSel(needSelDatas[i].id, dataExtrapolate)

            function dataExtrapolate(needSel){
                console.log('in data exrapolate')
                const title = needSel.title
                const description = needSel.description
                const needSelInfo = {title: title, description: description}
                needSels.push(needSelInfo)
                needSelDatas.length === needSels.length? newPet(needSels): null
            }     
            
          
 
        }
    }          
    
}