// database.js
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

async function openDb() {
  return open({
    filename: '/dojolist.db',
    driver: sqlite3.Database
  });
}

module.exports = { openDb };
