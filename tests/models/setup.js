const db = require("../../config/database.config");

beforeAll(() => {
  db.connect();
});
afterAll(done => {
  db.disconnect(done);
});
