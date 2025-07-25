const express = require('express');
const {body} = require('express-validator');
const captainController = require('../controllers/captain.Controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullName.firstName').isLength({min:3}).withMessage('First Name mjust be 3 characters or longer'),
    body('vehicle.color').isLength({min:3}).withMessage('Color mjust be 3 characters or longer'),
    body('password').isLength({min:6}).withMessage('Password mjust be 6 characters or longer'),
    body('vehicle.plate').isLength({min:3}).withMessage('Plate mjust be 3 characters or longer'),
    body('vehicle.capacity').isInt({min:1}).withMessage('Capacity must be atleast 1'),
    body('vehicle.vehicleType').isIn(['car','motorCycle', 'auto']).withMessage('Imvalid')
],
    captainController.registerCaptain
)


router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password mjust be 6 characters or longer'),    
],
    captainController.loginCaptain
    
)

router.get('/profile',authMiddleware.authCaptain, captainController.getCaptainProfile);


router.get('/logout',authMiddleware.authCaptain, captainController.logOutCaptain);



module.exports = router;