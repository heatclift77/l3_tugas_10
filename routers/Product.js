const express = require('express');
const router = express.Router();
const Product = require('../controller/Product')

router.get('/', Product.getProduct);
router.post('/', Product.addProduct);
router.delete('/:id', Product.delProduct);
router.put('/:Id', Product.updateProduct);

module.exports = router;