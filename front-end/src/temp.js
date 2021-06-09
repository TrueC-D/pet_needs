const createPetBtn = document.getElementById('create-pet').getElementsByTagName('button')[0]
// createPetBtn.addEventListener()
// needs to grab
userLink.addEventListener('click', selectUser)

function selectUser(){ event => {
    const wasSelected = document.getElementById('user-links').getElementsByClass('selected')[0]
    if(wasSelected){
        wasSelected.className = 'clickable'
        event.target.className = 'selected'
    }else{event.target.className = 'selected'}
}}
