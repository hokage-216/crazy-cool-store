const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    include: [
      {
        model: Product,
        as: 'product',
        through: ProductTag,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
      },
    ],
  })
  .then((tagData) => {
    res.json(tagData);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Book.findOne(
    {
      where: { 
        id: req.params.id 
      },
    }
  ).then((tagData) => {
    res.json(tagData);
  });
});

router.post('/', (req, res) => {
  // Use Sequelize's `create()` method to add a row to the table
  Tag.create({
    tag_name: req.body.tag_name
  })
    .then((newTag) => {
      res.json(newTag);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id
      },
    }
  )
    .then((updatedTag) => {
      res.json(updatedTag);
    })
    .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedTag) => {
      res.json(deletedTag);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
