const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');

  next();
});

app.use(bodyParser.urlencoded({extended: true}));
// fetch('https://jobs.github.com/positions.json?location=india')
//   .then(response => {
//     console.log(response.json());
//     // res.send(response);
//     console.log('success');
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(401).send('Error in fetch');
//   });
app.get('/jobs', (req, res) => {
  axios
    .get('https://jobs.github.com/positions.json?location=remote')
    .then(response => {
      // console.log(response);
      const getCircularReplacer = () => {
        const seen = new WeakSet();
        return (key, value) => {
          if (typeof value === 'object' && value !== null) {
            if (seen.has(value)) {
              return;
            }
            seen.add(value);
          }
          return value;
        };
      };
      let x = JSON.stringify(response, getCircularReplacer());
      // console.log(x);
      res.send(x);
      // res.send(response);
      console.log('success');
    })
    .catch(err => {
      console.log(err);
      res.status(401).send('Error in fetch');
    });
});

app.get('/contests', (req, res) => {
  axios
    .get(
      'https://clist.by/api/v1/json/contest/?username=thewhitewolf17&api_key=e1bc7711e0e53b96b461603fccae5d8e67f887c4&limit=20&end__gt=2020-09-19T00%3A00%3A00'
    )
    .then(response => {
      // console.log(response);

      const getCircularReplacer = () => {
        const seen = new WeakSet();
        return (key, value) => {
          if (typeof value === 'object' && value !== null) {
            if (seen.has(value)) {
              return;
            }
            seen.add(value);
          }
          return value;
        };
      };

      res.send(JSON.stringify(response.data.objects, getCircularReplacer()));
      console.log('success');
    })
    .catch(err => {
      console.log(err);
      res.status(401).send('Error in fetch');
    });
});
app.listen(3000, '127.0.0.1');
