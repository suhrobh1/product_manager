const productController = require('../controllers/product.controller');
const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get("/api/products", ProductController.findAllProducts);
    app.post("/api/products", ProductController.createProduct);
    app.get("./api/products:id", productController.findOneProduct);
    app.put("/api/products:id", ProductController.updateProduct);
    app.delete("/app/products:id", ProductController.deleteProduct);
}