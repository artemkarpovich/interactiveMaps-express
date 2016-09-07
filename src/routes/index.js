import express from 'express';
import _ from 'lodash';
import locations from '../locations.json';
import locationCategories from '../locationCategories.json';

const router = express.Router();

router.get('/location-categories', (req, res) => {

  res.json(locationCategories);
});

router.post('/details', (req, res) => {
  const categoryName = req.body.categoryName;

  const locationsByCategory = _.filter(locations, item => item.category === categoryName);

  res.json(locationsByCategory);
});

export default router;