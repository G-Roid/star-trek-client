window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    getAliens()
});

const searchButton = document.querySelector('#searchButton')

searchButton.addEventListener('click', getAlienData)


async function getAlienData() {
    // const alienName = document.querySelector('#searchInput').value
    const alienName = document.querySelector('#alienSelect').value
    console.log(alienName)
    try {        
        const response = await fetch(`https://star-trek-api-guide.herokuapp.com/api/${alienName}`)
        const data = await response.json()
        console.log(data)

        // upadate list with api repsonse
        document.querySelector('#speciesName').textContent = data.speciesName
        document.querySelector('#homeworld').textContent = data.homeworld
        document.querySelector('#features').textContent = data.features
        document.querySelector('#interestingFact').textContent = data.interestingFact
        document.querySelector('#notableExamples').textContent = data.notableExamples
        document.querySelector('#alienImage').src = data.image

    } catch(error) {
        console.error(error)
    }
}

async function getAliens() {
    try {        
        const response = await fetch(`https://star-trek-api-guide.herokuapp.com/api/`)
        const data = await response.json()
        // console.log(Object.keys(data).length)

        

        for (key in data) {   
            let newOption = document.createElement('option')
            // console.log(key) 
            let optionText = document.createTextNode(`${key}`)      
            newOption.appendChild(optionText) 
    
            // newOption = `<option value=${key}>${key}</option>`
            document.querySelector('#alienSelect').appendChild(newOption) 
            console.log(newOption)        
        }

        // upadate list with api repsonse
        // document.querySelector('#speciesName').textContent = data.speciesName
        // document.querySelector('#homeworld').textContent = data.homeworld
        // document.querySelector('#features').textContent = data.features
        // document.querySelector('#interestingFact').textContent = data.interestingFact
        // document.querySelector('#notableExamples').textContent = data.notableExamples
        // document.querySelector('#alienImage').src = data.image

    } catch(error) {
        console.error(error)
    }
}







