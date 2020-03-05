const { Router } = require('express');
const PlaceModel = require('../models/Place');

const router = Router();

router.get('/', (req, res) => {
  PlaceModel.find((err, docs) => {
    res.json(docs);
  });
});

router.post('/', (req, res) => {
  // console.log(req.body);
  const place = new PlaceModel(req.body);

  place.save()
  .then(doc => {
    // console.log(doc);
    res.json(doc);
  })
  .catch(msg => {

  });
});

router.delete('/', (req, res) => {
  const id = req.body.id;
  // PlaceModel.findByIdAndDelete({_id: id}, (err, doc) => {
  PlaceModel.deleteOne({id}, (err) => {
    if (!err) return res.json();
  });
});

module.exports = router;
