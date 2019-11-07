<<<<<<< HEAD
const express = require('express');
const watchController = require('../controllers/watchController');
const router = express.Router();

router.get('/', watchController.getWatch, (req, res) => {
  return res.status(200).json(res.locals.watch);
});

router.post('/', watchController.addWatch, (req, res) => {
  return res.status(200).json(res.locals.watch);
})

router.delete('/', watchController.deleteWatch, (req, res) => {
  return res.status(200).json(res.locals.watch);
})

=======
const express = require('express');
const watchController = require('../controllers/watchController');
const router = express.Router();

router.get('/', watchController.getWatch, (req, res) => {
  return res.status(200).json(res.locals.watch);
});

router.post('/', watchController.addWatch, (req, res) => {
  return res.status(200).json(res.locals.watch);
})

router.delete('/', watchController.deleteWatch, (req, res) => {
  return res.status(200).json(res.locals.watch);
})

>>>>>>> 17919f994bc5115344b19fe4108951527e406e83
module.exports = router;