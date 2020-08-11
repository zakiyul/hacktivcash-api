const Product = require("../models/product");

const product = (app) => {
  //create
  app.post("/api/product", (req, res) => {
    const newProduct = new Product(req.body);
    newProduct
      .save()
      .then(() => {
        res.json({ info: "product created!" });
      })
      .catch((err) => console.error(err));
  });

  //read
  app.get("/api/product", (req, res) => {
    Product.find()
      .then((products) => {
        res.json(products);
      })
      .catch((err) => console.error(err));
  });

  //update
  app.put("/api/product/:id", (req, res) => {
    Product.update({ _id: req.params.id }, req.body)
      .then(() => {
        res.json({ info: "product updated!" });
      })
      .catch((err) => console.error(err));
  });

  //delete
  app.delete("/api/product/:id", (req, res) => {
    Product.remove({ _id: req.params.id })
      .then(() => {
        res.json({ info: "product removed!" });
      })
      .catch((err) => console.error(err));
  });
};

module.exports = product;
