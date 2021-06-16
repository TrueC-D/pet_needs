function makePetJSObject(pet){
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
        console.log('needSels in newPet', needSels)
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
    

    // const needSels = function(){
    //     if(!needSelDatas[0]){return []} 
    //     else {
    //     needSelDatas.map((data)=> {
    //         console.log('data in temp2 map', data)
    //         console.log('data.id in temp2 map', data.id)
    //         getNeedSel(data.id, dataExtrapolate)

    //         function dataExtrapolate(needSel){
    //             console.log('in data exrapolate')
    //             const title = needSel.title
    //             const description = needSel.description
    //             const needSelInfo = {title: title, description: description}
    //             return needSelInfo
    //             // needSelDatas.length === needSels.length? newPet(needSels): null
    //         }     

    //     } 
    // )}}()

    const needSels =needSelDatas.map((data)=> {
        if(!data){return []}
        else{
            
            function dataExtrapolate(needSel){
                const title = needSel.title
                const description = needSel.description
                const needSelInfo = {title: title, description: description}
                return needSelInfo

                // needSelDatas.length === needSels.length? newPet(needSels): null
            }
           console.log(getNeedSel(data.id, dataExtrapolate))

            // return getNeedSel(data.id, dataExtrapolate)
          

        } 
    })
    needSels

    // newPet(needSels)
}


