const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const expressSanitizer = require('express-sanitizer');
const keys = require('./config/keys');
const axios = require('axios');

const app = express();
const API_URL = `http://api.openweathermap.org/data/2.5/forecast/daily?appid=${keys.googleAPIKey}`;

app.use((req, res, next) => {
  if(req.headers['x-forwarded-proto'] === 'https'){
    res.redirect(`http://${req.hostname}${req.url}`);
  } else {
    next();
  }
});

app.use(expressSanitizer());
app.use(bodyParser.json({ type: '*/*' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.get('/api/search', (req, res) => {
  const { city, lat, lon } = req.query;
  if(!city && (lat === undefined || lon === undefined)) {
    res.status(400).json({ message: 'Please specify location' });
  } else {
    const reqString = city ? `q=${city}` : `lat=${lat}&lon=${lon}`;

    axios.get(`${API_URL}&units=metric&cnt=7&${reqString}`)
      .then(response => {
        const { list, city: { name } } = response.data;
        res.json({ list, city: name });
      })
      .catch(e => {
        if(e.response && e.response.status === 404) {
          res.status(404).json({ message: 'We do not have data for this city' });
        } else {
          res.status(500).json({ message: 'Something went wrong, please try later' });
        }
      });
  }
});

if(process.env.NODE_ENV === 'production') {
  // production
  // get all static data from 'dist' directory
  app.use(express.static('dist'));

  // SPA specific code!!!
  // any get requests will be served with index.template.ejs files
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
} else {
  // alert user - to use webpack dev server
  app.get('*', (req, res) => {
    res.json({
      error: 'In development mode - routes which don\'t match api/* should be handled by webpack-dev-server'
    });
  });
}

