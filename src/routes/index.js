import express from 'express';
import _ from 'lodash';
import locationsInfo from '../locationsInfo.json';

const router = express.Router();

router.get('/location-categories', (req, res) => {
  const locationCategories = locationsInfo.map(categoryInfo => ({
    id: categoryInfo.id,
    category: categoryInfo.category
  }));

  res.json(locationCategories);
});

router.post('/details', (req, res) => {
  const categoryId = req.body.categoryId;

  const categoryDetails = _(locationsInfo)
    .filter(category => category.id === categoryId)
    .map(category => category.detailsCategoryItems)
    .flatten()
    .value();

  res.json(categoryDetails);
});

export default router;