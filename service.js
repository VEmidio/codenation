const axios = require('axios')

const TOKEN = '027f65d7ecaff975aae875ea1bae5c847ece25ad'
const URL = `https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=${TOKEN}`

async function obter(){
    const url = `${URL}&format=json`
    const response = await axios.get(url)
    return response
}

obter()
.then(function(resultado){
    console.log('resultado', resultado)
})
.catch(function(error) {
    console.error("deu ruim", error)
})