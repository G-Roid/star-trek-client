const searchButton = document.querySelector('#searchButton')

searchButton.addEventListener('click', getAlienData)

async function getAlienData() {
    const alienName = document.querySelector('#searchInput')
    try {        
        const response = await fetch(`https://star-trek-api.herokuapp.com/api/${alienName}`)
        const data = await response.json()
        console.log(data)

    } catch(error) {
        console.error(error)
    }

}