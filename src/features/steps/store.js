import {expect} from 'chai';

module.exports = function () {
  this.Given('I have a registered schema "$schema"', function (schema){
    const Test = this.container.get('Test');
    expect(Test).to.not.be.undefined;
  });

  this.Given('I add new item to schema "$schema"', async function (schema) {
    const query = `mutation Mutation($url: String!) {
      registerRequest(url: $url) {
        message
      }
    }`;
    const store = this.container.get('store');
    this.context.schema = await store.getSchema(schema);
    const result = await this.context.schema.query(query, {url: 'test'});
    expect(result.data.registerRequest.message).to.eql('Successful registration');

  });

  this.When('I get key "$key" from the "$schema" schema from the store', async function(key, schema) {
    const store = this.container.get('store');
    this.context.schema = await store.getSchema(schema);
    this.context.storeValue = await this.context.schema.query(`{request (id: ${key}) {url}}`);
  });

  this.Then('I get "$value" from the store', async function(value) {
    expect(this.context.storeValue.data.request.url).to.eql(value);
  });
}
