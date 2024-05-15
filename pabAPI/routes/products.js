var express = require('express');
var router = express.Router();

const productModel = require("../models/products.model");

//path: localhost/products/{routername}
/* GET products listing. */
router.get("/", async (req, res, next) => {
  try {
    let products = await productModel.find({});

    return res.status(200).send(products);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
