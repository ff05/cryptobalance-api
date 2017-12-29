import { error } from 'util';

const express = require('express')
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.static(path.join(__dirname, 'build')));

app.post('/coins', function (req, res, next) {
  Coin.create(newCoin)
  .then(coin => res.json(coin))
  .catch(error => next(error))
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})