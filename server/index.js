// const express = require('express');
// const bodyParser = require('body-parser');
// const pino = require('express-pino-logger')();

// const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(pino);

// app.get('/api/greeting', (req, res) => {
//   const name = req.query.name || 'World';
//   res.setHeader('Content-Type', 'application/json');
//   res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
// });

// app.listen(3001, () =>
//   console.log('Express server is running on localhost:3001')
// );

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
