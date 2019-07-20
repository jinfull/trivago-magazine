const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
  request(
    { url: 'http://trivago-magazine-work-sample-server.s3-website.eu-central-1.amazonaws.com/latest_posts.json' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

// sql implementation

// const sqlite3 = require('sqlite3').verbose();
// const path = require('path');
// const dbPath = path.resolve(__dirname, 'database.db');

// const db = new sqlite3.Database(dbPath, (err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log('Connected to the ratings database.');
// });

// db.serialize(() => {
//   db.run(`CREATE TABLE IF NOT EXISTS ratings (
//             article_id NUMBER PRIMARY KEY,
//             rating NUMBER);`, (err) => {
//       if (err) {
//         console.error(err.message);
//       }
//     });
// });

// db.close((err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log('Close the database connection.');
// });
