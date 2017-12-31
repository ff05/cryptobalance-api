const express = require('express')
const path = require('path');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const { Coin } = require('./models')

const PORT = process.env.PORT || 3030;

app
.use(cors())
.use(express.static(path.join(__dirname, 'build')))
.use(bodyParser.urlencoded({ extended: true }))
.use(bodyParser.json())

app.get('/coins', (req, res, next) => {
  Coin.find()

    .then((coins) => res.json(coins))

    .catch((error) => next(error))
})

app.post('/coins', function (req, res, next) {
  let newCoin = req.body

  Coin.create(newCoin)
  .then(coin => res.json(coin))
  .catch(error => next(error))
});

app.delete('coins/:id', (req, res, next) => {
  const id = req.params.id
  console.log(id)

  Coin.findByIdAndRemove(id)
    .then(() => {
      res.status = 200
      res.json({
        message: 'Removed',
        _id: id
      })
    })
    .catch((error) => next(error))
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})