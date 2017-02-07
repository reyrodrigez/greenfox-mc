import {expect} from 'chai';

module.exports = function () {
  this.Given('I have a registered schema "$schema"', function (schema){
    const Test = this.container.get('Test');
    expect(Test).to.not.be.undefined;
  });

  this.When('I get "$key" key from the "$schema" schema from the store', async function(key, schema) {
    const store = this.container.get('store');
    this.context.schema = store.getSchema(schema);
    this.context.storeValue = await this.context.schema.query(`{${key}}`);
  });

  this.Then('I get "$value" from the store', async function(value) {
    expect(this.context.storeValue.data.test).to.eql(value);
  });
}
