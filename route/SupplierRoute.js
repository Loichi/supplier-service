const express = require('express');
const router = express.Router();
const SupplierController = require('../controller/SupplierController');


//GET
router.get('/', SupplierController.getAllSuppliers);
router.get('/:id', SupplierController.getSupplierById);

// //CREATE
router.post('/', SupplierController.createSupplier);

// //DELETE
router.delete('/:id', SupplierController.deleteSupplierById);


// //UPDATE
router.put('/:id', SupplierController.updateSupplierById);


module.exports = router;