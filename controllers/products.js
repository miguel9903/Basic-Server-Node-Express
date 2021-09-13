
const controller = {
    
    getProducts: (req, res) => {
        res.json({
            message: 'Get Products'
        });
    },

    getProduct: (req, res) => {
        const { id } = req.params;
        res.json({
            message: `Get Product With ID: ${id}`
        });
    },

    createProduct: (req, res) => {
        res.json({
            message: 'Create Product'
        });
    },

    updateProduct: (req, res) => {
        const { id } = req.params;
        res.json({
            message: `Update Product With ID: ${id}`
        });
    },

    deleteProduct: (req, res) => {
        const { id } = req.params;
        res.json({
            message: `Delete Product With ID: ${id}`
        });
    }
    
}

module.exports = controller;