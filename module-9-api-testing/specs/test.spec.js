const sendRequest = require('../helpers/api.helper')
const testData = require('../config/data.json')



describe('POSITIVE API TEST SUITE', ()=>{

    it('GET post/1', async()=>{

        const response = await sendRequest('/posts/1')
        expect(response.data.userId).to.equal(1)
        expect(response.status).to.equal(200)
    })

    it('POST post', async ()=>{

        const response = await sendRequest('/posts',testData,"post")
        expect(response.status).to.equal(201)

    })

    it('UPDATE post', async()=>{
        const response = await sendRequest('/posts/1',testData,'PUT');
        expect(response.status).to.equal(200)
    })

    it('DELETE post', async()=>{
        const response = await sendRequest('/posts/1',testData,'DELETE');
        expect(response.status).to.equal(200)
    })

})

describe('NEGATIVE API TEST SUITE', ()=>{

    it('GET post/1', async()=>{
        const response = await sendRequest('/posts/1',testData,'Get2')
        expect(response.status).to.equal(400)
    })

    it('POST post', async ()=>{

        const response = await sendRequest('/posts',testData,"pos")
        expect(response.status).to.equal(400)

    })

    it('UPDATE post', async()=>{
        const response = await sendRequest('/posts/1',testData,'PU');
        expect(response.status).to.equal(400)
    })

    it('DELETE post', async()=>{
        const response = await sendRequest('/posts/1',testData,'DELET');
        expect(response.status).to.equal(400)
    })

})