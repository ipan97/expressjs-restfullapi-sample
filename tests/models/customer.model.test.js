const Customer = require("../../app/models/customer.model");
const faker = require("faker");

require("./setup");
it("Customer Insert", () => {
  let customer = new Customer({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName()
  });
  return customer.save().then(result => {
    expect(result).toBeDefined();
  });
});
