const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const app = express();

//middleware
app.use(express.static('client'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let toys = [];
let id = 0;

// Create toy
app.post('/toys', (req,res) => {
  let toy = req.body;

  id++
  toys.id =id + '';
  toys.push(toy);
});

// Read toys
app.get('/toys', (req,res) => {
  res.json(toys);
});

//Read one toy
app.get('toys/:id', (req,res) => {
  const toy = _.find(lions, {id: req.params.id});
  res.json(toy || {});
});

// Update toy
app.put('/toys/:id', (req,res) => {
  let update =req.body;
  if (update.id) { delete update.id }
  let toy = _.findIndex(lions, {id: req.params.id});
  if (!toys[toy]) {
    res.send();
  } else {
    const updatLion = _.assign(toys[toy], update);
    res.json(updateLion);
  }
});

// Delete toy
app.delete('/lions/:id', (req,res) => {
  const lion = _.findIndex(toys, {id: req.params.id});
  if(!toys[toy]) {
    res.end();
  } else {
    const deleteToy = toys[toy];
    lions.splice(lion, 1);
    res.json(deleteToy);
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('listening on http://localhost:', PORT);
});
