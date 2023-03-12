const sendRequest = require('../helpers/api.helper');
const testData = require('../config/data.json');

describe('API TEST SUITE', () => {
  describe('POSITIVE API TEST SUITE', () => {
    it('GET post/1', async () => {
      const response = await sendRequest('/posts/1');
      expect(response.data.userId).to.equal(1);
      expect(response.data.id).to.equal(1);
      expect(response.data.title).to.contain('sunt aut facere');
      expect(response.status).to.equal(200);
    });

    it('POST post', async () => {
      const response = await sendRequest('/posts', testData, 'post');
      expect(response.data.name).to.equal('jhon');
      expect(response.data.id).to.equal(101);
      expect(response.status).to.equal(201);
    });

    it('DELETE post', async () => {
      const response = await sendRequest('/posts/1', testData, 'DELETE');
      expect(response.status).to.equal(200);
    });

    it('DELETE post test', async () => {
      const response = await sendRequest('/posts/1');
      // name is deleted
      expect(response.data).not.equal('name');
    });
  });
  describe('Negative API TEST SUITE', () => {
    it('GET post/1 invalid status', async () => {
      const response = await sendRequest('/posts/1', testData, 'Get2');
      expect(response.status).to.equal(400);
    });

    it('GET post/1 invalid request', async () => {
      const response = await sendRequest('/posts/1');
      expect(response.data.title).to.not.equal(2);
      expect(response.data.userID).to.not.equal(1001);
    });

    it('POST post invalid status', async () => {
      const response = await sendRequest('/posts', testData, 'pos');
      expect(response.status).to.equal(400);
    });

    it('POST post invalid request', async () => {
      const response = await sendRequest('/posts', testData, 'post');
      expect(response.data.name).to.not.equal('Jhone');
      expect(response.data.userID).to.not.equal(1001);
    });

    it('UPDATE post invalid status', async () => {
      const response = await sendRequest('/posts/1', testData, 'PU');
      expect(response.status).to.equal(400);
    });

    it('UPDATE post invalid request', async () => {
      const response = await sendRequest('/posts/1', testData, 'PUT');
      expect(response.data.name).to.not.equal('Marlo');
      expect(response.data.userID).to.not.equal(1011);
    });

    it('DELETE post invalid status', async () => {
      const response = await sendRequest('/posts/1', testData, 'DELET');
      expect(response.status).to.equal(400);
    });

    it('DELETE post invalid request', async () => {
      const response = await sendRequest('/posts/1', testData, 'DELETE');
      expect(response.status.data).to.not.equal(200);
    });
  });
});
