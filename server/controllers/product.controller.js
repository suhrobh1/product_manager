const Product = require('../models/product.model');
module.exports ={
    createProduct: (req, res) => {
        Product.create(req.body)
            .then((newProduct) => {
                res.json(newProduct);
                console.log(newProduct)
            })
            .catch((err) =>{
                res.status(404).json(err);
                console.log("Problem in createProduct")
            })
    },
    findAllProducts: (req, res) =>{
        Product.find()
            .then((allProducts) =>{
                res.json(allProducts);
                console.log(allProducts);
            })
            .catch((err) => {
                res.json({message: "Problem in findAll", error: err})
                console.log("Find all products failed!")
            })
    },
    findOneProduct:(req, res) => {
        Product.findOne({_id: req.params.id})
            .then((oneProduct) => {
                res.json(oneProduct);
                console.log(oneProduct);
            })
            .catch((err) => {
                res.json({message: "Problem in findOneProduct", error: err});
                console.log("Find for the product failed!");
            })
    },
    updateProduct: (req, res) =>{
        Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
            .then((updatedProduct)=> {
                res.json(updatedProduct);
                console.log(updatedProduct);
            })
            .catch((err) => {
                res.status(400).json(err);
                console.log("Problem in updateProduct.");
            })
    },
    deleteProduct: (req, res) => {
        Product.deleteOne({_id: req.params.id})
            .then((oneProduct) => {
                res.json(oneProduct);
                console.log(oneProduct);
            })
            .catch((err) => {
                res.json({message: "Problem in deleteProduct", error: err});
                console.long("Delete product failed!");
            })
    }       
}
