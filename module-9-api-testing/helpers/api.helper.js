const axios = require('axios')
const Test_url = require('../config/endpoints')

const sendRequest = async(url,data = null, method='get') =>{
    try{    
        const response = await axios({
            
            url: `${Test_url}${url}`,
            method,
            header: {
            },
            data,
        })
        return {
            status: response.status,
            data: response.data
        }

    }
    catch(error){
        return{
            status: error.response.status
        }

        

    }
}

module.exports = sendRequest;