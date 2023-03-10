const axios = require('axios')
const testURL = require('../config/endpoints')

const sendRequest = async(url,data, method='get') =>{
    try{    
        const response = await axios({
            
            url: `${testURL}${url}`,
            method,
            header: {
                
            },
            data:{
                "name":"jhon"
            },
        })
        return {
            status: response.status,
            data: response.data,
            
        }

    }
    catch(error){
        return{
            status: error.response.status
        }

        

    }
}

module.exports = sendRequest;