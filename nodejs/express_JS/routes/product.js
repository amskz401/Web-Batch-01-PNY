const express = require("express");
const router = express.Router();
const Product = require('../server/productSchema');

router.get('/', (req, res) => {
    let data = Product.find();
    data.then(products => {
        res.render('products', {products: products});
    });
});

router.get("/add-product", (req, res) => {
    res.render("add-product");
})

router.post("/add-product", (req, res) => {
    const product = new Product(req.body);
    product.save().then( res.redirect('/') );
    
})

router.get("/delete/:_id", (req, res) => {
    Product.deleteOne(req.params).then( data => {
        res.redirect('/');
    } )
});

router.get("/edit/:_id", (req, res) => {
    let data = Product.findOne(req.params);
    data.then(product => {
        console.log(product);
        res.render('edit-product', {product: product});
    });
})

router.post("/edit/:_id", (req, res) => {
    
    Product.updateOne(
        req.params,
        { $set: req.body }
    ).then( data => {
        res.redirect('/?msg=true');
    } )
})

module.exports = router;