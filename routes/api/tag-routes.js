const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

//http://localhost:3001/api/t/
router.get('/', async (req, res) => {
  // find all tags
  try {
    const tagData = await Tag.findAll({
      // be sure to include its associated Product data
      include: [{model: Product, through: ProductTag}]
    });

    res.status(200).json(tagData);
  }
  catch (err) {
    res.status(500).json(err);
  }
  
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const tagData = await Tag.findByPk({
      // be sure to include its associated Product data
      include: [{model: Product, through: ProductTag}]
    });

    if (!tagDataData) {
      res.status(404).json({message: 'no tag was found with that id'})
      return;
    }

    res.status(200).json(tagData);
  }
  catch (err) {
    res.status(500).json(err);
  }
  
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
