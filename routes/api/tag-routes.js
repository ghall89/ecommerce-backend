const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const results = await Tag.findAll({
      attributes: [
        'id',
        'tag_name'
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

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data  try {
  try {
    const results = await Tag.findAll({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'tag_name'
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
  // create a new tag
  try {
    Tag.create({
      tag_name: req.body.tag_name
    })
    res.json(`Created the tag ${req.body.tag_name}`);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try {
    Tag.update({
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    res.json(`Changed tag to ${req.body.tag_name}`);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbPostData => {
    if (!dbPostData) {
      res.status(404).json({ message: 'No tag found with this id' });
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
