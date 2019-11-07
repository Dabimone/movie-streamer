<<<<<<< HEAD
const express = require('express');
const favController = require('../controllers/favController');
const router = express.Router();

router.get('/', favController.getFavs, (req, res) => {
  return res.status(200).json(res.locals.favs);
});

router.post('/', favController.addFavs, (req, res) => {
  return res.status(200).json(res.locals.favs);
})

router.delete('/', favController.deleteFavs, (req, res) => {
  return res.status(200).json(res.locals.favs);
})

=======
const express = require('express');
const favController = require('../controllers/favController');
const router = express.Router();

router.get('/', favController.getFavs, (req, res) => {
  return res.status(200).json(res.locals.favs);
});

router.post('/', favController.addFavs, (req, res) => {
  return res.status(200).json(res.locals.favs);
})

router.delete('/', favController.deleteFavs, (req, res) => {
  return res.status(200).json(res.locals.favs);
})

>>>>>>> 17919f994bc5115344b19fe4108951527e406e83
module.exports = router;