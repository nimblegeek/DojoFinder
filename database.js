const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const dbPath = path.resolve("../../dojolist.db");

function openDb() {
  return new sqlite3.Database(dbPath, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the SQlite database.");
  });
}

module.exports = { openDb };
