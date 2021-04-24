const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const results = await Category.findAll({
      attributes: [
        'id',
        'category_name'
      ],
      include: [
        {
          model: Product,
          attributes: ['product_name']
        }
      ]
    });
    res.json(results);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const results = await Category.findAll({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'category_name'
      ],
      include: [
        {
          model: Product,
          attributes: ['product_name']
        }
      ]
    });
    res.json(results);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
  try {
    Category.create({
      category_name: req.body.category_name
    })
    res.json(`Created the category ${req.body.category_name}`);
  } catch (err) {
    res.status(500).json(err);
  }
  
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    Category.update({
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    res.json(`Changed category ${req.body.category_name}`);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  Catgegory.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbPostData => {
    if (!dbPostData) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }
    res.json(dbPostData);
  })
  .catch(err => {
    console.log(err);
    res.status(500);
  });
});

module.exports = router;
