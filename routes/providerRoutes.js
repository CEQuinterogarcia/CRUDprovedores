const express = require('express');
const router = express.Router();
const proController = require('../controllers/providerController');


// Rutas CRUD


router.post('/', proController.createProvider);
router.get('/:id', proController.getProvider);
router.put('/:id', proController.putProvider);
router.delete('/:id', proController.deleteProvider);
router.put('/:id/validar', proController.validateProvider);

module.exports = router;