const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//http://localhost:3001/api/categories/
router.get('/', async (req, res) => {
  // find all categories
  try {
    const categoryData = await Category.findAll({
      // be sure to include its associated Products
      include: [{model: Product}]
    });
    res.status(200).json(categoryData);
  }
  catch(err) {
    res.status(500).json(err);
  }
});


router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const categoryData = await Category.finddByPk(req.params.id, {
      // be sure to include its associated Products
      include: [{model: Product}]
    });

    if(!categoryData) {
      res.status(404).json({message: 'No category data found with that id!'});
      return;
    }
    res.status(200).json(categoryData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});


router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
