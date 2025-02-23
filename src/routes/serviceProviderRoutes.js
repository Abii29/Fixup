const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');

const {
    createProvider,
    loginProvider,
    getProviderProfile,
    deleteProvider,
    getAllProviders,
    updateProviderProfile,
    providerValidationRules,
    handleValidationErrors,
    loginValidationRules,
    updateAvailability
} = require('../controllers/serviceProviderController');

router.post('/signup', providerValidationRules(), handleValidationErrors, createProvider);
router.post('/login', loginValidationRules(), handleValidationErrors, loginProvider);
router.get('/profile', authenticateToken, getProviderProfile);
router.put('/profile', authenticateToken, updateProviderProfile);
router.put('/availability', authenticateToken, updateAvailability);
router.delete('/profile', authenticateToken, deleteProvider);
router.get('/', authenticateToken, getAllProviders);

module.exports = router;
