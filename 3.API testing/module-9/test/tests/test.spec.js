const { expect } = require('chai');
const { sendRequest } = require('../helpers/api.helper');
const testData = require('../config/data.json');

describe('API Test Suite', () => {
  let postId;

  it('should get() all posts', async () => {
    const response = await sendRequest('posts');

    expect(response.status).to.equal(200);
    expect(response.data[0].id).to.equal(1);
  });

  it('should create a post using post() method', async () => {
    const response = await sendRequest('posts/', testData, 'post');

    postId = response.data.id;
    expect(response.status).to.equal(201);

    const post = await sendRequest(`posts/${postId}`);
    expect(post.status).to.equal(200);
    expect(post.data.id).to.equal(postId);
  });
});
