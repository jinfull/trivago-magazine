const sqlite3 = require('sqlite3').verbose();


let db = new sqlite3.Database('./ratings.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the ratings database.');
});

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS (
            article_id NUMBER PRIMARY KEY,
            rating NUMBER);`, (err) => {
      if (err) {
        console.error(err.message);
      }
  });
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});
